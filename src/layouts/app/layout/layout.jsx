import { Outlet } from 'react-router-dom'
import { AppHeader, AppSidebar } from '@/layouts'
import css from '@/layouts/app/layout/layout.module.scss'

export const AppLayout = () => (
  <div className={css.layout}>
    <AppHeader />
    <AppSidebar />
    <main className={css.main}>
      <Outlet />
    </main>
  </div>
)
