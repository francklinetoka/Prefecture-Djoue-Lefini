import { useState, useEffect } from 'react'
import { Menu, X, Search, ChevronDown, Globe } from 'lucide-react'
import styles from './Header.module.css'

export default function Header() {
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

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* === BARRE DU HAUT – Toujours visible, logo officiel === */}
        <div className={styles.topBar}>
          <div className={styles.logoSection}>
            <div className={styles.logoWrapper}>
              <img 
                src="../public/RC_Logo.png" 
                alt="Armoiries de la République du Congo" 
                className={styles.logoImage}
              />
            </div>
            <div>
              <h1 className={styles.title}>PRÉFECTURE DU DJOUÉ-LÉFINI</h1>
              <p className={styles.subtitle}>Département du Pool • République du Congo</p>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.searchWrapper}>
              <input type="text" placeholder="Rechercher..." className={styles.searchInput} />
              <Search size={16} className={styles.searchIcon} />
            </div>

            <button 
              onClick={() => setLangOpen(!langOpen)} 
              className={styles.langBtn}
            >
              <Globe size={16} />
              <span>FR</span>
              <ChevronDown size={12} className={langOpen ? 'rotate-180' : ''} />
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.mobileBtn}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* === BARRE DE NAVIGATION – Devient blanche au scroll === */}
        <nav className={`${styles.navBar} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.navLinks}>

            <a href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
              Accueil
            </a>

            <div 
              className={styles.dropdown}
              onMouseEnter={() => setInstitutionOpen(true)}
              onMouseLeave={() => setInstitutionOpen(false)}
            >
              <button className={`${styles.navLink} ${isActive(['/gouvernance', '/transparence', '/prefet']) ? styles.active : ''}`}>
                Institution <ChevronDown size={14} className={institutionOpen ? 'rotate-180' : ''} />
              </button>
              {institutionOpen && (
                <div className={styles.dropdownMenu}>
                  <a href="/gouvernance">Gouvernance</a>
                  <a href="/transparence">Transparence</a>
                  <a href="/prefet">Mot du Préfet</a>
                </div>
              )}
            </div>

            <div 
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}>
                Services <ChevronDown size={14} className={servicesOpen ? 'rotate-180' : ''} />
              </button>
              {servicesOpen && (
                <div className={styles.dropdownMenu}>
                  <a href="/services">Tous les services</a>
                  <a href="/services/demarches">Démarches</a>
                  <a href="/services/etat-civil">État civil</a>
                  <a href="/services/fiscaux">Fiscalité</a>
                </div>
              )}
            </div>

            <a href="/actualites" className={`${styles.navLink} ${isActive('/actualites') ? styles.active : ''}`}>
              Actualités
            </a>

            <a href="/districts" className={`${styles.navLink} ${isActive('/districts') ? styles.active : ''}`}>
              Districts
            </a>

            <a href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>
              Aide & Contact
            </a>

          </div>
        </nav>
      </div>
    </header>
  )
}