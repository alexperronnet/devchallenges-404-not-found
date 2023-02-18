import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import css from '@/components/dashboard/activity/activity.module.scss'

export const Activity = ({ activity }) => (
  <article className={css.activity}>
    <header className={css.header}>
      <h2 className={css.title}>Activité quotidienne</h2>
      <div className={css.legend}>
        <span className={`${css.legendItem} ${css.poids}`}>Poids (kg)</span>
        <span className={`${css.legendItem} ${css.calories}`}>Calories brûlées (kCal)</span>
      </div>
    </header>
    <ResponsiveContainer className={css.chart}>
      <BarChart data={activity} barGap={'5%'} margin={0} barSize={10}>
        <CartesianGrid strokeDasharray="3" vertical={false} stroke="var(--line)" />
        <XAxis
          dataKey="day"
          stroke="var(--text)"
          tickMargin={10}
          tickLine={false}
          tickFormatter={(_, index) => index + 1}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={['dataMin - 1', 'dataMax + 1']}
          allowDecimals={false}
          orientation="right"
          tickMargin={20}
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'var(--text)' }}
        />
        <YAxis yAxisId="cal" dataKey="calories" domain={[0, 'dataMax']} hide={true} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'var(--background)', opacity: '0.1' }}
          wrapperStyle={{ outline: 'none' }}
        />
        <Bar yAxisId="kg" dataKey="kilogram" fill="var(--calories)" radius={[50, 50, 0, 0]} animationDuration={1000} />
        <Bar yAxisId="cal" dataKey="calories" fill="var(--poids)" radius={[50, 50, 0, 0]} animationDuration={1000} />
      </BarChart>
    </ResponsiveContainer>
  </article>
)

const CustomTooltip = properties => {
  const { active, payload } = properties

  if (active && payload) {
    return (
      <div className={css.tooltip}>
        <p className={`${css.tooltipValue} ${css.tooltipValuePoids}`}>{`${payload[0].value} kg`}</p>
        <p className={`${css.tooltipValue} ${css.tooltipValueCalories}`}>{`${payload[1].value} kCal`}</p>
      </div>
    )
  }

  return
}
