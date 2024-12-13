export const generateYears = (
  startYear = 1900,
  endYear = new Date().getFullYear()
) => {
  const years = [];
  for (let i = endYear; i >= startYear; i--) {
    years.push(i);
  }
  return years;
};

export const generateMonths = () => Array.from({ length: 12 }, (_, i) => i + 1);

export const generateDays = () => Array.from({ length: 31 }, (_, i) => i + 1);
