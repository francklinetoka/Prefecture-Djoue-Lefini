import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './ServicesLocaux.module.css';

export default function ServiceCard({ service }) {
  const { title, desc, items, link = "/services/demarches" } = service;

  return (
    <div className={`${styles.serviceCard} group`}>
      {/* Titre avec icône subtile */}
      <h3 className={styles.serviceCardTitle}>
        {title}
      </h3>

      {/* Description */}
      <p className={styles.serviceCardDesc}>
        {desc}
      </p>

      {/* Liste des services */}
      <ul className={styles.serviceCardList}>
        {items.map((item, index) => (
          <li key={index} className={styles.serviceCardItem}>
            <span className={styles.serviceCardItemBullet} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Bouton d'action */}
      <a
        href={link}
        className={styles.serviceCardLink}
      >
        Accéder au service
        <ArrowRight
          size={18}
          className="ml-2 transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}