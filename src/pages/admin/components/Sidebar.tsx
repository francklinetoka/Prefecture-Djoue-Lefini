// src/pages/admin/components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom'
import { Home, Newspaper, FileText, MapPin, Users, LogOut, Shield } from 'lucide-react'
import styles from './Sidebar.module.css'

interface SidebarProps {
  userType: 'admin' | 'superadmin'
}

const adminLinks = [
  { to: '/admin/dashboard', label: 'Tableau de bord', icon: Home },
  { to: '/admin/actualites', label: 'Actualités', icon: Newspaper },
  { to: '/admin/documents', label: 'Documents', icon: FileText },
  { to: '/admin/districts', label: 'Districts', icon: MapPin },
]

const superAdminLinks = [
  ...adminLinks,
  { to: '/admin/utilisateurs', label: 'Administrateurs', icon: Users },
]

export default function Sidebar({ userType }: SidebarProps) {
  const location = useLocation()
  const links = userType === 'superadmin' ? superAdminLinks : adminLinks

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Shield className="w-8 h-8 text-[var(--cg-yellow-400)]" />
        <span>PRÉFECTURE</span>
      </div>

      <nav className={styles.nav}>
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`${styles.link} ${location.pathname.startsWith(to) ? styles.active : ''}`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <button className={styles.logout}>
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  )
}