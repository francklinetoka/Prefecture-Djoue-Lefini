// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Layout & Pages publiques
import Layout from './components/Layout'
import Index from './pages/Index'
import ActualitesPage from './pages/ActualitesPage'
import District from './pages/District'
import DistrictDetail from './pages/DistrictDetail'
import Contact from './pages/Contact'
import Gouvernance from './pages/Gouvernance'
import Transparence from './pages/Transparence'
import Demarches from './pages/Demarches'
import DemarcheDetail from './pages/DemarcheDetail'

// Pages Admin
import Login from './pages/admin/Login'
import SuperLogin from './pages/admin/SuperLogin'
import Register from './pages/admin/Register'
import Dashboard from './pages/admin/Dashboard'
import ActualitesList from './pages/admin/actualites/ActualitesList'
import DocumentsList from './pages/admin/documents/DocumentsList'
import DistrictsList from './pages/admin/districts/DistrictsList'
import AdminsList from './pages/admin/utilisateurs/AdminsList'

// Route protégée (temporaire, tu pourras l’améliorer plus tard)
const ProtectedAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = true // à connecter à ton auth plus tard
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* SITE PUBLIC */}
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/gouvernance" element={<Gouvernance />} />
          <Route path="/transparence" element={<Transparence />} />
          <Route path="/districts" element={<District />} />
          <Route path="/districts/:slug" element={<DistrictDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/demarches" element={<Demarches />} />
          <Route path="/services/demarches/:id" element={<DemarcheDetail />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/super-login" element={<SuperLogin />} />
        <Route path="/admin/register" element={<Register />} />

        <Route path="/admin/dashboard" element={<ProtectedAdminRoute><Dashboard /></ProtectedAdminRoute>} />
        <Route path="/admin/actualites" element={<ProtectedAdminRoute><ActualitesList /></ProtectedAdminRoute>} />
        <Route path="/admin/documents" element={<ProtectedAdminRoute><DocumentsList /></ProtectedAdminRoute>} />
        <Route path="/admin/districts" element={<ProtectedAdminRoute><DistrictsList /></ProtectedAdminRoute>} />
        <Route path="/admin/utilisateurs" element={<ProtectedAdminRoute><AdminsList /></ProtectedAdminRoute>} />

        {/* Redirections */}
        <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App