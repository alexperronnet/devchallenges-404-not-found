import { ResponsiveContainer, PieChart, Pie, Label } from 'recharts'
import css from '@/components/score/score.module.scss'

const score = 0.3

const pieData = [
  { value: score, fill: 'var(--progress)' },
  { value: 1 - score, fill: 'var(--remaining)' }
]

export const Score = () => (
  <article className={css.score}>
    <h2 className={css.title}>Score</h2>
    <ResponsiveContainer className={css.chart}>
      <PieChart margin={{ top: 40, right: 40, bottom: 40, left: 40 }} barCategoryGap={0} barGap={0}>
        <Pie
          data={pieData}
          dataKey="value"
          innerRadius="87%"
          outerRadius="100%"
          startAngle={90}
          endAngle={450}
          cornerRadius="50%"
          blendStroke={true}
          animationBegin={0}
          animationDuration={1000}
          style={{ outline: 'none' }}
        />
        <Pie
          data={[{ value: 1, fill: 'var(--background)' }]}
          dataKey="value"
          innerRadius="0%"
          outerRadius="87%"
          animationBegin={0}
          animationDuration={0}
          style={{ outline: 'none' }}
        >
          <Label
            value={`${Math.round(score * 100)}%`}
            position="center"
            dx={0}
            dy={-10}
            fill="var(--title)"
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          />
          <Label
            value="de votre objectif"
            position="center"
            dx={0}
            dy={20}
            fill="var(--baseline)"
            style={{ fontSize: '.875rem' }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </article>
)
