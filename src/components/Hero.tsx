// src/components/Hero.tsx
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

const slides = [
  { img: "/Img_Hero_Index/Lefini_River.jpg", alt: "Fleuve Léfini" },
  { img: "/Img_Hero_Index/Lefini_River.jpg", alt: "Odziba" },
  { img: "/Img_Hero_Index/Lefini_River.jpg", alt: "Paysages du Djoué-Léfini" },
]

export default function Hero() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.carousel}>
        {slides.map((slide, i) => (
          <div key={i} className={`${styles.slide} ${i === currentSlide ? styles.active : ''}`}>
            <img src={slide.img} alt={slide.alt} className={styles.image} />
          </div>
        ))}
      </div>

      {/* Contenu centré au milieu */}
      <div className={styles.centerContent}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            {t('hero.welcome.title', 'Djoué-Léfini')}
          </h1>
          <p className={styles.subtitle}>
            {t('hero.welcome.subtitle', 'Département du Pool • République du Congo')}
          </p>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <span className={styles.number}>6</span>
            <span className={styles.label}>Districts</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.number}>2024</span>
            <span className={styles.label}>Création</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.number}>Odziba</span>
            <span className={styles.label}>Chef-lieu</span>
          </div>
        </div>
      </div>
    </section>
  )
}