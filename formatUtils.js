
import { parse, format } from "date-fns";

  export const getFormattedNumber = (amount) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(Math.abs(amount));
  };

  export const getFormattedDate = (dateString) => {
    let date = parse(dateString, "yyyy-MM-dd", new Date());
    return format(date, "MMMM yyyy");
  };