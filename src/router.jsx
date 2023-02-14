import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout, AppLayout } from '@/layouts'
import { Login, Error, Dashboard } from '@/pages'

const notAvailableRoutes = ['profil', 'reglage', 'communaute', 'course', 'natation', 'cyclisme', 'musculation']

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Error />} />
        {notAvailableRoutes.map(naRoute => (
          <Route key={naRoute} path={naRoute} element={<Error />} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)
