// src/components/HeroActualite.tsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
    '/images/actu_hero_1.jpg', 
    '/images/actu_hero_2.jpg',
    '/images/actu_hero_3.jpg',
];

export default function HeroActualite() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logique du carrousel automatique (inchangée)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 6000); 

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    return (
        // NOUVEAU CHANGEMENT DE HAUTEUR : h-64 par défaut, et h-80 sur grand écran.
        <section className="relative h-64 md:h-80 overflow-hidden"> 
            
            {/* Carrousel d'images de fond */}
            <div className="absolute inset-0">
                {carouselImages.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url(${src})` }}
                    >
                        {/* Overlay sombre pour améliorer la lisibilité du texte */}
                        <div className="absolute inset-0 bg-[var(--cg-green-900)] opacity-70" />
                    </div>
                ))}
            </div>

            {/* Contenu textuel superposé */}
            <div className="relative z-10 h-full flex flex-col justify-center text-white text-center">
                <div className="container">
                    {/* Ajustement de la taille du titre pour l'espace réduit */}
                    <h1 className="text-heading text-3xl md:text-4xl text-[var(--cg-yellow-400)] mb-2 drop-shadow-lg">
                        Toutes les Actualités
                    </h1>
                    {/* Ajustement de la taille du sous-titre */}
                    <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                        Restez informés des communications officielles, arrêtés et dossiers de la Préfecture de Djoué-Léfini.
                    </p>
                </div>
            </div>

            {/* Contrôles de navigation */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition z-20"
                aria-label="Image précédente"
            >
                <ChevronLeft size={24} className="text-white" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition z-20"
                aria-label="Image suivante"
            >
                <ChevronRight size={24} className="text-white" />
            </button>
            
        </section>
    );
}