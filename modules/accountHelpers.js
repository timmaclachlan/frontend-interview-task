import { calculateIncrease, calculatePercent, calculateMean } from "../mathHelpers";

export const getValuationIncreaseDetails = (account) => {
  const valuationChange = calculateIncrease(account?.originalPurchasePrice, account?.recentValuation.amount);
  const valuationChangePercent = calculatePercent(
    account?.originalPurchasePrice,
    valuationChange
  );
  const meanAnnualAppreciation = calculateMean(valuationChangePercent, 6);

  return {
    valuationChange,
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
