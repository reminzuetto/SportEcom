export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "USD",
  })
    .format(number)
    .replace("US$", "$");
};

// The Intl.NumberFormat object helps to format the currency. Learn about it https://docs.w3cub.com/javascript/global_objects/intl/numberformat
