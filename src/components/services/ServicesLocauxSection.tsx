import React from 'react';
import { ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import styles from './ServicesLocaux.module.css';

const servicesData = [
  {
    title: "Démarches administratives",
    desc: "Obtention de documents officiels (à présenter au guichet)",
    items: ["Acte de naissance", "Carte d’identité", "Certificat de résidence", "Légalisation"],
    link: "/services/demarches"
  },
  {
    title: "État civil",
    desc: "Enregistrement des actes de la vie civile en personne",
    items: ["Mariage civil", "Naissance", "Décès", "Reconnaissance d’enfant"],
    link: "/services/etat-civil"
  },
  {
    title: "Services fiscaux",
    desc: "Paiements et déclarations auprès des services compétents",
    items: ["Impôts locaux", "Taxes communales", "Récépissés", "Suivi de dossier"],
    link: "/services/fiscalite"
  },
  {
    title: "Guichet unique & assistance",
    desc: "Accueil physique et orientation vers les bons services",
    items: ["Renseignements", "Prise de rendez-vous", "Dépôt de dossiers", "Suivi administratif"],
    link: "/contact"
  },
];

export default function ServicesLocauxSection() {
  return (
    <section className={styles.servicesSection}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className={styles.servicesTitle}>
          Services Publics Locaux
        </h2>
        <p className={styles.servicesSubtitle}>
          Toutes les démarches nécessitent une <strong>présence physique</strong> au guichet compétent de la Préfecture ou des districts.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/services/demarches"
            className="inline-flex items-center bg-[var(--cg-green-700)] text-white font-bold px-10 py-4 rounded-xl hover:bg-[var(--cg-green-800)] transition shadow-lg hover:shadow-xl text-lg"
          >
            Voir toutes les démarches
            <ChevronRight size={22} className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
}