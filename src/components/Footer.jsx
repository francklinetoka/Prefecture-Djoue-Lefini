import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Youtube, 
  Building2,
  ChevronUp
} from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      
      {/* SECTION PRINCIPALE – DIRECTEMENT LE CONTENU UTILE */}
      <div className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Contact & Localisation */}
            <div className={styles.contactColumn}>
              <h3 className={styles.sectionTitle}>
                <Building2 size={22} className="inline mr-3" />
                Contact & Localisation
              </h3>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <MapPin size={20} />
                  <div>
                    <strong>Odziba, District d’Odziba</strong><br />
                    Département du Djoué-Léfini<br />
                    République du Congo
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={20} />
                  <div>
                    <strong>Tél :</strong> +242 06 123 45 67<br />
                    <strong>Hotline :</strong> +242 05 987 65 43
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={20} />
                  <div>
                    contact@prefecture-djouelefini.cg<br />
                    prefet.djouelefini@gouv.cg
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Clock size={20} />
                  <div>
                    <strong>Lun – Ven :</strong> 07h30 – 15h30<br />
                    <strong>Sam :</strong> 07h30 – 12h00
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className={styles.sectionTitle}>Services</h3>
              <ul className={styles.linkList}>
                <li><a href="/services/demarches">Démarches administratives</a></li>
                <li><a href="/services/etat-civil">État civil</a></li>
                <li><a href="/services/fiscaux">Services fiscaux</a></li>
                <li><a href="/services/urbanisme">Urbanisme & permis</a></li>
              </ul>
            </div>

            {/* La Préfecture */}
            <div>
              <h3 className={styles.sectionTitle}>La Préfecture</h3>
              <ul className={styles.linkList}>
                <li><a href="/gouvernance">Gouvernance</a></li>
                <li><a href="/transparence">Transparence</a></li>
                <li><a href="/districts">Les 6 districts</a></li>
                <li><a href="/actualites">Actualités</a></li>
                <li><a href="/prefet">Mot du Préfet</a></li>
              </ul>
            </div>

            {/* Citoyens */}
            <div>
              <h3 className={styles.sectionTitle}>Citoyens</h3>
              <ul className={styles.linkList}>
                <li><a href="/faq">Questions fréquentes</a></li>
                <li><a href="/guide">Guide des démarches</a></li>
                <li><a href="/documents">Documents officiels</a></li>
                <li><a href="/contact">Contact & aide</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR – Copyright + Réseaux + Retour en haut */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div>
              <p className={styles.copyright}>
                © 2024 - {currentYear} Préfecture du Djoué-Léfini · République du Congo
              </p>
              <div className={styles.legalLinks}>
                <a href="/mentions-legales">Mentions légales</a>
                <span>•</span>
                <a href="/accessibilite">Accessibilité</a>
                <span>•</span>
                <a href="/politique-confidentialite">Données personnelles</a>
              </div>
            </div>

            <div className={styles.rightSide}>
              <div className={styles.socialLinks}>
                <span className={styles.socialLabel}>Suivez-nous</span>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Facebook"><Facebook size={22} /></a>
                  <a href="#" aria-label="Twitter"><Twitter size={22} /></a>
                  <a href="#" aria-label="YouTube"><Youtube size={22} /></a>
                </div>
              </div>

              <button onClick={scrollToTop} className={styles.backToTop} aria-label="Retour en haut">
                <ChevronUp size={26} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}