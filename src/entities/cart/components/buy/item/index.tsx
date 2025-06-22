import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'

export const BuyList = observer(() => {
  const { buyInfo } = states

  return (
    <ul className="df fdc">
      {buyInfo?.map((p, id) => (
        <li key={id}>
          <Link to={`/product/${p._id}`}>
            <img src={p.images[0]} alt={p.brand} />
            <div className="df fdc">
              <h3>{p.title}</h3>
              <p>
                {p.count} * {p.price} ₽
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
})
