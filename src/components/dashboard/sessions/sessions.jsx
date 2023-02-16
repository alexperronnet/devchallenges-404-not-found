import { ResponsiveContainer, LineChart, Tooltip, XAxis, Line, Rectangle } from 'recharts'
import css from '@/components/dashboard/sessions/sessions.module.scss'

const sessions = [
  { day: 'lundi', sessionLength: 30 },
  { day: 'mardi', sessionLength: 23 },
  { day: 'mercredi', sessionLength: 45 },
  { day: 'jeudi', sessionLength: 50 },
  { day: 'vendredi', sessionLength: 0 },
  { day: 'samedi', sessionLength: 0 },
  { day: 'dimanche', sessionLength: 60 }
]

const sessionsFormatted = [
  { day: '', sessionLength: sessions[0].sessionLength },
  ...sessions,
  { day: '', sessionLength: sessions[sessions.length - 1].sessionLength }
]

export const Sessions = () => (
  <article className={css.sessions}>
    <h2 className={css.title}>Durée moyenne des sessions</h2>
    <ResponsiveContainer className={css.chart}>
      <LineChart data={sessionsFormatted} margin={{ top: 100, right: 0, left: 0, bottom: 60 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--line)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="var(--line)" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Tooltip
          content={<CustomTooltip />}
          cursor={<CustomCursor width={1280} height={500} />}
          wrapperStyle={{ outline: 'none' }}
        />
        <XAxis
          dataKey="day"
          stroke="var(--legend)"
          tickLine={false}
          axisLine={false}
          tickMargin={40}
          tickFormatter={day => day.slice(0, 1).toUpperCase()}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={3}
          dot={false}
          animationDuration={1000}
          stroke="url(#lineGradient)"
        />
      </LineChart>
    </ResponsiveContainer>
  </article>
)

const CustomTooltip = properties => {
  const { active, payload } = properties

  if (active && payload) {
    return <p className={css.tooltip}>{`${payload[0].value} min`}</p>
  }

  return
}

const CustomCursor = properties => {
  const { points, width, height } = properties
  const { x } = points[0]

  return <Rectangle fill="rgba(0,0,0,0.15)" stroke="none" x={x} y={0} width={width} height={height} />
}
