import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import css from '@/pages/error/error.module.scss'

const layoutOptions = {
  main: 'main',
  app: 'app'
}

/**
 * Component that renders the error page for the application.
 * @function Error
 * @param {string} layout - The layout for the error page, either "app" or "main".
 * @returns {JSX.Element} Returns the Error component.
 */
export const Error = ({ layout }) => (
  <section className={css.error}>
    <h1 className={css.title}>404</h1>
    <p className={css.text}>La page que vous recherchez n&apos;existe pas ou a été déplacée...</p>
    <Link className={css.link} to={layout === layoutOptions.app ? '/app' : '/'}>
      {layout === layoutOptions.app ? 'Tableau de bord' : 'Connexion'}
    </Link>
  </section>
)

Error.propTypes = {
  layout: PropTypes.oneOf([layoutOptions.main, layoutOptions.app]).isRequired
}
