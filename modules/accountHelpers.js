import { calculatePercentIncrease, calculateMean } from "../mathHelpers";

export const getValuationIncreaseDetails = (account) => {
  const valuationChangePercent = calculatePercentIncrease(
    account?.originalPurchasePrice,
    account?.recentValuation.amount
  );
  const meanAnnualAppreciation = calculateMean(valuationChangePercent, 6);

  return {
    valuationChangePercent,
    meanAnnualAppreciation,
  };
};

export const getMortgage = (account) => {
  let mortgage;
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }
  return mortgage;
};
