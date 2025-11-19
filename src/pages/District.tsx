import { ChevronRight, MapPin } from 'lucide-react';

// Liste fictive des districts de Djoué-Léfini
const districts = [
    { id: 'odziba', name: 'Odziba', population: 'Environ 12 000 habitants', imageUrl: 'https://placehold.co/400x250/004d40/white?text=Odziba' },
    { id: 'ngabe', name: 'Ngabé', population: 'Environ 8 500 habitants', imageUrl: 'https://placehold.co/400x250/2E7D32/white?text=Ngabe' },
    { id: 'ignie', name: 'Ignié', population: 'Environ 15 200 habitants', imageUrl: 'https://placehold.co/400x250/388E3C/white?text=Ignié' },
    { id: 'lemini', name: 'Lémini', population: 'Environ 9 800 habitants', imageUrl: 'https://placehold.co/400x250/4CAF50/white?text=Lémini' },
    { id: 'ossiele', name: 'Ossiélé', population: 'Environ 7 100 habitants', imageUrl: 'https://placehold.co/400x250/66BB6A/white?text=Ossiélé' },
];

export default function District() {
    return (
        <main className="bg-gray-50 py-16 text-[var(--gray-950)]">
            <div className="container">
               

                <h1 className="text-heading text-4xl font-extrabold mb-10 text-[var(--cg-green-800)]">
                    Découvrez les Districts de Djoué-Léfini
                </h1>

                <p className="text-lg mb-12 max-w-4xl text-gray-700">
                    La préfecture de Djoué-Léfini est organisée autour de cinq districts, chacun avec ses spécificités administratives, économiques et culturelles. Cliquez sur un district pour accéder à sa page détaillée.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {districts.map((district) => (
                        <a 
                            key={district.id} 
                            // Le lien pointera vers la page de détail (ex: /districts/odziba)
                            href={`/districts/${district.id}`}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group block"
                        >
                            <div className="h-40 w-full overflow-hidden">
                                <img 
                                    src={district.imageUrl} 
                                    alt={`Vue du District de ${district.name}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-[var(--gray-900)] group-hover:text-[var(--cg-green-700)] transition">
                                    District de {district.name}
                                </h2>
                                <p className="flex items-center text-sm text-gray-600">
                                    <MapPin size={16} className="mr-2 text-[var(--cg-green-600)]" />
                                    {district.population}
                                </p>
                                <span className="mt-4 inline-flex items-center text-[var(--cg-green-700)] font-semibold text-sm">
                                    Voir la page <ChevronRight size={16} className="ml-1" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}