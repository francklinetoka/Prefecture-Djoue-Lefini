// src/components/Header.tsx
import { useState, useEffect } from 'react'
import { Menu, X, Search, ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.css'

export default function Header() {
  const { t, i18n } = useTranslation()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [institutionOpen, setInstitutionOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handlePath = () => setCurrentPath(window.location.pathname)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('popstate', handlePath)
    window.addEventListener('hashchange', handlePath)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handlePath)
      window.removeEventListener('hashchange', handlePath)
    }
  }, [])

  const isActive = (paths: string | string[]) => {
    if (typeof paths === 'string') return currentPath === paths || currentPath.startsWith(paths + '/')
    return paths.some(p => currentPath === p || currentPath.startsWith(p + '/'))
  }

  const currentLang = i18n.language.toUpperCase().includes('FR') ? 'FR' :
                      i18n.language.toUpperCase().includes('LN') ? 'LN' : 'EN'

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setLangOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* === BARRE DU HAUT === */}
        <div className={styles.topBar}>
          <div className={styles.logoSection}>
            <div className={styles.logoWrapper}>
              <img 
                src="/RC_Logo.png" 
                alt="Armoiries de la République du Congo" 
                className={styles.logoImage}
              />
            </div>
            <div>
              <h1 className={styles.title}>
                {t('header.title', 'PRÉFECTURE DU DJOUÉ-LÉFINI')}
              </h1>
              <p className={styles.subtitle}>
                {t('header.subtitle', 'Département du Pool • République du Congo')}
              </p>
            </div>
          </div>

          <div className={styles.rightSection}>
            {/* Recherche */}
            <div className={styles.searchWrapper}>
              <input 
                type="text" 
                placeholder={t('header.search', 'Rechercher...')} 
                className={styles.searchInput} 
              />
              <Search size={16} className={styles.searchIcon} />
            </div>

            {/* Sélecteur de langue */}
            <div className={styles.langSelector}>
              <button 
                onClick={() => setLangOpen(!langOpen)} 
                className={styles.langBtn}
              >
                <Globe size={18} />
                <span className="font-semibold">{currentLang}</span>
                <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className={styles.langDropdown}>
                  <button onClick={() => changeLanguage('fr')} className={styles.langOption}>
                    Français
                  </button>
                  <button onClick={() => changeLanguage('ln')} className={styles.langOption}>
                    Lingala
                  </button>
                  <button onClick={() => changeLanguage('en')} className={styles.langOption}>
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Menu mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.mobileBtn}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* === NAVIGATION PRINCIPALE === */}
        <nav className={`${styles.navBar} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.navLinks}>

            <a href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
              {t('header.home', 'Accueil')}
            </a>

            <div 
              className={styles.dropdown}
              onMouseEnter={() => setInstitutionOpen(true)}
              onMouseLeave={() => setInstitutionOpen(false)}
            >
              <button className={`${styles.navLink} ${isActive(['/gouvernance', '/transparence']) ? styles.active : ''}`}>
                {t('header.institution', 'Institution')} 
                <ChevronDown size={14} className={`ml-1 transition-transform ${institutionOpen ? 'rotate-180' : ''}`} />
              </button>
              {institutionOpen && (
                <div className={styles.dropdownMenu}>
                  <a href="/gouvernance">{t('header.governance', 'Gouvernance')}</a>
                  <a href="/transparence">{t('header.transparency', 'Transparence')}</a>
                  <a href="/prefet">{t('header.prefet', 'Mot du Préfet')}</a>
                </div>
              )}
            </div>

            <div 
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}>
                {t('header.services', 'Services')} 
                <ChevronDown size={14} className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className={styles.dropdownMenu}>
                  <a href="/services">{t('header.allServices', 'Tous les services')}</a>
                  <a href="/services/demarches">{t('header.procedures', 'Démarches')}</a>
                  <a href="/services/etat-civil">{t('header.civilStatus', 'État civil')}</a>
                  <a href="/services/fiscaux">{t('header.tax', 'Fiscalité')}</a>
                </div>
              )}
            </div>

            <a href="/actualites" className={`${styles.navLink} ${isActive('/actualites') ? styles.active : ''}`}>
              {t('header.news', 'Actualités')}
            </a>

            <a href="/districts" className={`${styles.navLink} ${isActive('/districts') ? styles.active : ''}`}>
              {t('header.districts', 'Districts')}
            </a>

            <a href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>
              {t('header.contact', 'Aide & Contact')}
            </a>

          </div>
        </nav>
      </div>
    </header>
  )
}