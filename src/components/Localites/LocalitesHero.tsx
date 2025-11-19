import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import styles from './LocalitesHero.module.css';

// Données des localités avec des placeholders d'images
const localitesData = [
  { 
    name: 'Odziba', 
    description: 'Chef-lieu de la préfecture, centre administratif et économique, situé au cœur des richesses naturelles. ',
    imageUrl: 'https://placehold.co/1920x800/387c4f/white?text=Odziba+-+Chef-lieu' 
  },
  { 
    name: 'Vindza', 
    description: 'Localité dynamique connue pour ses paysages ruraux et son engagement dans l\'agriculture locale et durable. ',
    imageUrl: 'https://placehold.co/1920x800/4CAF50/white?text=Vindza+-+Agriculture' 
  },
  { 
    name: 'Kimba', 
    description: 'Carrefour de l\'aménagement urbain, Kimba est en pleine expansion avec de nouveaux projets d\'infrastructure. ',
    imageUrl: 'https://placehold.co/1920x800/2196F3/white?text=Kimba+-+Urbanisme' 
  },
  { 
    name: 'Mayama', 
    description: 'Région historique et culturelle, riche en traditions et abritant des sites naturels préservés. ',
    imageUrl: 'https://placehold.co/1920x800/FF9800/white?text=Mayama+-+Culture' 
  },
  { 
    name: 'Ngabé', 
    description: 'Port fluvial important sur le Djoué-Léfini, essentiel pour le transport et le commerce régional. ',
    imageUrl: 'https://placehold.co/1920x800/9C27B0/white?text=Ngabé+-+Port+Fluvial' 
  },
  { 
    name: 'Ignié', 
    description: 'Village traditionnel préservé, reconnu pour son artisanat unique et son cadre de vie paisible. ',
    imageUrl: 'https://placehold.co/1920x800/F44336/white?text=Ignié+-+Village' 
  },
];

const AUTOSLIDE_INTERVAL = 5000; // 5 secondes

export default function LocalitesHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fonction pour passer à la prochaine diapositive
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % localitesData.length
    );
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + localitesData.length) % localitesData.length
    );
  };

  // Gestion de l'intervalle pour le défilement automatique
  useEffect(() => {
    const interval = setInterval(nextSlide, AUTOSLIDE_INTERVAL);
    
    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);

  const currentLocalite = localitesData[activeIndex];

  return (
    <section className={styles.localitesHero}>
      
      {/* Conteneur des images avec transition */}
      <div className={styles.imageContainer}>
        {localitesData.map((loc, index) => (
          <img 
            key={loc.name}
            src={loc.imageUrl}
            alt={`Paysage de ${loc.name}`}
            // Utilise la classe active pour afficher uniquement l'image courante
            className={`${styles.localiteImage} ${index === activeIndex ? styles.active : ''}`}
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x800/999999/white?text=Image+Indisponible'; }}
          />
        ))}
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className={styles.overlay} />
      </div>

      {/* Contenu textuel centré */}
      <div className={styles.contentWrapper}>
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className={styles.mainTitle}>
            Découvrez nos localités
          </h1>
          
          {/* Nom de la localité actuelle */}
          <h2 className={styles.localiteName}>
            <MapPin size={30} className={styles.localiteIcon} />
            {currentLocalite.name}
          </h2>
          
          {/* Description de la localité actuelle */}
          <p className={styles.localiteDescription}>
            {currentLocalite.description}
          </p>
          
          <a href="/districts" className={styles.discoverButton}>
            Voir la fiche complète
          </a>
        </div>
      </div>

      {/* Boutons de navigation manuelle (Précédent / Suivant) */}
      <button 
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Localité précédente"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Localité suivante"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs de progression (petits points) */}
      <div className={styles.indicators}>
        {localitesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
            aria-label={`Aller à ${localitesData[index].name}`}
          />
        ))}
      </div>
    </section>
  );
}