export const calculateIncrease = (originalAmount, newAmount) => {
  return newAmount - originalAmount;
}

export const calculatePercent = (originalAmount, newAmount) => {
  return (newAmount / originalAmount) * 100;
}

export const calculateMean = (sample, population) => {
  return sample / population;
}
