import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { ReactComponent as IconLogin } from '@/assets/icon-login.svg'
import css from '@/layouts/main/header/header.module.scss'

export const MainHeader = () => (
  <header className={css.header}>
    <Logo className={css.logo} />
    <Link className={css.login} to="/">
      <IconLogin className={css.loginIcon} />
      <span className={css.loginLabel}>Se connecter</span>
    </Link>
  </header>
)
