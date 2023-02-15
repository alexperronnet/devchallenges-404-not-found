import { ResponsiveContainer, RadarChart, Radar, PolarAngleAxis, PolarGrid } from 'recharts'
import css from '@/components/performance/performance.module.scss'

const performance = [
  { kind: 'intensité', value: 110 },
  { kind: 'vitesse', value: 220 },
  { kind: 'force', value: 80 },
  { kind: 'endurance', value: 80 },
  { kind: 'énergie', value: 240 },
  { kind: 'cardio', value: 200 }
]

export const Performance = () => (
  <article className={css.performance}>
    <ResponsiveContainer className={css.chart}>
      <RadarChart data={performance} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <PolarGrid radialLines={false} stroke="var(--grid)" />
        <PolarAngleAxis dataKey="kind" style={{ fontSize: '.75rem' }} tick={{ fill: 'var(--grid)' }} dy={4} />
        <Radar
          dataKey="value"
          stroke="var(--performance)"
          strokeWidth={2}
          fill="var(--performance)"
          fillOpacity={0.5}
          animationBegin={0}
          animationDuration={1000}
        />
      </RadarChart>
    </ResponsiveContainer>
  </article>
)
