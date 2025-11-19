// src/components/LocaliteCard.jsx

import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import styles from './Localites.module.css';

export default function LocaliteCard({ localite }) {
  const { name, description, link } = localite;
  
  return (
    <div className={styles.localiteCard}>
      {/* Espace réservé pour l'image */}
      <div className={styles.localiteImagePlaceholder} />
      
      <div className={styles.localiteCardContent}>
        <h3 className={styles.localiteName}>
          <MapPin size={22} className={styles.localiteIcon} />
          {name}
        </h3>
        <p className={styles.localiteDesc}>
          {description}
        </p>
        <a href={link || "#"} className={styles.localiteCardLink}>
          Voir plus <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}