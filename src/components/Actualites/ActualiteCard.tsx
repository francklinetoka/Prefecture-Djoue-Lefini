import { ChevronRight, Calendar, Tag } from 'lucide-react';
import styles from './Actualites.module.css';

const getCategoryStyle = (category) => {
  switch (category) {
    case 'Communiqué':
      return { border: 'border-yellow-400', bg: 'bg-yellow-50', text: 'text-yellow-800' };
    case 'Arrêté':
      return { border: 'border-red-600', bg: 'bg-red-50', text: 'text-red-800' };
    case 'Dossier':
      return { border: 'border-[var(--cg-green-700)]', bg: 'bg-green-50', text: 'text-[var(--cg-green-800)]' };
    case 'Recrutement':
      return { border: 'border-blue-600', bg: 'bg-blue-50', text: 'text-blue-800' };
    default:
      return { border: 'border-gray-300', bg: 'bg-gray-50', text: 'text-gray-700' };
  }
};

export default function ActualiteCard({ actualite, isFullPageList = false }) {
  if (!actualite) return null;

  const { id, title, date, category = 'Information', excerpt, imageUrl } = actualite;
  const link = `/actualites/${id}`;
  const safeExcerpt = excerpt || '';
  const shortExcerpt = safeExcerpt.length > 120 ? safeExcerpt.substring(0, 120) + '...' : safeExcerpt;

  const style = getCategoryStyle(category);

  // === Version LISTE (page complète) ===
  if (isFullPageList) {
    return (
      <article className={`${styles.articleCardFull} border-l-4 ${style.border} ${style.bg}`}>
        {/* Image à gauche */}
        <div className="flex-shrink-0 w-32 sm:w-40 h-28 sm:h-32 rounded-xl overflow-hidden shadow-md">
          <img
            src={imageUrl || 'https://placehold.co/400x300/cccccc/white?text=Actualité'}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-[var(--cg-green-700)]" />
              <span>{date}</span>
            </div>
            <div className={`flex items-center gap-1.5 font-semibold ${style.text}`}>
              <Tag size={16} />
              <span>{category}</span>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-3">
            <a href={link} className="hover:text-[var(--cg-green-700)] transition-colors">
              {title}
            </a>
          </h2>

          <p className="text-gray-700 leading-relaxed hidden sm:block">{excerpt || 'Aucun résumé disponible.'}</p>

          <a
            href={link}
            className="mt-4 inline-flex items-center font-bold text-[var(--cg-green-700)] hover:text-[var(--cg-green-600)] transition"
          >
            Lire la suite <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </article>
    );
  }

  // === Version GRILLE (page d'accueil) ===
  return (
    <article className={`${styles.actualiteCard} group border-t-4 ${style.border} ${style.bg}`}>
      <div className={styles.cardImageContainer}>
        <img
          src={imageUrl || 'https://placehold.co/600x400/cccccc/white?text=Actualité'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className={styles.cardContent}>
        <div>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-[var(--cg-green-700)]" />
              <span>{date}</span>
            </div>
            <div className={`flex items-center gap-1.5 font-semibold ${style.text}`}>
              <Tag size={16} />
              <span>{category}</span>
            </div>
          </div>

          <h3 className="text-xl font-extrabold text-gray-900 line-clamp-2 group-hover:text-[var(--cg-green-700)] transition-colors">
            <a href={link}>{title}</a>
          </h3>

          <p className="mt-3 text-sm text-gray-700 line-clamp-3">{shortExcerpt || 'Aucun résumé disponible.'}</p>
        </div>

        <a
          href={link}
          className="mt-5 inline-flex items-center font-bold text-[var(--cg-green-700)] hover:text-[var(--cg-green-600)] transition"
        >
          Lire la suite <ChevronRight size={18} className="ml-1" />
        </a>
      </div>
    </article>
  );
}