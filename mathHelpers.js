export const calculatePercentIncrease = (originalAmount, newAmount) => {
  const change = newAmount - originalAmount;
  return (change / originalAmount) * 100;
}

export const calculateMean = (sample, population) => {
  return sample / population;
}
