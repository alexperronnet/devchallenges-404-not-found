import { Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import PropTypes from 'prop-types'
import css from '@/components/dashboard/analytics/analytics.module.scss'

export const Analytics = ({ data }) => {
  const { activity, averageSessions, performance, mainData } = data

  return (
    <section className={css.analytics}>
      <Activity activity={activity} />
      <Sessions sessions={averageSessions} />
      <Performance performance={performance} />
      <Score score={mainData.todayScore} />
      {mainData.keyData.map((nutrient, index) => (
        <Nutrient key={index} nutrient={nutrient} />
      ))}
    </section>
  )
}

Analytics.propTypes = {
  data: PropTypes.object.isRequired
}
