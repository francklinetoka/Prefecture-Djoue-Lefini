import React, { useState } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import styles from './Territoire.module.css';

// Données enrichies avec vraies couleurs officielles
const districtsData = [
  { id: 1, name: 'Odziba',      imageUrl: 'https://placehold.co/800x600/1e40af/white?text=Odziba+-+Chef-lieu',        color: '#1e40af' },
  { id: 2, name: 'Vindza',      imageUrl: 'https://placehold.co/800x600/16a34a/white?text=Vindza+-+Forêt+et+rivière', color: '#16a34a' },
  { id: 3, name: 'Kimba',       imageUrl: 'https://placehold.co/800x600/dc2626/white?text=Kimba+-+Dynamisme+urbain',  color: '#dc2626' },
  { id: 4, name: 'Mayama',     imageUrl: 'https://placehold.co/800x600/f59e0b/white?text=Mayama+-+Culture+vivante',  color: '#f59e0b' },
  { id: 5, name: 'Ngabé',       imageUrl: 'https://placehold.co/800x600/7c2d12/white?text=Ngabé+-+Terres+riches',     color: '#7c2d12' },
  { id: 6, name: 'Ignié',       imageUrl: 'https://placehold.co/800x600/6d28d9/white?text=Ignié+-+Tradition+ancestrale',color: '#6d28d9' },
];

export default function TerritoireSection() {
  const [activeDistrict, setActiveDistrict] = useState(districtsData[0]);

  return (
    <section className={styles.territoireSection}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className={styles.territoireTitle}>
            Notre Territoire
          </h2>
          <p className={styles.territoireSubtitle}>
            Le Département du <strong>Djoué-Léfini</strong> est composé de <span className="text-[var(--cg-green-700)] font-bold">6 districts</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* === COLONNE GAUCHE : Liste des districts === */}
          <div className="order-2 lg:order-1">
            <h3 className={styles.districtsTitle}>
              Choisissez un district
            </h3>
            <p className={styles.districtsText}>
              Cliquez sur un district pour découvrir son paysage représentatif.
            </p>

            <div className={styles.districtGrid}>
              {districtsData.map((dist) => (
                <button
                  key={dist.id}
                  onClick={() => setActiveDistrict(dist)}
                  className={`
                    ${styles.districtButton}
                    ${activeDistrict.id === dist.id ? styles.districtButtonActive : ''}
                  `}
                  style={{
                    '--district-color': dist.color,
                  }}
                >
                  <MapPin size={18} className="mr-2" />
                  {dist.name}
                </button>
              ))}
            </div>

            <a href="/districts" className={styles.viewAllLink}>
              Voir les fiches complètes des districts
              <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-2" />
            </a>
          </div>

          {/* === COLONNE DROITE : Image du district actif === */}
          <div className="order-1 lg:order-2">
            <div className={styles.imageContainer}>
              <img
                src={activeDistrict.imageUrl}
                alt={`Paysage du district de ${activeDistrict.name}`}
                className={styles.districtImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.imageCaption}>
                  <h4>District de {activeDistrict.name}</h4>
                  <p>Chef-lieu • Département du Djoué-Léfini</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}