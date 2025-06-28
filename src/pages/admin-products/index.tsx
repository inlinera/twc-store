import { Search } from '@/shared/icons/Search'
import s from './index.module.scss'
import { Input } from '@/shared/ui/input'
import { Line } from '@/entities/@common/line'
import { PencilSimple } from '@/shared/icons/PencilSimple'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { products } from '@/shared/stores/api/products'
import { isProductAvailable } from '@/shared/functions/isProductAvailable'

const infoProducts = [
  {
    content: 'Название',
  },
  {
    content: 'Размер',
  },
  {
    content: 'Цена',
  },
  {
    content: 'Остаток',
  },
  {
    content: 'Статус',
  },
  {
    content: 'Действие',
  },
]

const AdminProductsPage = observer(() => {
  const { getProducts, items, loading } = products

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className={`${s.adminProductsPage} df fdc`}>
      <div className={`${s.inputs} df aic`}>
        <Input placeholder="Наименование" endElement={<Search />} />
        <Input placeholder="Категория" endElement={<Search />} />
        <Input placeholder="Код" endElement={<Search />} />
      </div>
      <div className={`${s.list} df fdc aic`}>
        <Line items={infoProducts} />
        {loading ? (
          <div>Loading...</div>
        ) : items && items.length > 0 ? (
          items.map((item, id) => {
            const product = [
              {
                content: `${item.title}`,
              },
              {
                content: `${Object.keys(item.specifications.color.white.size)[0]}`,
              },
              {
                content: `${item.price} ₽`,
              },
              {
                content: `${
                  item.specifications.color.white.size[Object.keys(item.specifications.color.white.size)[0]]
                }`,
              },
              {
                content: isProductAvailable(item) ? 'В продаже' : 'Нет в продаже',
                isGreen: isProductAvailable(item),
              },
              {
                content: (
                  <button>
                    <PencilSimple />
                  </button>
                ),
              },
            ]

            return <Line items={product} key={id} />
          })
        ) : (
          <div>Товаров нет</div>
        )}
      </div>
    </div>
  )
})

export default AdminProductsPage
