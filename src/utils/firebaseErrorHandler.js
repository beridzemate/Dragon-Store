export const handleFirebaseError = (error) => {
    switch (error.code) {
      case "permission-denied":
        return "You don’t have permission to perform this action.";
      case "unauthenticated":
        return "Please log in to continue.";
      default:
        return "An error occurred. Please try again.";
    }
  };