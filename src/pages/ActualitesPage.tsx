import { useState } from 'react';
import ActualiteCard from '../components/Actualites/ActualiteCard.jsx';
import { Calendar, Tag } from 'lucide-react';
import styles from './ActualitesPage.module.css';

const toutesActualitesData = [
  { id: 1, title: "Réouverture du bureau d’état civil d’Odziba", date: "15 nov. 2025", category: "Communiqué", excerpt: "Suite aux travaux de modernisation, le service d’état civil est à nouveau opérationnel à compter du 18 novembre 2025...", imageUrl: "https://placehold.co/150x100/4CAF50/white?text=Etat+Civil", content: "Contenu complet de l'article 1..." },
  { id: 2, title: "Lancement du Plan 'Djoué-Léfini Numérique 2030'", date: "12 nov. 2025", category: "Dossier", excerpt: "Un ambitieux programme visant à digitaliser l'ensemble des démarches administratives locales.", imageUrl: "https://placehold.co/150x100/2196F3/white?text=Numerique", content: "Contenu complet de l'article 2..." },
  { id: 3, title: "Sécurité Routière : Nouvelles Mesures Préfetales", date: "08 nov. 2025", category: "Arrêté", excerpt: "Mise en place de contrôles renforcés dans les zones de Ngabé et Ignié pour le mois de décembre.", imageUrl: "https://placehold.co/150x100/F44336/white?text=Securite", content: "Contenu complet de l'article 3..." },
  { id: 4, title: "Recrutement de Jeunes Fonctionnaires : Appel à Candidature", date: "01 nov. 2025", category: "Recrutement", excerpt: "La préfecture ouvre 25 postes dans divers services administratifs pour renforcer les équipes.", imageUrl: "https://placehold.co/150x100/FF9800/white?text=Recrutement", content: "Contenu complet de l'article 4..." },
  { id: 5, title: "Inauguration du nouveau marché de Vindza", date: "28 oct. 2025", category: "Événement", excerpt: "Le préfet a inauguré le nouveau marché, un lieu central pour l'économie locale.", imageUrl: "https://placehold.co/150x100/9C27B0/white?text=Marche", content: "Contenu complet de l'article 5..." },
  { id: 6, title: "Bilan trimestriel des actions environnementales", date: "15 oct. 2025", category: "Rapport", excerpt: "Rapport détaillé sur la gestion des déchets et la protection des réserves naturelles.", imageUrl: "https://placehold.co/150x100/00BCD4/white?text=Environnement", content: "Contenu complet de l'article 6..." },
  { id: 7, title: "Avis d'enquête publique sur l'aménagement de Kimba", date: "05 oct. 2025", category: "Communiqué", excerpt: "Les citoyens sont invités à participer à une enquête concernant le nouveau plan d'urbanisme de Kimba.", imageUrl: "https://placehold.co/150x100/795548/white?text=Urbanisme", content: "Contenu complet de l'article 7..." },
  { id: 8, title: "Célébration de la Journée Nationale de l'Arbre", date: "20 sept. 2025", category: "Événement", excerpt: "Plantation symbolique de 1000 arbres à travers la préfecture pour sensibiliser à l'écologie.", imageUrl: "https://placehold.co/150x100/8BC34A/white?text=Arbre", content: "Contenu complet de l'article 8..." },
  { id: 9, title: "Rappel des procédures pour les élections municipales", date: "01 sept. 2025", category: "Arrêté", excerpt: "Le bureau des élections rappelle les dates limites et les documents requis pour l'inscription sur les listes électorales.", imageUrl: "https://placehold.co/150x100/9E9E9E/white?text=Elections", content: "Contenu complet de l'article 9..." },
];

const ITEMS_PER_PAGE = 5;
const CATEGORIES = ['Toutes', 'Communiqué', 'Arrêté', 'Dossier', 'Recrutement', 'Événement', 'Rapport'];

export default function ActualitesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('Toutes');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = toutesActualitesData.filter(article => {
    const matchesFilter = filter === 'Toutes' || article.category === filter;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button 
          key={i} 
          onClick={() => setCurrentPage(i)} 
          className={currentPage === i ? styles.paginationButtonActive : styles.paginationButton}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <main className="bg-gray-50 text-[var(--gray-950)]">
      <div className={styles.heroPlaceholder}>
        <h1 className={styles.heroTitle}>Actualités et Communiqués</h1>
        <p className={styles.heroSubtitle}>Retrouvez l'ensemble des communications officielles de la Préfecture du Djoué-Léfini.</p>
      </div>

      <section className="py-16">
        <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
          <aside className={styles.asideSticky}>
            <div className={styles.filterCard}>
              <h3 className={styles.filterTitle}>Rechercher</h3>
              <input
                type="text"
                placeholder="Mot clé, sujet..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filterCard}>
              <h3 className={styles.filterTitle}>Catégories</h3>
              <ul className="space-y-3">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button 
                        onClick={() => {
                            setFilter(cat);
                            setCurrentPage(1);
                        }}
                        className={`${styles.categoryButton} ${filter === cat ? styles.categoryButtonActive : ''}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-8">
            {currentArticles.length > 0 ? (
                currentArticles.map((article) => (
                    <ActualiteCard 
                        key={article.id} 
                        actualite={article} 
                        isFullPageList={true} 
                    />
                ))
            ) : (
                <p className="text-center text-lg text-gray-600 col-span-full">
                    Aucun article ne correspond à votre recherche ou filtre.
                </p>
            )}

            {totalPages > 1 && (
                <div className="flex justify-center pt-6">
                    <div className="inline-flex space-x-1">
                        {renderPaginationButtons()}
                    </div>
                </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}