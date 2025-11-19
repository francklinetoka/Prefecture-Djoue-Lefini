import Hero from '../components/Hero';
import MessageDuPrefet from '../components/MessageDuPrefet.jsx';
import ActualitesSection from '../components/Actualites/ActualitesSection.jsx';
import ServicesLocauxSection from '../components/services/ServicesLocauxSection.jsx';
import DocumentsSection from '../components/Documents/DocumentsSection.jsx';
import LocalitesHero from '../components/Localites/LocalitesHero.jsx';
import TerritoireSection from '../components/Territoires/TerritoireSection.jsx';
import FaqSection from '../components/Faq/FaqSection.jsx';
import FloatingAssistant from '../components/FloatingAssistant';

export default function Index() {
  return (
    <main>
      <Hero />
      <ActualitesSection />
      <MessageDuPrefet />
      <ServicesLocauxSection />
      <DocumentsSection />
      <LocalitesHero />
      <TerritoireSection />
      <FaqSection />

      <FloatingAssistant />
    </main>
  );
}