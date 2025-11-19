// src/pages/Demarches.tsx – Version finale propre & institutionnelle
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Users, CreditCard, Home, Briefcase, ClipboardList, Clock, Building2 } from 'lucide-react';

const procedures = [
  {
    id: 'acte-naissance',
    title: "Acte de Naissance (Copie intégrale)",
    description: "Obtention d'une copie intégrale ou d’un extrait d’acte de naissance.",
    service: "État Civil",
    delay: "48 heures ouvrées",
    location: "Guichet de l’État Civil du district de naissance",
    icon: Users,
  },
  {
    id: 'renouvellement-cni',
    title: "Renouvellement de Carte d’Identité Nationale",
    description: "Renouvellement après expiration, perte ou vol.",
    service: "Service des Titres d’Identité",
    delay: "3 à 4 semaines",
    location: "Préfecture ou sous-préfecture du lieu de résidence",
    icon: CreditCard,
  },
  {
    id: 'permis-construire',
    title: "Demande de Permis de Construire",
    description: "Autorisation pour toute construction ou modification importante.",
    service: "Service de l’Urbanisme",
    delay: "2 mois (instruction)",
    location: "Service Technique du district concerné",
    icon: Home,
  },
  {
    id: 'declaration-commerce',
    title: "Déclaration d’Activité Commerciale",
    description: "Enregistrement d’une nouvelle activité commerciale ou artisanale.",
    service: "Commerce & Économie Locale",
    delay: "72 heures",
    location: "Mairie ou Chambre de Commerce du district",
    icon: Briefcase,
  },
  {
    id: 'listes-electorales',
    title: "Inscription sur les Listes Électorales",
    description: "Inscription ou mise à jour pour participer aux élections.",
    service: "Bureau Électoral",
    delay: "Immédiat (hors période de révision)",
    location: "Mairie ou antenne administrative du lieu de résidence",
    icon: ClipboardList,
  },
];

const ProcedureCard = ({ proc }: { proc: typeof procedures[0] }) => {
  const navigate = useNavigate();
  const Icon = proc.icon;

  return (
    <div
      onClick={() => navigate(`/services/demarches/${proc.id}`)}
      className="bg-white rounded-xl border border-gray-200 p-8 cursor-pointer transition-all duration-300 hover:border-[var(--cg-green-700)] hover:shadow-lg group"
    >
      {/* Icône + Titre */}
      <div className="flex items-start gap-5">
        <div className="p-4 bg-[var(--cg-green-50)] rounded-lg group-hover:bg-[var(--cg-green-100)] transition">
          <Icon size={36} className="text-[var(--cg-green-800)]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[var(--gray-900)] leading-tight">
            {proc.title}
          </h3>
          <p className="text-sm font-medium text-[var(--cg-green-700)] mt-1">
            {proc.service}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        {proc.description}
      </p>

      {/* Infos pratiques */}
      <div className="mt-8 space-y-4 text-sm">
        <div className="flex items-center text-gray-600">
          <Clock size={18} className="mr-3 text-[var(--cg-yellow-500)] flex-shrink-0" />
          <span><strong className="font-semibold">Délai :</strong> {proc.delay}</span>
        </div>
        <div className="flex items-start text-gray-600">
          <Building2 size={18} className="mr-3 mt-0.5 text-[var(--cg-yellow-500)] flex-shrink-0" />
          <span><strong className="font-semibold">Où se rendre :</strong> {proc.location}</span>
        </div>
      </div>

      {/* Bouton subtil */}
      <div className="mt-8 flex justify-end">
        <span className="inline-flex items-center text-[var(--cg-green-700)] font-bold group-hover:text-[var(--cg-green-800)] transition">
          Voir la démarche complète
          <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition" />
        </span>
      </div>
    </div>
  );
};

export default function Demarches() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Fil d'ariane */}
        <nav className="text-sm text-gray-600 mb-10">
          <button onClick={() => navigate('/')} className="hover:text-[var(--cg-green-700)] transition">
            Accueil
          </button>
          <ChevronRight size={14} className="inline mx-2" />
          <span className="font-semibold text-[var(--cg-green-800)]">Démarches Administratives</span>
        </nav>

        {/* Titre principal centré */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--cg-green-800)] leading-tight">
            Démarches Administratives
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Retrouvez les principales démarches administratives effectuées auprès de la Préfecture de Djoué-Léfini et de ses districts. 
            Toutes ces démarches nécessitent une <strong>présence physique</strong> au guichet compétent.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {procedures.map((proc) => (
            <ProcedureCard key={proc.id} proc={proc} />
          ))}
        </div>

        {/* Message clair en bas */}
        <div className="mt-20 text-center bg-white rounded-2xl border border-gray-200 p-10">
          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
            Aucune démarche n’est actuellement dématérialisée.<br />
            <strong>Toutes les procédures se font exclusivement en présentiel</strong> auprès des services administratifs compétents.
          </p>
        </div>

      </div>
    </main>
  );
}