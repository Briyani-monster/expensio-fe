// Function to format numbers with commas, decimal points, etc.
export function formatNumber(number: number, locale = "en-US") {
  return new Intl.NumberFormat(locale).format(number);
}

// Function to format numbers as currency
export function amountToCurrency(
  amount: number,
  currency = "INR",
  locale = "en-US",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}
