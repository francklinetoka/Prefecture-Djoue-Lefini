// src/components/FloatingAssistant.tsx
import { useState, useRef } from 'react';
import { MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FloatingAssistant.module.css';

const questions = [
  "Acte de naissance",
  "Horaires d’ouverture",
  "Contacter mon district",
  "Permis de construire",
  "Où est la Préfecture ?",
  "Actualités",
  "Démarches en ligne ?",
  "Renouvellement CNI"
] as const;

const answers: Record<typeof questions[number], string> = {
  "Acte de naissance": "Bureau d’état civil du district de naissance + pièce d’identité.\nDélai : 48h ouvrées.\nGratuit si copie récente (< 3 mois).",
  "Horaires d’ouverture": "Lundi – Vendredi : 07h30 – 15h30\nSamedi : 07h30 – 12h00\nDimanche & jours fériés : fermé",
  "Contacter mon district": "Page Contact → tous les Sous-Préfets avec téléphone et email directs.",
  "Permis de construire": "Service Technique du district concerné.\nDélai d’instruction : 2 mois.",
  "Où est la Préfecture ?": "Avenue de la République,\nDjoué-Léfini Centre.\nRépublique du Congo",
  "Actualités": "• Réouverture du bureau d’Odziba\n• Plan Djoué-Léfini Numérique 2030\n• Inauguration du marché de Vindza",
  "Démarches en ligne ?": "Non. Toutes les démarches se font exclusivement en présentiel.",
  "Renouvellement CNI": "Préfecture ou sous-préfecture de votre résidence.\nDélai moyen : 3 à 4 semaines."
};

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -140 : 140,
      behavior: 'smooth'
    });
  };

  const handleQuestion = (q: typeof questions[number]) => {
    setSelectedAnswer(answers[q]); // Une seule réponse à la fois
  };

  return (
    <>
      {/* Bouton flottant – petit et centré */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.triggerBtn}
        aria-label="Ouvrir l'assistant virtuel"
      >
        {isOpen ? <X size={24} strokeWidth={2.6} /> : <MessageCircle size={26} strokeWidth={2.4} />}
      </button>

      {/* Chatbot compact */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Header */}
          <div className={styles.header}>
            <div className="flex items-center gap-2.5">
              <div className={styles.avatar}>
                <MessageCircle size={19} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Assistant Préfecture</p>
                <p className="text-[10px] text-white/90">En ligne • Réponse immédiate</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
              <X size={16} />
            </button>
          </div>

          {/* Message d'accueil fixe */}
          <div className={styles.welcome}>
            <p className="text-xs text-gray-700 text-center leading-relaxed px-3">
              Bonjour ! Sélectionnez une question pour obtenir une réponse immédiate.
            </p>
          </div>

          {/* Carte réponse – une seule à la fois */}
          {selectedAnswer && (
            <div className={styles.answerCard}>
              <p className="text-sm leading-relaxed whitespace-pre-line text-gray-800">
                {selectedAnswer}
              </p>
            </div>
          )}

          {/* Barre de questions défilantes */}
          <div className={styles.questionsBar}>
            <button onClick={() => scroll('left')} className={ styles.scrollBtn}>
              <ChevronLeft size={16} />
            </button>

            <div ref={scrollRef} className={styles.questionsScroll}>
              {questions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestion(q)}
                  className={styles.questionChip}
                >
                  {q}
                </button>
              ))}
            </div>

            <button onClick={() => scroll('right')} className={styles.scrollBtn}>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Footer discret */}
          <div className={styles.footer}>
            <p className="text-[10px] text-gray-500 text-center">
              Urgence ? <a href="tel:+242061000000" className="font-medium text-green-700 hover:underline">+242 06 100 0000</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}