import { ChevronRight, Users, Briefcase, FileText, Landmark } from 'lucide-react';

// Données fictives pour l'organisation
const organisationData = {
    missions: [
        "Coordination des services de l'État dans le département.",
        "Garantie de l'ordre public et de la sécurité civile.",
        "Gestion du budget préfectoral et des finances publiques locales.",
        "Supervision des élections et des démarches administratives.",
        "Promotion du développement local en collaboration avec les districts."
    ],
    equipePrincipale: [
        { fonction: "Préfet Principal", nom: "Albert NGOMA", departement: "Cabinet du Préfet", description: "Représentant de l'État, autorité exécutive." },
        { fonction: "Secrétaire Général", nom: "Marie-Claire LOUBA", departement: "Secrétariat Général", description: "Coordination des services administratifs et du personnel." },
        { fonction: "Chef de Cabinet", nom: "Patrice OKEMBA", departement: "Cabinet du Préfet", description: "Gestion de l'agenda et des relations publiques du Préfet." },
    ],
    servicesRattaches: [
        { nom: "Direction des Affaires Sociales", role: "Gestion des aides et programmes sociaux." },
        { nom: "Service de l'Urbanisme et de l'Environnement", role: "Planification territoriale et protection des ressources naturelles." },
        { nom: "Trésorerie Préfectorale", role: "Gestion comptable et fiscale du département." },
    ]
};

export default function Gouvernance() {
    return (
        <main className="bg-gray-50 py-12 md:py-16 text-[var(--gray-950)]">
            <div className="container">
                
                {/* Fil d'Ariane (CORRIGÉ) */}
                <nav className="text-sm font-medium mb-8 text-gray-500">
                    
                    <ChevronRight size={14} className="inline-block mx-2" />
                    <a href="/gouvernance" className="hover:text-[var(--cg-green-700)]">Institution</a> 
                    <ChevronRight size={14} className="inline-block mx-2" />
                    <span className="text-gray-900 font-semibold">Gouvernance & Missions</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--cg-green-800)]">
                    Notre Gouvernance
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                    Découvrez l'organisation administrative, les missions principales de la Préfecture et les membres de l'équipe dirigeante.
                </p>

                {/* Section 1: Missions et Rôle */}
                <section className="mb-16 p-8 bg-white rounded-xl shadow-lg border-l-4 border-[var(--cg-yellow-400)]">
                    <h2 className="text-3xl font-bold mb-6 flex items-center text-[var(--cg-green-700)]">
                        <Landmark size={26} className="mr-3 text-[var(--cg-green-800)]" />
                        Missions Fondamentales de la Préfecture
                    </h2>
                    <ul className="space-y-4 list-none pl-0">
                        {organisationData.missions.map((mission, index) => (
                            <li key={index} className="flex items-start text-lg text-gray-700">
                                <ChevronRight size={20} className="flex-shrink-0 mr-3 mt-1 text-[var(--cg-yellow-400)]" />
                                {mission}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Section 2: Équipe Dirigeante */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center text-[var(--cg-green-700)] border-b pb-2">
                        <Users size={26} className="mr-3 text-[var(--cg-green-800)]" />
                        Équipe Dirigeante
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {organisationData.equipePrincipale.map((membre, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl border-t-4 border-[var(--cg-green-700)]">
                                <Briefcase size={28} className="mb-3 text-[var(--cg-yellow-400)]" />
                                <h3 className="text-xl font-bold mb-1 text-[var(--gray-900)]">{membre.fonction}</h3>
                                <p className="text-lg font-semibold text-[var(--cg-green-700)] mb-3">{membre.nom}</p>
                                <p className="text-sm uppercase text-gray-500 mb-2">{membre.departement}</p>
                                <p className="text-base text-gray-700">{membre.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Services Rattachés */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center text-[var(--cg-green-700)] border-b pb-2">
                        <FileText size={26} className="mr-3 text-[var(--cg-green-800)]" />
                        Services et Directions Rattachés
                    </h2>
                    <div className="space-y-4">
                        {organisationData.servicesRattaches.map((service, index) => (
                            <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                                <Briefcase size={20} className="mr-4 text-[var(--cg-yellow-400)] flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-lg text-[var(--gray-900)]">{service.nom}</p>
                                    <p className="text-sm text-gray-600">{service.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}