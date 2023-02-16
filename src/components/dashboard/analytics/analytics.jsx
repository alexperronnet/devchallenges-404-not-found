import { Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import css from '@/components/dashboard/analytics/analytics.module.scss'

export const Analytics = ({ data }) => {
  const performance = data.performance
  const score = data.mainData.todayScore
  const keyData = data.mainData.keyData

  return (
    <section className={css.analytics}>
      <Activity />
      <Sessions />
      <Performance performance={performance} />
      <Score score={score} />
      {keyData.map((nutrient, index) => (
        <Nutrient key={index} nutrient={nutrient} />
      ))}
    </section>
  )
}
