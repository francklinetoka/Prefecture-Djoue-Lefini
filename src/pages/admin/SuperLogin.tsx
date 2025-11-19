// src/pages/admin/SuperLogin.tsx
import { useNavigate } from 'react-router-dom'
import { Shield, Crown } from 'lucide-react'
import styles from './Login.module.css' // On réutilise le même style

export default function SuperLogin() {
  const navigate = useNavigate()

  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Crown size={48} className="text-red-600 mx-auto" />
          <h1 className="text-heading text-3xl mt-4 text-red-500">Super Administrateur</h1>
          <p className="text-[var(--text-secondary)]">Accès réservé</p>
        </div>

        <form onSubmit={() => navigate('/admin/dashboard')} className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="password" placeholder="Code SuperAdmin" required className="focus:border-red-500" />
          </div>
          <button type="submit" className="bg-red-700 hover:bg-red-600 text-white font-bold py-4 rounded-lg w-full mt-6">
            Accéder
          </button>
        </form>
      </div>
    </div>
  )
}