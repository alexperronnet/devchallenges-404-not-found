import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import css from '@/pages/error/error.module.scss'

const titles = {
  404: '404',
  500: 'Indisponible'
}

const messages = {
  404: "La page que vous recherchez n'existe pas ou a été déplacée...",
  500: "Malheuresement cette page ou cette fonctionnalité n'est pas encore disponible..."
}

export const Error = ({ layout, status }) => (
  <section className={css.error}>
    <h1 className={css.title}>{titles[status]}</h1>
    <p className={css.text}>{messages[status]}</p>
    <Link className={css.link} to={layout === 'app' ? '/app' : '/'}>
      {layout === 'app' ? 'Tableau de bord' : 'Connectez-vous'}
    </Link>
  </section>
)

Error.propTypes = {
  layout: PropTypes.oneOf(['main', 'app']).isRequired,
  status: PropTypes.oneOf([404, 500]).isRequired
}
