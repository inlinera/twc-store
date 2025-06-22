export type ColorT = 'perple' | 'black' | 'white'

export interface IProduct {
  _id: string
  /** Название товара (отображается на витрине, в карточке и т.д.) */
  title: string
  /** Краткое описание или подзаголовок товара */
  subtitle: string
  /** Уникальный артикул товара (SKU, для поиска и учета) */
  article: string
  /** Бренд или производитель товара */
  brand: string
  /** Старая цена (для отображения скидки, если есть) */
  oldPrice?: number
  /** Актуальная цена товара */
  price: number
  /** Категории или путь до товара (например, ["Электроника", "Смартфоны"]) */
  path: string[]
  /** Характеристики товара (цвет, размер и количество) */
  specifications: {
    color: {
      [key in ColorT]: {
        size: {
          [key: string]: number
        }
      }
    }
  }
  /** Ссылки на изображения товара */
  images: string[]
}
