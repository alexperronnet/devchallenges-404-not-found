import { Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import css from '@/components/dashboard/analytics/analytics.module.scss'

export const Analytics = ({ data }) => (
  <section className={css.analytics}>
    <Activity activity={data.activity} />
    <Sessions sessions={data.averageSessions} />
    <Performance performance={data.performance} />
    <Score score={data.mainData.todayScore} />
    {data.mainData.keyData.map((nutrient, index) => (
      <Nutrient key={index} nutrient={nutrient} />
    ))}
  </section>
)
