import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Users, Briefcase, Info, List, UserCheck, PhoneCall } from 'lucide-react';

// --- Données des districts (INCHANGÉES) ---
const getDistrictData = (id: string) => {
    const lowerId = id.toLowerCase();
    
    switch (lowerId) {
        case 'odziba':
            return {
                name: 'Odziba',
                prefet: 'Mme. Jeanne MABIALA',
                contacts: {
                    email: 'prefecture.odziba@djouelefini.cg',
                    telephone: '+242 06 123 4567',
                    adresse: 'Place de la Mairie, Odziba Centre',
                },
                description: `Le District d’Odziba est le pôle administratif et commercial principal de la Préfecture de Djoué-Léfini. Récemment, d'importants travaux de modernisation ont été réalisés dans le bureau d’état civil, améliorant l'accès aux services publics pour les citoyens. Son économie repose principalement sur l'agriculture et un marché central très actif.`,
                services: [
                    'État Civil et Identité',
                    'Gestion Foncière',
                    'Sécurité Publique (Gendarmerie)',
                    'Service d’Assainissement',
                ],
                imageUrl: 'https://placehold.co/800x400/004d40/white?text=Odziba+Vue+Principale',
            };
        case 'ngabe':
            return {
                name: 'Ngabé',
                prefet: 'M. Pierre NGOMA',
                contacts: {
                    email: 'prefecture.ngabe@djouelefini.cg',
                    telephone: '+242 06 987 6543',
                    adresse: 'Quartier Administratif, Ngabé',
                },
                description: `Ngabé est reconnu pour sa richesse naturelle et est le district le plus orienté vers la conservation environnementale et l'éco-tourisme. La préfecture y encourage les initiatives de développement durable et la valorisation du patrimoine local.`,
                services: [
                    'Bureau du Préfet',
                    'Direction de l’Environnement',
                    'Services agricoles',
                    'Affaires Sociales',
                ],
                imageUrl: 'https://placehold.co/800x400/2E7D32/white?text=Ngabe+Nature',
            };
        case 'ignie':
            return {
                name: 'Ignié',
                prefet: 'M. Luc BALOU',
                contacts: {
                    email: 'prefecture.ignie@djouelefini.cg',
                    telephone: '+242 06 555 1212',
                    adresse: 'Centre Municipal, Ignié',
                },
                description: `Le District d'Ignié est un important carrefour logistique et un centre historique d'artisanat. Son administration est focalisée sur le développement des infrastructures routières et la promotion des petites et moyennes entreprises locales.`,
                services: [
                    'Urbanisme et Travaux Publics',
                    'Enregistrement Commercial',
                    'Promotion de l’Artisanat',
                    'Collecte des Impôts locaux',
                ],
                imageUrl: 'https://placehold.co/800x400/388E3C/white?text=Ignie+Carrefour',
            };
        case 'lemini':
            return {
                name: 'Lémini',
                prefet: 'M. Thomas OKOKO',
                contacts: {
                    email: 'prefecture.lemini@djouelefini.cg',
                    telephone: '+242 06 200 8080',
                    adresse: 'Port Fluvial, Lémini',
                },
                description: `Situé le long de la rivière, le District de Lémini est essentiel pour le transport fluvial et l'économie liée à la pêche. L'administration locale se concentre sur l'entretien des voies navigables et le soutien aux coopératives de pêcheurs.`,
                services: [
                    'Gestion du Port et Transport',
                    'Réglementation de la Pêche',
                    'Services de Santé et Hygiène',
                    'Développement Communautaire',
                ],
                imageUrl: 'https://placehold.co/800x400/4CAF50/white?text=Lémini+Fleuve',
            };
        case 'ossiele':
            return {
                name: 'Ossiélé',
                prefet: 'Mme. Céline BIKOKO',
                contacts: {
                    email: 'prefecture.ossiele@djouelefini.cg',
                    telephone: '+242 06 313 7070',
                    adresse: 'Bureau Préfectoral, Ossiélé',
                },
                description: `Ossiélé est le district avec la plus grande zone forestière. Les enjeux locaux tournent autour de la gestion durable des ressources naturelles, de l'exploitation forestière responsable et du développement des infrastructures rurales pour désenclaver les villages.`,
                services: [
                    'Gestion Forestière et Minière',
                    'Infrastructure Rurale',
                    'Administration Scolaire (Éducation)',
                    'Protection Civile',
                ],
                imageUrl: 'https://placehold.co/800x400/66BB6A/white?text=Ossiélé+Forêt',
            };
        default:
             return {
                name: 'Inconnu',
                prefet: 'Non disponible',
                contacts: {
                    email: 'erreur@djouelefini.cg',
                    telephone: 'N/A',
                    adresse: 'Veuillez revenir à la page des districts.',
                },
                description: `Les données pour ce district sont introuvables. Veuillez vérifier l'adresse ou retourner à la liste des districts.`,
                services: [],
                imageUrl: 'https://placehold.co/800x400/757575/white?text=District+Inconnu',
            };
    }
};

interface DistrictDetailProps {
    districtId?: string;
}

// Composant pour simuler le Fil d'Ariane
const Breadcrumb = ({ districtName }: { districtName: string }) => (
    <nav className="text-sm font-medium mb-8 text-gray-500">
        <a href="/" className="hover:text-gray-900">Accueil</a>
        <ChevronRight size={14} className="inline-block mx-2" />
        <a href="/districts" className="hover:text-gray-900">Districts</a>
        <ChevronRight size={14} className="inline-block mx-2" />
        <span className="text-gray-900 font-semibold">{districtName}</span>
    </nav>
);

// Composant principal
export default function DistrictDetail({ districtId }: DistrictDetailProps) {
    
    // Suppression de l'état `activeTab`

    const pathSegments = window.location.pathname.split('/').filter(segment => segment);
    const resolvedId = districtId || pathSegments[pathSegments.length - 1] || '';
    
    const district = getDistrictData(resolvedId);

    // Définition des styles custom
    const styles = {
        '--cg-green-700': '#387c4f',
        '--cg-green-800': '#2c613e',
        '--cg-yellow-400': '#f5b542',
        '--gray-950': '#030712',
    } as React.CSSProperties;


    return (
        <main className="bg-gray-50 py-12 md:py-16 text-[var(--gray-950)]" style={styles}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <Breadcrumb districtName={`District de ${district.name}`} />

                {/* --- HEADER PRINCIPAL --- */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-[var(--cg-green-800)]">
                    District de {district.name}
                </h1>
                <p className="text-lg text-gray-600 mb-6 pb-6 border-b border-gray-200">
                    Administration et services publics du district. **Toutes les démarches se font exclusivement en personne** aux bureaux de l'administration locale.
                </p>

                {/* Section Image Principale */}
                <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl mb-10">
                    <img 
                        src={district.imageUrl}
                        alt={`Image principale du District de ${district.name}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* CONTENU PRINCIPAL (Cartes Verticales et Colonne Latérale) */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* COLONNE 1: Cartes d'Information (verticales) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 1. CARTE PRÉSENTATION */}
                        <section className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--cg-green-700)]">
                            <h2 className="text-2xl font-bold mb-4 text-[var(--cg-green-800)] flex items-center">
                                <Info size={24} className="mr-3 text-[var(--cg-yellow-400)]" />
                                Présentation du District
                            </h2>
                            <p className="text-base leading-relaxed text-gray-700">
                                {district.description}
                            </p>
                        </section>

                        {/* 2. CARTE SERVICES ADMINISTRATIFS */}
                        <section className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--cg-green-700)]">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--cg-green-800)] flex items-center">
                                <List size={24} className="mr-3 text-[var(--cg-yellow-400)]" />
                                Services Administratifs Locaux
                            </h2>
                            {district.services.length > 0 ? (
                                <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
                                    {district.services.map((service, index) => (
                                        <li key={index} className="flex items-center text-gray-700 text-base p-3 bg-gray-50 rounded-lg">
                                            <Briefcase size={18} className="flex-shrink-0 mr-3 text-[var(--cg-green-700)]" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 italic">Aucun service local listé pour le moment.</p>
                            )}
                        </section>
                        
                        {/* 3. CARTE CONTACTS & LOCALISATION */}
                        <section className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-[var(--cg-green-700)]">
                            <h2 className="text-2xl font-bold mb-4 flex items-center text-[var(--cg-green-800)]">
                                <PhoneCall size={24} className="mr-3 text-[var(--cg-yellow-400)]" />
                                Coordonnées et Localisation
                            </h2>
                            <p className="text-sm text-gray-600 mb-6">
                                Ces coordonnées servent aux informations générales et horaires d'ouverture. Les **démarches administratives se font uniquement sur place** à l'adresse indiquée.
                            </p>
                            <div className="space-y-4 text-gray-700 p-4 border border-gray-200 rounded-lg">
                                <div className="flex items-start">
                                    <MapPin size={18} className="mr-4 flex-shrink-0 mt-1 text-[var(--cg-yellow-400)]" />
                                    <div>
                                        <span className="font-semibold block">Adresse Physique</span>
                                        <span className="ml-0 block">{district.contacts.adresse}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Phone size={18} className="mr-4 flex-shrink-0 text-[var(--cg-yellow-400)]" />
                                    <span className="font-semibold">Téléphone : </span><span className="ml-2">{district.contacts.telephone}</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail size={18} className="mr-4 flex-shrink-0 text-[var(--cg-yellow-400)]" />
                                    <span className="font-semibold">Email : </span><span className="ml-2">{district.contacts.email}</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* COLONNE 2: Responsable (Informations statiques) */}
                    <aside className="lg:col-span-1 space-y-8 lg:mt-0 sticky top-8 self-start">
                        
                        {/* Carte du Préfet (Très visible) */}
                        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[var(--cg-green-700)]">
                            <div className="flex items-center mb-3">
                                <Users size={28} className="text-[var(--cg-green-700)] mr-3" />
                                <h3 className="text-xl font-bold text-gray-800">Responsable du District</h3>
                            </div>
                            <p className="text-xl font-semibold text-[var(--cg-green-800)] mt-4">{district.prefet}</p>
                            <p className="text-sm text-gray-500">Préfet de District</p>
                        </div>
                        
                        {/* RAPPEL EXCLUSIF Présentiel (Mise en avant) */}
                        <div className="p-5 bg-[var(--cg-yellow-400)] rounded-xl shadow-md text-gray-900">
                             <div className="flex items-center">
                                <UserCheck size={24} className="mr-3 flex-shrink-0" />
                                <h4 className="text-lg font-bold">Rappel : Démarches en Personne</h4>
                             </div>
                             <p className="mt-3 text-sm font-medium">
                                Votre présence physique est **obligatoire** pour toutes les démarches administratives locales.
                             </p>
                        </div>

                    </aside>
                </div>

            </div>
        </main>
    );
}