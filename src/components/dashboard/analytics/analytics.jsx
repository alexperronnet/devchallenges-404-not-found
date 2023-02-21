import { Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import PropTypes from 'prop-types'
import css from '@/components/dashboard/analytics/analytics.module.scss'

/**
 * Renders an analytics component.
 * @function Analytics
 * @param {Object} data - The data to display.
 * @param {Array} data.activity - The activity data.
 * @param {Array} data.averageSessions - The average sessions data.
 * @param {Array} data.performance - The performance data.
 * @param {Object} data.mainData - The main data.
 * @param {number} data.mainData.todayScore - The score of the current day.
 * @param {Array} data.mainData.keyData - The data of key nutrients.
 * @returns {JSX.Element} - The rendered component.
 */
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
