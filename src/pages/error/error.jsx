import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import css from '@/pages/error/error.module.scss'

const errorTitles = {
  404: '404',
  500: 'Indisponible'
}

const errorMessages = {
  404: "La page que vous recherchez n'existe pas ou a été déplacée...",
  500: "Malheureusement cette page ou cette fonctionnalité n'est pas encore disponible..."
}

export const Error = ({ layout, status }) => (
  <section className={css.error}>
    <h1 className={css.title}>{errorTitles[status]}</h1>
    <p className={css.text}>{errorMessages[status]}</p>
    <Link className={css.link} to={layout === 'app' ? '/app' : '/'}>
      {layout === 'app' ? 'Tableau de bord' : 'Connexion'}
    </Link>
  </section>
)

Error.propTypes = {
  layout: PropTypes.oneOf(['main', 'app']).isRequired,
  status: PropTypes.oneOf([404, 500]).isRequired
}
