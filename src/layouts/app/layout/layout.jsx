import { Outlet } from 'react-router-dom'
import { useIsMobile } from '@/hooks'
import { AppHeader, AppHeaderMob, AppSidebar } from '@/layouts'
import css from '@/layouts/app/layout/layout.module.scss'

export const AppLayout = () => {
  const { isMobile } = useIsMobile(768)

  return (
    <div className={css.layout}>
      {isMobile ? <AppHeaderMob /> : <AppHeader />}
      {!isMobile && <AppSidebar />}
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  )
}
