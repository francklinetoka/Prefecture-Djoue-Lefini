// src/pages/admin/components/AdminHeader.tsx
import { Bell, User, LogOut, Shield } from 'lucide-react'
import styles from './AdminHeader.module.css'
import { useNavigate } from 'react-router-dom'

export default function AdminHeader() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // À connecter avec ton système d'auth plus tard
    navigate('/admin/login')
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Shield className={styles.shield} />
        <div>
          <h1 className={styles.title}>Espace d’administration</h1>
          <p className={styles.subtitle}>Préfecture de Djoué-Léfini • République du Congo</p>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.notification}>
          <Bell size={20} />
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.userMenu}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <User size={20} />
            </div>
            <div>
              <p className={styles.name}>Francklin Etoka</p>
              <p className={styles.role}>Super Administrateur</p>
            </div>
          </div>

          <button onClick={handleLogout} className={styles.logoutBtn}>
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}