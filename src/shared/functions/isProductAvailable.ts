import type { IProduct } from '../interfaces/IProduct'

export const isProductAvailable = (product: IProduct, color?: string, size?: string): boolean => {
  if (!product?.specifications) {
    return false
  }

  const { specifications } = product

  if (!color || !size) {
    // Проверяем все цвета и размеры на наличие хотя бы одного доступного товара
    return Object.values(specifications.color).some(colorSpec =>
      Object.values(colorSpec.size).some(quantity => quantity > 0)
    )
  }

  // Проверяем конкретный цвет и размер
  const colorSpec = specifications.color[color as keyof typeof specifications.color]
  if (!colorSpec) {
    return false
  }

  const quantity = colorSpec.size[size]
  return quantity > 0
}
