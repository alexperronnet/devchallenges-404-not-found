import PropTypes from 'prop-types'
import css from '@/components/error-message/error-message.module.scss'

export const ErrorMessage = ({ title, message }) => (
  <section className={css.errorMessage}>
    <h2 className={css.title}>{title}</h2>
    <p>{message}</p>
  </section>
)

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
