// src/components/Territoires/TerritoireSection.tsx
import React, { useState } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import styles from './Territoire.module.css';

const districtsData = [
  { id: 1, name: 'Odziba',  imageUrl: 'https://placehold.co/1000x700/1e40af/white?text=Odziba+-+Chef-lieu',  color: '#1e40af' },
  { id: 2, name: 'Vindza',  imageUrl: 'https://placehold.co/1000x700/16a34a/white?text=Vindza+-+Forêts+&+Rivières', color: '#16a34a' },
  { id: 3, name: 'Kimba',   imageUrl: 'https://placehold.co/1000x700/dc2626/white?text=Kimba+-+Dynamisme', color: '#dc2626' },
  { id: 4, name: 'Mayama',  imageUrl: 'https://placehold.co/1000x700/f59e0b/white?text=Mayama+-+Culture', color: '#f59e0b' },
  { id: 5, name: 'Ngabé',   imageUrl: 'https://placehold.co/1000x700/7c2d12/white?text=Ngabé+-+Terroir', color: '#7c2d12' },
  { id: 6, name: 'Ignié',   imageUrl: 'https://placehold.co/1000x700/6d28d9/white?text=Ignié+-+Tradition', color: '#6d28d9' },
] as const;

type District = (typeof districtsData)[number];

export default function TerritoireSection() {
  const [activeDistrict, setActiveDistrict] = useState<District>(districtsData[0]);

  return (
    <section className={styles.territoireSection}>
      <div className={styles.container}>

        {/* Titre principal */}
        <header className={styles.header}>
          <h2 className={styles.title}>Notre Territoire</h2>
          <p className={styles.subtitle}>
            Le Département du <strong>Djoué-Léfini</strong> est composé de{' '}
            <span className="text-green-700 font-bold">6 districts</span>
          </p>
        </header>

        <div className={styles.grid}>

          {/* === COLONNE GAUCHE : Liste des districts === */}
          <div className={styles.districtsColumn}>
            <h3 className={styles.districtsTitle}>Sélectionnez un district</h3>
            <p className={styles.districtsText}>
              Découvrez le paysage emblématique de chaque territoire.
            </p>

            <div className={styles.districtList}>
              {districtsData.map((dist) => (
                <button
                  key={dist.id}
                  type="button"
                  onClick={() => setActiveDistrict(dist)}
                  className={`${styles.districtButton} ${activeDistrict.id === dist.id ? styles.active : ''}`}
                  data-color={dist.color}
                >
                  <MapPin size={19} className="text-gray-600 flex-shrink-0" />
                  <span>{dist.name}</span>
                </button>
              ))}
            </div>

            <a href="/districts" className={styles.viewAll}>
              Voir toutes les fiches districts
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>

          {/* === COLONNE DROITE : Image du district actif === */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img
                src={activeDistrict.imageUrl}
                alt={`Vue représentative du district de ${activeDistrict.name}`}
                className={styles.districtImage}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <div className={styles.caption}>
                  <h3 className={styles.districtName}>District de {activeDistrict.name}</h3>
                  <p className={styles.districtInfo}>Chef-lieu du Département du Djoué-Léfini</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}