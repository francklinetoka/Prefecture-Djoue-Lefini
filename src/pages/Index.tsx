// src/pages/Index.tsx – Version Finale Modulaire et Déstructurée

// Suppression des imports de structure globale (Header, Footer)
import Hero from '../components/Hero';
import MessageDuPrefet from '../components/MessageDuPrefet'; // Composant au niveau racine
// --- Sections importées des sous-dossiers ---
import ActualitesSection from '../components/Actualites/ActualitesSection';
import ServicesLocauxSection from '../components/Services/ServicesLocauxSection';
import DocumentsSection from '../components/Documents/DocumentsSection';
import LocalitesHero from '../components/Localites/LocalitesHero';
import TerritoireSection from '../components/Territoires/TerritoireSection';
import FaqSection from '../components/Faq/FaqSection';

// Aucune importation de lucide-react n'est nécessaire ici

export default function Index() {
  return (
    // Le composant App.tsx/Layout doit fournir le <Header> et le <Footer>
    <main>
      
      {/* HERO */}
      <Hero />

      {/* 2. ACTUALITÉS */}
      <ActualitesSection />

      {/* 3. MESSAGE DU PRÉFET */}
      <MessageDuPrefet /> 

      {/* 4. SERVICES PUBLICS LOCAUX */}
      <ServicesLocauxSection /> 

      {/* 5. DOCUMENTS */}
      <DocumentsSection />

      {/* 6. LOCALITÉS */}
      <LocalitesHero />

      {/* 7. TERRITOIRE */}
      <TerritoireSection /> 

      {/* 8. FAQ */}
      <FaqSection />

    </main>
  );
}