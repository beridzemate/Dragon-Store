class AppError extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  const catchAsync = (fn) => {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };
  
  module.exports = {
    AppError,
    catchAsync
  };