import { Outlet } from 'react-router-dom'
import { MainHeader, MainFooter } from '@/layouts'
import css from '@/layouts/main/layout/layout.module.scss'

export const MainLayout = () => (
  <div className={css.layout}>
    <MainHeader />
    <main>
      <Outlet />
    </main>
    <MainFooter />
  </div>
)
