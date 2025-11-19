// src/components/LocalitesSection.jsx

import React from 'react';
import LocaliteCard from './LocaliteCard';
import styles from './Localites.module.css';

// Données statiques déplacées ici
const localitesData = [
  { 
    name: 'Odziba', 
    description: 'Chef-lieu de la préfecture, centre administratif et économique.', 
    link: '#',
  },
  { 
    name: 'Vindza', 
    description: 'Localité dynamique connue pour ses paysages et son hospitalité.', 
    link: '#',
  },
  { 
    name: 'Kimba', 
    description: 'Localité dynamique connue pour ses paysages et son hospitalité.', 
    link: '#',
  },
  { 
    name: 'Mayama', 
    description: 'Localité dynamique connue pour ses paysages et son hospitalité.', 
    link: '#',
  },
  { 
    name: 'Ngabé', 
    description: 'Localité dynamique connue pour ses paysages et son hospitalité.', 
    link: '#',
  },
  { 
    name: 'Ignié', 
    description: 'Localité dynamique connue pour ses paysages et son hospitalité.', 
    link: '#',
  },
];

export default function LocalitesSection() {
  return (
    <section className={styles.localitesSection}>
      <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className={styles.localitesTitle}>
          Découvrez nos localités
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {localitesData.map((loc) => (
            <LocaliteCard key={loc.name} localite={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}