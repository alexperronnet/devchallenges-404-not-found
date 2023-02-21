import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout, AppLayout } from '@/layouts'
import { Login, Error, Dashboard } from '@/pages'

const routePaths = {
  login: '/',
  dashboard: '/app',
  error: '*'
}

/**
 * Component that handles routing in the application using React Router.
 * @function Router
 * @returns {JSX.Element} Returns the Router component.
 * @see {@link https://reactrouter.com/|React Router}
 */
export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routePaths.login} element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path={routePaths.error} element={<Error layout="main" />} />
      </Route>
      <Route path={routePaths.dashboard} element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={routePaths.error} element={<Error layout="app" />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
