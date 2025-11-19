// src/components/MessageDuPrefet.jsx

import styles from './MessageDuPrefet.module.css';

export default function MessageDuPrefet() {
  return (
    <section className={styles.prefetSection}>
      <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={styles.prefetTitle}>
              Message du Préfet
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5">
              Chers citoyens du département de Djoué-Léfini,
            </p>
            <p className="text-base leading-relaxed mb-5">
              C’est avec un profond sens du devoir et de la responsabilité que je m’adresse à vous aujourd’hui.
              Notre préfecture s’engage résolument dans la modernisation de ses services pour vous offrir une
              administration plus proche, plus rapide et plus efficace.
            </p>
            <p className="text-base leading-relaxed">
              Ensemble, construisons un Djoué-Léfini uni, travailleur et tourné vers le progrès.
            </p>
            <p className={styles.prefetSignature}>
              — Le Préfet de Djoué-Léfini
            </p>
          </div>
          <div className={styles.prefetPhoto} />
        </div>
      </div>
    </section>
  );
}