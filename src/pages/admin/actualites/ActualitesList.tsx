// src/pages/admin/actualites/ActualitesList.tsx
import AdminLayout from '../components/AdminLayout'
import { Plus, Edit, Trash2 } from 'lucide-react'
import styles from './ActualitesList.module.css'

export default function ActualitesList() {
  const actualites = [
    { id: 1, titre: "Inauguration du nouveau marché", date: "2025-11-15", publie: true },
    // ...
  ]

  return (
    <AdminLayout userType="admin">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="text-heading text-3xl">Gestion des Actualités</h1>
          <button className="btn-yellow flex items-center gap-2">
            <Plus size={20} /> Ajouter une actualité
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Date</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {actualites.map(a => (
                <tr key={a.id}>
                  <td>{a.titre}</td>
                  <td>{a.date}</td>
                  <td><span className={a.publie ? styles.publie : styles.brouillon}>Publié</span></td>
                  <td className={styles.actions}>
                    <button className={styles.edit}><Edit size={18} /></button>
                    <button className={styles.delete}><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}