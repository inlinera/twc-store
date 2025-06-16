export const calculateDiscount = (oldPrice: number, currentPrice: number) => {
  if (!oldPrice || oldPrice <= currentPrice) return 0
  return Math.round(((oldPrice - currentPrice) / oldPrice) * 100)
}