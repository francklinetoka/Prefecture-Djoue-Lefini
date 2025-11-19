// src/pages/admin/components/AdminLayout.tsx
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import { ReactNode } from 'react'
import styles from './AdminLayout.module.css'

interface AdminLayoutProps {
  children: ReactNode
  userType: 'admin' | 'superadmin'
}

export default function AdminLayout({ children, userType }: AdminLayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar userType={userType} />
      <div className={styles.main}>
        <AdminHeader />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  )
}