// src/pages/admin/actualites/ActualiteForm.tsx
import { useState } from 'react'
import styles from './ActualiteForm.module.css'

export default function ActualiteForm({ actualite = null, onClose }: { actualite?: any; onClose: () => void }) {
  const [titre, setTitre] = useState(actualite?.titre || '')
  const [contenu, setContenu] = useState(actualite?.contenu || '')
  const [publie, setPublie] = useState(actualite?.publie || false)

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className="text-heading text-2xl mb-6">
          {actualite ? 'Modifier' : 'Nouvelle'} Actualité
        </h2>

        <input
          type="text"
          placeholder="Titre de l'actualité"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className={styles.input}
        />

        <textarea
          rows={10}
          placeholder="Contenu détaillé..."
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          className={styles.textarea}
        />

        <div className={styles.upload}>
          <label>Image principale</label>
          <input type="file" accept="image/*" />
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" checked={publie} onChange={(e) => setPublie(e.target.checked)} />
          <label>Publier immédiatement</label>
        </div>

        <div className={styles.actions}>
          <button onClick={onClose} className="btn-yellow">Annuler</button>
          <button className="btn-primary">Enregistrer</button>
        </div>
      </div>
    </div>
  )
}