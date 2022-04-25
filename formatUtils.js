
  export const getFormatPrice = (amount) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  };

  export const getFormattedDate = (dateString) => {
    let date = parse(dateString, "yyyy-MM-dd", new Date());
    return format(date, "MMMM yyyy");
  };