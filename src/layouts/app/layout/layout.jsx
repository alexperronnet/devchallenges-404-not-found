import { Outlet } from 'react-router-dom'
import { DataProvider } from '@/contexts'
import { useIsMobile } from '@/hooks'
import { AppHeader, AppHeaderMob, AppSidebar } from '@/layouts'
import css from '@/layouts/app/layout/layout.module.scss'

/**
 * Component that renders the layout of the application.
 * @function AppLayout
 * @returns {JSX.Element} Returns a React element for the layout of the application.
 */
export const AppLayout = () => {
  const { isMobile } = useIsMobile(768)

  return (
    <DataProvider>
      <div className={css.layout}>
        {isMobile ? <AppHeaderMob /> : <AppHeader />}
        {!isMobile && <AppSidebar />}
        <main className={css.main}>
          <Outlet />
        </main>
      </div>
    </DataProvider>
  )
}
