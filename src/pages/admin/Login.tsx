// src/pages/admin/Login.tsx
import { useState } from 'react'
import { Lock, Mail, Shield } from 'lucide-react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici tu mettras ton appel API + contexte auth
    navigate('/admin/dashboard')
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Shield size={48} className={styles.shield} />
          <h1 className="text-heading text-3xl mt-4">Espace Administrateur</h1>
          <p className="text-[var(--text-secondary)]">Préfecture de Djoué-Léfini</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Mail size={20} className={styles.icon} />
            <input
              type="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <Lock size={20} className={styles.icon} />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full text-lg py-4 mt-6">
            Se connecter
          </button>
        </form>

        <div className={styles.footer}>
          <Link to="/admin/register" className={styles.link}>Créer un compte admin</Link>
          <span> | </span>
          <Link to="/admin/super-login" className={styles.link}>Accès Super Admin</Link>
        </div>
      </div>
    </div>
  )
}