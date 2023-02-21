import { Outlet } from 'react-router-dom'
import { MainHeader, MainFooter } from '@/layouts'
import css from '@/layouts/main/layout/layout.module.scss'

/**
 * Component that renders the main layout of the application.
 * @function MainLayout
 * @returns {JSX.Element} Returns a React element for the main layout of the application.
 */
export const MainLayout = () => (
  <div className={css.layout}>
    <MainHeader />
    <main>
      <Outlet />
    </main>
    <MainFooter />
  </div>
)
