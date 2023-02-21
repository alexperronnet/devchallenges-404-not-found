import { NavLink } from 'react-router-dom'
import { ReactComponent as IconRunning } from '@/assets/icon-running.svg'
import { ReactComponent as IconSwimming } from '@/assets/icon-swimming.svg'
import { ReactComponent as IconBiking } from '@/assets/icon-biking.svg'
import { ReactComponent as IconDumbbell } from '@/assets/icon-dumbbell.svg'
import css from '@/layouts/app/sidebar/sidebar.module.scss'

const routes = [
  { path: 'course', icon: IconRunning },
  { path: 'natation', icon: IconSwimming },
  { path: 'cyclisme', icon: IconBiking },
  { path: 'musculation', icon: IconDumbbell }
]

const currentYear = new Date().getFullYear()

/**
 * Component that renders the sidebar of the application.
 * @function AppSidebar
 * @returns {JSX.Element} Returns a React element for the sidebar of the application.
 */
export const AppSidebar = () => (
  <aside className={css.sidebar}>
    <nav className={css.nav}>
      {routes.map(({ path, icon: Icon }) => (
        <NavLink className={css.navLink} key={path} to={path} end>
          <Icon className={css.navLinkIcon} />
          <span className={css.navLinkLabel}>Redirection vers {path}</span>
        </NavLink>
      ))}
    </nav>
    <footer className={css.footer}>Copiryght, SportSee {currentYear}</footer>
  </aside>
)
