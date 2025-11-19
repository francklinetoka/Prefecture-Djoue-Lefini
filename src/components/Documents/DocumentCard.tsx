import { Download, FileText } from 'lucide-react';
import styles from './Documents.module.css';

export default function DocumentCard({ doc }) {
  const { title, type = "PDF", size, link = "#" } = doc;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.documentCard} group`}
      aria-label={`Télécharger ${title}`}
    >
      {/* Icône + infos */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <FileText size={40} className={styles.documentIcon} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={styles.documentTitle}>
            {title}
          </h4>
          <span className={styles.documentMeta}>
            {type} • {size}
          </span>
        </div>
      </div>

      {/* Icône téléchargement */}
      <div className="flex-shrink-0">
        <Download
          size={28}
          className={styles.documentDownloadIcon}
        />
      </div>
    </a>
  );
}