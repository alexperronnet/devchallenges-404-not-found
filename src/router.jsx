import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout, AppLayout } from '@/layouts'
import { Login, Error, Dashboard } from '@/pages'

const notAvailableRoutes = ['profil', 'reglage', 'communaute', 'course', 'natation', 'cyclisme', 'musculation']

/**
 * The main router component that defines the routes for the application.
 * @function
 * @returns {JSX.Element} The router component.
 */
export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="*" element={<Error layout="main" status={404} />} />
      </Route>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Error layout="app" status={404} />} />
        {notAvailableRoutes.map(naRoute => (
          <Route key={naRoute} path={naRoute} element={<Error layout="app" status={500} />} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)
