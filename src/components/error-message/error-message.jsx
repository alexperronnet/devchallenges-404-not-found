import PropTypes from 'prop-types'
import css from '@/components/error-message/error-message.module.scss'

/**
 * Component that renders an error message.
 * @function ErrorMessage
 * @param {Object} props - Component props.
 * @param {string} props.title - The title of the error message.
 * @param {string} props.message - The content of the error message.
 * @returns {JSX.Element} Returns a React element for an error message.
 */
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
