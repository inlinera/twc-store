import type { IProduct } from '../interfaces/IProduct'

export const isProductAvailable = (product: IProduct): boolean => {
  if (!product?.specifications) {
    return false
  }

  const { specifications } = product

  // Проверяем все цвета и размеры на наличие хотя бы одного доступного товара
  return Object.values(specifications.color).some(colorSpec =>
    Object.values(colorSpec.size).some(quantity => quantity > 0)
  )
}
