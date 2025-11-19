// src/pages/admin/Register.tsx
import styles from './Login.module.css'

export default function Register() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <h1 className="text-heading text-3xl text-center mb-8">Créer un compte administrateur</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Nom complet" className="mb-4" required />
          <input type="email" placeholder="Email officiel" className="mb-4" required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit" className="btn-primary w-full py-4 mt-6">
            Créer le compte
          </button>
        </form>
      </div>
    </div>
  )
}