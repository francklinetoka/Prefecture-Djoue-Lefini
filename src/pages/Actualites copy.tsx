// Liste complète des communications et actualités de la Préfecture.

// Suppression des imports Header et Footer
import { ChevronRight, Calendar, Tag } from 'lucide-react';
import styles from './Actualites.module.css'; 
import HeroActualite from '../components/HeroActualite'; // Assurez-vous que ce chemin est correct

// Données fictives pour la démonstration (Ajout du champ imageUrl)
const articles = [
  { id: 1, title: "Réouverture du bureau d’état civil d’Odziba", date: "15 nov. 2025", category: "Communiqué", excerpt: "Suite aux travaux de modernisation, le service d’état civil est à nouveau opérationnel à compter du 18 novembre 2025...", imageUrl: "https://placehold.co/150x100/4CAF50/white?text=Etat+Civil" },
  { id: 2, title: "Lancement du Plan 'Djoué-Léfini Numérique 2030'", date: "12 nov. 2025", category: "Dossier", excerpt: "Un ambitieux programme visant à digitaliser l'ensemble des démarches administratives locales.", imageUrl: "https://placehold.co/150x100/2196F3/white?text=Numerique" },
  { id: 3, title: "Sécurité Routière : Nouvelles Mesures Préfetales", date: "08 nov. 2025", category: "Arrêté", excerpt: "Mise en place de contrôles renforcés dans les zones de Ngabé et Ignié pour le mois de décembre.", imageUrl: "https://placehold.co/150x100/F44336/white?text=Securite" },
  { id: 4, title: "Recrutement de Jeunes Fonctionnaires : Appel à Candidature", date: "01 nov. 2025", category: "Recrutement", excerpt: "La préfecture ouvre 25 postes dans divers services administratifs pour renforcer les équipes.", imageUrl: "https://placehold.co/150x100/FF9800/white?text=Recrutement" },
];

// Fonction pour attribuer une couleur à la carte selon la catégorie
const getCategoryColor = (category: string) => {
    switch (category) {
        case 'Communiqué':
            return 'border-[var(--cg-yellow-400)]'; // Jaune pour l'urgence/importance
        case 'Arrêté':
            return 'border-[var(--cg-red-600)]'; // Rouge pour les mesures légales
        case 'Dossier':
            return 'border-[var(--cg-green-700)]'; // Vert pour les dossiers de fond
        case 'Recrutement':
            return 'border-blue-500'; // Bleu pour l'emploi
        default:
            return 'border-gray-300';
    }
};

export default function Actualites() {
  return (
    <main className="bg-gray-50 text-[var(--gray-950)]">
      
      {/* Composant Hero Actualité */}
      <HeroActualite /> 

      {/* Corps de la page : Liste des articles et Filtres */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-4 gap-12">
          
          {/* Colonne principale : Liste des articles (3/4 largeur sur desktop) */}
          <div className="lg:col-span-3 space-y-8">
            {articles.map((article) => (
              <article 
                key={article.id} 
                // Mise en page de carte : fond blanc, padding, ombre, flex pour l'image
                className={`bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex space-x-6 ${styles.articleCard}`}
              >
                
                {/* Image d'illustration à gauche */}
                <div className={`flex-shrink-0 w-24 sm:w-36 h-24 sm:h-28 rounded-lg overflow-hidden border-2 ${getCategoryColor(article.category)}`}>
                    <img 
                        src={article.imageUrl}
                        alt={`Illustration pour ${article.title}`} 
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x100/cccccc/white?text=Image'; }}
                    />
                </div>

                {/* Contenu de la carte à droite */}
                <div className="flex-grow">
                    <div className="flex items-center space-x-4 text-sm mb-2 text-[var(--text-secondary)]">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-[var(--cg-green-700)]" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Tag size={16} className="text-[var(--cg-green-700)]" />
                        <span className="font-semibold">{article.category}</span>
                    </div>
                    </div>
                    
                    {/* Style de titre: noir au repos, vert au survol */}
                    <h2 className="text-heading text-xl font-extrabold text-[var(--gray-900)] hover:text-[var(--cg-green-700)] transition">
                    <a href={`/actualites/${article.id}`}>{article.title}</a>
                    </h2>
                    
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 hidden sm:block"> {/* Caché sur petit écran */}
                    {article.excerpt}
                    </p>
                    <a
                    href={`/actualites/${article.id}`}
                    className={`${styles.readMore} mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cg-green-700)] hover:text-[var(--cg-green-600)]`}
                    >
                    Lire la suite <ChevronRight size={16} />
                    </a>
                </div>
              </article>
            ))}

            {/* Pagination... */}
            <div className="flex justify-center pt-6">
                <div className="inline-flex space-x-1">
                  <button className={`${styles.paginationButton} bg-[var(--cg-green-700)] text-white px-4 py-2 rounded-lg font-bold`}>1</button>
                  <button className={`${styles.paginationButton} bg-gray-100 text-[var(--cg-green-900)] hover:bg-gray-200 px-4 py-2 rounded-lg`}>2</button>
                  <button className={`${styles.paginationButton} bg-gray-100 text-[var(--cg-green-900)] hover:bg-gray-200 px-4 py-2 rounded-lg`}>3</button>
                </div>
              </div>
          </div>

          {/* Colonne latérale : Filtres et recherche (1/4 largeur) */}
          {/* APPLICATION DES CLASSES STICKY pour la faire défiler indépendamment */}
          <aside className="lg:col-span-1 space-y-8 sticky top-8 self-start">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[var(--cg-green-800)]">Rechercher</h3>
              <input
                type="text"
                placeholder="Mot clé, sujet..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--cg-green-600)] focus:border-[var(--cg-green-600)]"
              />
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[var(--cg-green-800)]">Catégories</h3>
              <ul className="space-y-3">
                {['Communiqué', 'Arrêté', 'Dossier', 'Recrutement', 'Service Public'].map((cat) => (
                  <li key={cat}>
                    <a href={`#${cat}`} className="flex justify-between items-center text-sm text-gray-700 hover:text-[var(--cg-green-700)]">
                      {cat}
                      <span className="text-xs text-[var(--text-secondary)]">(3)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}