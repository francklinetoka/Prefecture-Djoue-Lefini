import React from 'react';
import DocumentCard from './DocumentCard';
import styles from './Documents.module.css';

const documentsData = [
  {
    title: "Communiqué officiel – Mesures administratives 2025",
    type: "PDF",
    size: "1.2 Mo",
    link: "/documents/communique-2025.pdf"
  },
  {
    title: "Arrêté préfectoral n°2025-001 – Organisation des services",
    type: "PDF",
    size: "980 Ko",
    link: "/documents/arrete-2025-001.pdf"
  },
  {
    title: "Rapport d’activité annuel de la Préfecture de Djoué-Léfini",
    type: "PDF",
    size: "6.8 Mo",
    link: "/documents/rapport-activite-2024.pdf"
  },
  {
    title: "Guide des démarches administratives (édition 2025)",
    type: "PDF",
    size: "3.4 Mo",
    link: "/documents/guide-demarches-2025.pdf"
  },
  {
    title: "Budget prévisionnel 2025 – Préfecture et districts",
    type: "PDF",
    size: "2.1 Mo",
    link: "/documents/budget-2025.pdf"
  },
  {
    title: "Calendrier des audiences publiques et permanences",
    type: "PDF",
    size: "450 Ko",
    link: "/documents/calendrier-2025.pdf"
  },
];

export default function DocumentsSection() {
  return (
    <section className={styles.documentsSection}>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className={styles.documentsTitle}>
          Documents & Publications Officielles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentsData.map((doc, i) => (
            <DocumentCard key={i} doc={doc} />
          ))}
        </div>

        {/* Bouton "Voir plus" centré */}
        <div className="text-center mt-16">
          <a
            href="/transparence/documents"
            className="inline-flex items-center bg-[var(--cg-yellow-400)] text-gray-900 font-bold px-10 py-4 rounded-xl hover:bg-yellow-300 transition shadow-lg hover:shadow-xl text-lg"
          >
            Voir tous les documents
          </a>
        </div>
      </div>
    </section>
  );
}