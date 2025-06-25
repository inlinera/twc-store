import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { time: '00:00', value: 0 },
  { time: '02:00', value: 5 },
  { time: '04:00', value: 3 },
  { time: '06:00', value: 10 },
  { time: '08:00', value: 20 },
  { time: '10:00', value: 15 },
  { time: '12:00', value: 25 },
  { time: '14:00', value: 18 },
  { time: '16:00', value: 30 },
  { time: '18:00', value: 22 },
  { time: '20:00', value: 35 },
  { time: '22:00', value: 33 },
  { time: '23:59', value: 38 },
]

export const OrderLineChartComponent = () => {
  return (
    <div
      className="df fdc aic"
      style={{
        padding: '20px',
        fontFamily: '"Open Sans", sans-serif',
        background: 'var(--el-color)',
        borderRadius: 5,
      }}
    >
      <h2 style={{ marginBottom: 4 }}>Статистика</h2>

      <div style={{ marginBottom: 10 }} className="df aic">
        <div style={{ width: 40, height: 15, backgroundColor: 'red', marginRight: 8 }} />
        <span>Заказы</span>
      </div>

      <LineChart width={420} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" interval={1} tick={{ fontSize: 10 }} angle={0} height={30} />
        <YAxis domain={[0, 40]} ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40]} tick={{ fontSize: 10 }} />
        <Tooltip />
        <Line type="linear" dataKey="value" stroke="red" strokeWidth={2} dot />
      </LineChart>
    </div>
  )
}
