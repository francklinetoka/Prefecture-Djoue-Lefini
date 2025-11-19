import { ChevronRight, Scale, BarChart, Download, FileText, Calendar } from 'lucide-react';

// Données fictives pour les documents (simulant des liens de téléchargement)
const documents = [
    { type: 'Budget', titre: "Budget Préfectoral 2024 (Exécutif)", date: "Janvier 2024", format: "PDF", link: "#", icon: BarChart },
    { type: 'Procès-Verbal', titre: "PV de la Session Ordinaire du Conseil Départemental - Q3 2023", date: "Octobre 2023", format: "PDF", link: "#", icon: FileText },
    { type: 'Règlement', titre: "Règlement d'Urbanisme du District d'Odziba (Mise à jour)", date: "Septembre 2023", format: "PDF", link: "#", icon: Scale },
    { type: 'Rapport', titre: "Rapport Annuel de Sécurité et de Défense Civile 2023", date: "Décembre 2023", format: "PDF", link: "#", icon: FileText },
    { type: 'Budget', titre: "Comptes Administratifs 2022", date: "Mars 2023", format: "PDF", link: "#", icon: BarChart },
    { type: 'Procès-Verbal', titre: "PV de la Session Extraordinaire - Projet Lémini", date: "Juin 2024", format: "PDF", link: "#", icon: FileText },
];

export default function Transparence() {
    return (
        <main className="bg-gray-50 py-12 md:py-16 text-[var(--gray-950)]">
            <div className="container">
                
                {/* Fil d'Ariane (CORRIGÉ) */}
                <nav className="text-sm font-medium mb-8 text-gray-500">
                    <ChevronRight size={14} className="inline-block mx-2" />
                    {/* Ajout du lien Institution. Utilisation de /gouvernance comme point d'entrée logique du groupe */}
                    <a href="/gouvernance" className="hover:text-[var(--cg-green-700)]">Institution</a>
                    <ChevronRight size={14} className="inline-block mx-2" />
                    <span className="text-gray-900 font-semibold">Transparence & Documents Officiels</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--cg-green-800)]">
                    Transparence et Accès Public
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                    Conformément à nos engagements de bonne gouvernance, trouvez ici les documents clés relatifs à l'administration du département.
                </p>

                {/* Grille des documents */}
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {documents.map((doc, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-lg border-t-8 border-[var(--cg-green-700)] flex flex-col justify-between transition-transform transform hover:scale-[1.02] duration-300"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-[var(--cg-yellow-100)] text-[var(--cg-yellow-800)]">
                                        {doc.type}
                                    </span>
                                    <doc.icon size={28} className="text-[var(--cg-green-700)] flex-shrink-0" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[var(--gray-900)] leading-snug">
                                    {doc.titre}
                                </h3>
                                
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <Calendar size={14} className="mr-2" />
                                    Publié le: {doc.date}
                                </div>
                            </div>
                            
                            <a 
                                href={doc.link} 
                                className="flex items-center justify-center w-full bg-[var(--cg-green-800)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--cg-green-700)] transition duration-200 mt-4"
                                onClick={(e) => { e.preventDefault(); console.log(`Téléchargement simulé de: ${doc.titre}`) }}
                            >
                                <Download size={18} className="mr-2" />
                                Télécharger ({doc.format})
                            </a>
                        </div>
                    ))}
                </section>
                
                {documents.length === 0 && (
                    <div className="text-center p-10 bg-white rounded-xl shadow-lg text-gray-500">
                        Aucun document public disponible pour le moment.
                    </div>
                )}
            </div>
        </main>
    );
}