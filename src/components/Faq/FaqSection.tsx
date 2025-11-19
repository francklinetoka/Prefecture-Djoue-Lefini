import { MessageCircle } from 'lucide-react';
import FaqItem from './FaqItem';
import styles from './Faq.module.css';

const faqData = [
  {
    question: "Comment obtenir un acte de naissance ou de mariage ?",
    reponse: "Toutes les demandes d’actes d’état civil doivent être déposées en personne au guichet de l’état civil de la Préfecture ou du district concerné. Aucun formulaire en ligne n’est disponible."
  },
  {
    question: "Peut-on faire les démarches en ligne ?",
    reponse: "Pour des raisons de sécurité et de confidentialité, toutes les démarches administratives du département du Djoué-Léfini s’effectuent exclusivement en présentiel auprès des guichets habilités."
  },
  {
    question: "Comment prendre rendez-vous avec un service ?",
    reponse: "Les rendez-vous se prennent par téléphone pendant les heures d’ouverture ou directement au guichet d’accueil de la Préfecture. Aucun système de réservation en ligne n’est disponible."
  },
  {
    question: "Quels sont les horaires d’ouverture des guichets ?",
    reponse: "Du lundi au vendredi : 7h30 – 15h30 sans interruption. Fermé les week-ends et jours fériés. Consultez la page Contact pour les numéros utiles."
  },
  {
    question: "Où trouver la liste des documents à fournir ?",
    reponse: "Chaque service dispose d’une fiche récapitulative affichée au guichet et disponible sur ce site dans la section « Démarches administratives »."
  },
];

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        <h2 className={styles.faqMainTitle}>Besoin d’aide ?</h2>
        <h3 className={styles.faqSubtitle}>Questions les plus fréquentes</h3>

        <div className={styles.faqListContainer}>
          {faqData.map((item, i) => (
            <FaqItem key={i} question={item.question} reponse={item.reponse} />
          ))}
        </div>

        <div className={styles.contactContainer}>
          <p className={styles.contactText}>
            Votre question n’apparaît pas dans la liste ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-[var(--cg-yellow-400)] text-gray-900 font-bold text-xl px-10 py-5 rounded-xl hover:bg-[var(--cg-yellow-300)] transition shadow-xl hover:shadow-2xl"
          >
            <MessageCircle size={32} />
            Contactez directement la Préfecture
          </a>
        </div>
      </div>
    </section>
  );
}