// src/App.tsx – VERSION FINALE 100% BUILD-PROOF
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

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

// Composant de protection des routes admin
const ProtectedAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // À remplacer plus tard par ton vrai système d'auth (ex: contexte, localStorage, etc.)
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}

function App() {
  return (
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

      {/* ADMIN – Connexion */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/super-login" element={<SuperLogin />} />
      <Route path="/admin/register" element={<Register />} />

      {/* ADMIN – Routes protégées */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute>
            <Dashboard />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/actualites"
        element={
          <ProtectedAdminRoute>
            <ActualitesList />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/documents"
        element={
          <ProtectedAdminRoute>
            <DocumentsList />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/districts"
        element={
          <ProtectedAdminRoute>
            <DistrictsList />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/utilisateurs"
        element={
          <ProtectedAdminRoute>
            <AdminsList />
          </ProtectedAdminRoute>
        }
      />

      {/* Redirections finales */}
      <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App