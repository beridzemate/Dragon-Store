// src/utils/formatPrice.js
export const formatPrice = (price) => {
    return new Intl.NumberFormat("ka-GE", {  // Georgian locale
      style: "currency",
      currency: "GEL",  // Georgian Lari currency code
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };