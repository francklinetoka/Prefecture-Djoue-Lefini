// src/pages/DemarcheDetail.tsx
// → TON code original, seule la disposition a changé (2 colonnes)
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, FileText, AlertCircle } from 'lucide-react';

// TES DONNÉES EXACTEMENT COMME TU LES AVAIS (je les remets intégralement)
const procedures = [
  {
    id: 'acte-naissance',
    title: "Demande d'Acte de Naissance (Copie intégrale)",
    description: "Obtention d'une copie intégrale ou d'un extrait de l'acte de naissance pour toute personne née dans le département.",
    delay: "48h ouvrées",
    status: "En ligne ou au guichet du district",
    tags: ["État Civil", "Famille"],
    documents: [
      "Justificatif d'identité",
      "Livret de famille (si applicable)",
      "Justificatif de domicile récent"
    ],
    steps: [
      "Remplir le formulaire en ligne ou sur place",
      "Joindre les pièces justificatives",
      "Valider la demande",
      "Réception par courrier ou retrait au guichet"
    ],
    onlineLink: "https://portail.gouv.cg/acte-naissance",
    info: "Gratuit • Traitement prioritaire pour les nouveau-nés"
  },
  {
    id: 'renouvellement-cni',
    title: "Renouvellement de Carte d'Identité Locale",
    description: "Procédure de renouvellement de la pièce d'identité après expiration ou en cas de perte/vol.",
    delay: "3 semaines",
    status: "Uniquement au guichet",
    tags: ["Identité", "Sécurité"],
    documents: ["Ancienne CNI (si détériorée)", "2 photos d'identité récentes", "Acte de naissance", "Justificatif de domicile"],
    steps: ["Prendre rendez-vous au district", "Se présenter avec les pièces", "Prise d'empreintes", "Retrait sous 3 semaines"],
    info: "Payant : 5 000 FCFA • Nécessite présence physique obligatoire"
  },
  {
    id: 'permis-construire',
    title: "Dépôt de Demande de Permis de Construire",
    description: "Déclaration et instruction des projets de construction ou de modification majeure d'habitations.",
    delay: "2 mois",
    status: "Au Service d'Urbanisme du district",
    tags: ["Urbanisme", "Travaux"],
    documents: ["Plan de masse", "Plan de situation", "Notice descriptive", "Titre foncier", "Devis estimatif"],
    steps: ["Constitution du dossier complet", "Dépôt au service urbanisme", "Instruction technique", "Décision du Maire"],
    info: "Délai légal : 60 jours • Possibilité de recours en cas de refus"
  },
  {
    id: 'declaration-commerce',
    title: "Déclaration d'Ouverture de Commerce",
    description: "Enregistrement d'une nouvelle activité commerciale ou d'une micro-entreprise auprès des autorités locales.",
    delay: "72h",
    status: "En ligne (portail Pro) ou guichet",
    tags: ["Économie", "Entreprise"],
    documents: ["Pièce d'identité", "Extrait RCCM (si entreprise)", "Bail commercial ou titre de propriété", "Photo du local"],
    steps: ["Remplir le formulaire", "Téléverser les pièces", "Validation automatique", "Réception du récépissé"],
    onlineLink: "https://pro.gouv.cg/declaration",
    info: "Gratuit • Récépissé valant autorisation provisoire"
  },
  {
    id: 'listes-electorales',
    title: "Inscription sur les Listes Électorales",
    description: "Permet aux nouveaux résidents ou aux jeunes adultes d'exercer leur droit de vote lors des élections locales.",
    delay: "Immédiat (sauf période de révision)",
    status: "En ligne ou au district",
    tags: ["Citoyenneté", "Élections"],
    documents: ["Pièce d'identité en cours de validité", "Justificatif de domicile de moins de 3 mois"],
    steps: ["Se connecter ou se présenter au district", "Remplir le formulaire CERFA", "Validation immédiate"],
    onlineLink: "https://elections.gouv.cg/inscription",
    info: "Inscription possible toute l’année hors période de révision"
  },
];

export default function DemarcheDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const procedure = procedures.find(p => p.id === id);

  if (!procedure) {
    return (
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <AlertCircle size={64} className="mx-auto text-red-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Démarche non trouvée</h1>
          <button onClick={() => navigate(-1)} className="mt-6 text-green-700 hover:underline">
            Retour
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bouton retour – exactement comme toi */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-700 hover:text-green-800 mb-8 font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Retour aux démarches
        </button>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">

          {/* En-tête – inchangé */}
          <div className="bg-gradient-to-r from-green-700 to-green-800 p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold">{procedure.title}</h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {procedure.tags.map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ICI : seule la disposition change → 2 colonnes */}
          <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-12">

            {/* === COLONNE GAUCHE (tes blocs originaux) === */}
            <div className="space-y-10">

              <p className="text-lg text-gray-700 leading-relaxed">{procedure.description}</p>

              {/* Infos rapides */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock size={24} className="text-yellow-500 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Délai de traitement</p>
                    <p className="text-xl font-bold text-green-700">{procedure.delay}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={24} className="text-yellow-500 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Où faire la démarche ?</p>
                    <p className="text-lg">{procedure.status}</p>
                  </div>
                </div>
              </div>

              {/* Documents requis */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="mr-3 text-green-700" />
                  Documents à fournir
                </h2>
                <ul className="space-y-3">
                  {procedure.documents.map((doc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* === COLONNE DROITE (tes blocs originaux) === */}
            <div className="space-y-10">

              {/* Étapes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Étapes de la démarche</h2>
                <ol className="space-y-4">
                  {procedure.steps.map((step, i) => (
                    <li key={i} className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm mr-4">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Lien en ligne + info – exactement ton code original */}
              {(procedure.onlineLink || procedure.info) && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  {procedure.onlineLink && (
                    <a
                      href={procedure.onlineLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition mb-4"
                    >
                      Faire la démarche en ligne
                      <ArrowLeft className="ml-2 rotate-180" size={18} />
                    </a>
                  )}
                  {procedure.info && (
                    <p className="text-sm text-green-800 font-medium mt-3">
                      {procedure.info}
                    </p>
                  )}
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}