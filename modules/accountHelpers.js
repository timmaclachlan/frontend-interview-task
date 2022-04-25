import { calculateIncrease, calculatePercent, calculateMean } from "../mathHelpers";

const getYearsDifference = (yearStart, yearEnd) => {
  let years = yearEnd.getFullYear() - yearStart.getFullYear();
  return years;
}
export const getValuationIncreaseDetails = (account) => {
  const valuationChange = calculateIncrease(account?.originalPurchasePrice, account?.recentValuation.amount);
  const valuationChangePercent = calculatePercent(
    account?.originalPurchasePrice,
    valuationChange
  );
  const yearsDifference = getYearsDifference(new Date(account?.originalPurchasePriceDate), new Date())
  const meanAnnualAppreciation = calculateMean(valuationChangePercent, yearsDifference);

  return {
    valuationChange,
    valuationChangePercent,
    meanAnnualAppreciation,
  };
};

export const getMortgage = (account) => {
  let mortgage = undefined;
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }
  return mortgage;
};
