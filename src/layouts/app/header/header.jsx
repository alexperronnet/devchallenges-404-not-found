import { NavLink, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { ReactComponent as IconLogout } from '@/assets/icon-logout.svg'
import css from '@/layouts/app/header/header.module.scss'

const routes = [
  { path: '', label: 'Accueil' },
  { path: 'profil', label: 'Profil' },
  { path: 'reglage', label: 'Réglage' },
  { path: 'communaute', label: 'Communauté' }
]

/**
 * Component that renders the header of the application when the user is logged in.
 * @function AppHeader
 * @returns {JSX.Element} Returns a React element for the header of the application when the user is logged in.
 */
export const AppHeader = () => {
  const navigate = useNavigate()

  const handleLogout = () => localStorage.removeItem('userId') || navigate('/')

  return (
    <header className={css.header}>
      <Logo className={css.logo} />
      <nav className={css.nav}>
        {routes.map(({ path, label }) => (
          <NavLink className={css.navLink} key={path} to={path} end>
            {label}
          </NavLink>
        ))}
        <button className={css.logout} onClick={handleLogout}>
          <IconLogout className={css.logoutIcon} />
          <span className={css.logoutLabel}>Se déconnecter</span>
        </button>
      </nav>
    </header>
  )
}
