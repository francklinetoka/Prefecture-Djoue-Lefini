// src/pages/admin/Dashboard.tsx
import AdminLayout from './components/AdminLayout'
import { Newspaper, FileText, MapPin, Users } from 'lucide-react'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const isSuperAdmin = true // À gérer via contexte/auth

  const stats = [
    { label: 'Actualités', value: '48', icon: Newspaper, color: 'green' },
    { label: 'Documents', value: '124', icon: FileText, color: 'yellow' },
    { label: 'Districts', value: '8', icon: MapPin, color: 'red' },
    ...(isSuperAdmin ? [{ label: 'Administrateurs', value: '12', icon: Users, color: 'blue' }] : [])
  ]

  return (
    <AdminLayout userType={isSuperAdmin ? 'superadmin' : 'admin'}>
      <div className={styles.dashboard}>
        <h1 className="text-heading text-4xl mb-8">Tableau de bord</h1>

        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={`${styles.card} ${styles[stat.color]}`}>
              <stat.icon size={40} />
              <div>
                <p className={styles.label}>{stat.label}</p>
                <p className={styles.value}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.recent}>
          <h2 className="text-2xl text-heading mb-4">Activité récente</h2>
          <p className="text-gray-400">Aucune activité pour le moment.</p>
        </div>
      </div>
    </AdminLayout>
  )
}