import { ChevronRight } from 'lucide-react';
// CORRECTION : Si ActualitesSection.jsx est dans le même dossier que ActualiteCard.jsx
import ActualiteCard from './ActualiteCard'; 
import styles from './Actualites.module.css'; 

// Données statiques : Correction des clés (title, excerpt) et ajout des propriétés manquantes (category, imageUrl)
const actualitesData = [
    { 
        id: 1, 
        date: '15 nov. 2025', 
        title: 'Réouverture du bureau d’état civil d’Odziba', // Clé corrigée
        category: 'Communiqué', // Ajouté pour la couleur de bordure
        excerpt: 'Suite aux travaux de modernisation, le service d’état civil est à nouveau opérationnel à compter du 18 novembre 2025...', // Clé corrigée
        imageUrl: 'https://placehold.co/400x300/4CAF50/white?text=Civil', // Ajout d'une image
    },
    { 
        id: 2, 
        date: '10 nov. 2025', 
        title: 'Lancement du programme de l’Infrastructure Rurale', // Clé corrigée
        category: 'Dossier', // Ajouté pour la couleur de bordure
        excerpt: 'La préfecture annonce le démarrage d’un projet majeur visant à améliorer les routes et l’accès aux localités isolées.', // Clé corrigée
        imageUrl: 'https://placehold.co/400x300/2196F3/white?text=Routes', // Ajout d'une image
    },
    { 
        id: 3, 
        date: '01 nov. 2025', 
        title: 'Journée d’échanges avec les chefs de quartier', // Clé corrigée
        category: 'Arrêté', // Ajouté pour la couleur de bordure
        excerpt: 'Une rencontre constructive a eu lieu pour discuter des enjeux locaux de sécurité et d’assainissement.', // Clé corrigée
        imageUrl: 'https://placehold.co/400x300/F44336/white?text=Quartier', // Ajout d'une image
    },
];

export default function ActualitesSection() {
  return (
    // Utilisation de la nouvelle classe avec padding-top/bottom de 4rem
    <section className={`${styles.actualitesSectionWrapper} bg-gray-50`}> 
      <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Le div interne (max-w-7xl mx-auto) assure le centrage horizontal et la marge interne gauche/droite (px-N) */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--gray-900)] mb-8 text-center">
          Actualités de la Préfecture
        </h2>

        {/* Grille des cartes */}
        <div className="grid md:grid-cols-3 gap-8">
          {actualitesData.map((actu) => (
            <ActualiteCard key={actu.id} actualite={actu} />
          ))}
        </div>

        {/* Bouton Voir tout */}
        <div className="text-center mt-12">
          <a 
            href="/actualites" 
            className="inline-flex items-center space-x-2 bg-[var(--cg-green-700)] hover:bg-[var(--cg-green-800)] text-white font-semibold rounded-full text-base px-8 py-3 transition duration-150 shadow-md hover:shadow-lg"
          >
            <span>Toutes les actualités</span> 
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}