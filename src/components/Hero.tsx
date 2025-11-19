// src/components/Hero.tsx
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

const slides = [
  { img: "/Img_Hero_Index/Lefini_River.jpg", alt: "Fleuve Léfini" },
  { img: "/Img_Hero_Index/Odziba.jpg", alt: "Odziba - Chef-lieu" },
  { img: "/Img_Hero_Index/Paysage.jpg", alt: "Paysages du Djoué-Léfini" },
]

export default function Hero() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.carousel}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === currentSlide ? styles.active : ''}`}
          >
            <img src={slide.img} alt={slide.alt} className={styles.image} />
          </div>
        ))}
      </div>

      <div className={styles.gradient}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('hero.welcome.title', 'Djoué-Léfini')}
        </h1>
        <p className={styles.subtitle}>
          {t('hero.welcome.subtitle', 'Département du Pool • République du Congo')}
        </p>

        {/* 3 petites cartes infos */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoNumber}>6</span>
            <span className={styles.infoLabel}>{t('hero.info.districts', 'Districts')}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoNumber}>2024</span>
            <span className={styles.infoLabel}>{t('hero.info.creation', 'Création')}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoNumber}>Odziba</span>
            <span className={styles.infoLabel}>{t('hero.info.capital', 'Chef-lieu')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}