import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <Outlet />
  )
}
