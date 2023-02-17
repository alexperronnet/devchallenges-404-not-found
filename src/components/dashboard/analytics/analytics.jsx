import { Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import PropTypes from 'prop-types'
import css from '@/components/dashboard/analytics/analytics.module.scss'

export const Analytics = ({ data }) => {
  const activity = data.activity
  const sessions = data.averageSessions
  const performance = data.performance
  const score = data.mainData.todayScore
  const keyData = data.mainData.keyData

  return (
    <section className={css.analytics}>
      <Activity activity={activity} />
      <Sessions sessions={sessions} />
      <Performance performance={performance} />
      <Score score={score} />
      {keyData.map((nutrient, index) => (
        <Nutrient key={index} nutrient={nutrient} />
      ))}
    </section>
  )
}

Analytics.propTypes = {
  data: PropTypes.object.isRequired
}
