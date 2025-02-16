export const validateProduct = (product) => {
    const errors = [];
    if (!product.name) errors.push("Name is required");
    if (product.price <= 0) errors.push("Price must be greater than 0");
    return errors;
  };