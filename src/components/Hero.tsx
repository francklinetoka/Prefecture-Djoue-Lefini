// src/components/Hero.tsx
import styles from './Hero.module.css'

const slides = [
  { img: "/hero1.jpg", alt: "Préfecture Djoué-Léfini" },
  { img: "/hero2.jpg", alt: "Odziba - Chef-lieu" },
  { img: "/hero3.jpg", alt: "Services administratifs" },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.carousel}>
        {slides.map((slide, i) => (
          <div key={i} className={styles.slide}>
            <img src={slide.img} alt={slide.alt} className={styles.image} />
          </div>
        ))}
      </div>

      {/* Overlay avec les 4 infos */}
      <div className={styles.overlay}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.number}>4</span>
            <span className={styles.label}>Localités</span>
          </div>
          <div className={styles.card}>
            <span className={styles.number}>2024</span>
            <span className={styles.label}>Création</span>
          </div>
          <div className={styles.card}>
            <span className={styles.number}>Odziba</span>
            <span className={styles.label}>Chef-lieu</span>
          </div>
          <div className={styles.card}>
            <span className={styles.number}>24/7</span>
            <span className={styles.label}>Bientôt</span>
          </div>
        </div>
      </div>
    </section>
  )
}