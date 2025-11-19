import { Mail, Phone, MapPin, Shield, Users } from 'lucide-react';

const prefectureData = {
  name: "Préfecture de Djoué-Léfini",
  prefet: "M. Albert NGOMA",
  titrePrefet: "Préfet Principal",
  description: "Siège de l’administration préfectorale chargé de la coordination des services publics sur l’ensemble du territoire de Djoué-Léfini.",
  contacts: {
    email: 'secretariat.prefet@djouelefini.cg',
    telephone: '+242 06 100 0000',
    adresse: 'Avenue de la République, Djoué-Léfini Centre – République du Congo',
  },
};

const districts = [
  { id: 'odziba', name: 'Odziba', prefet: 'Mme Jeanne MABIALA', email: 'prefecture.odziba@djouelefini.cg', tel: '+242 06 123 4567', adresse: 'Place de la Mairie, Odziba Centre' },
  { id: 'ngabe', name: 'Ngabé', prefet: 'M. Pierre NGOMA', email: 'prefecture.ngabe@djouelefini.cg', tel: '+242 06 987 6543', adresse: 'Quartier Administratif, Ngabé' },
  { id: 'ignie', name: 'Ignié', prefet: 'M. Luc BALOU', email: 'prefecture.ignie@djouelefini.cg', tel: '+242 06 555 1212', adresse: 'Centre Municipal, Ignié' },
  { id: 'lemini', name: 'Lémini', prefet: 'M. Thomas OKOKO', email: 'prefecture.lemini@djouelefini.cg', tel: '+242 06 200 8080', adresse: 'Port Fluvial, Lémini' },
  { id: 'ossiele', name: 'Ossiélé', prefet: 'Mme Céline BIKOKO', email: 'prefecture.ossiele@djouelefini.cg', tel: '+242 06 313 7070', adresse: 'Bureau Préfectoral, Ossiélé' },
  { id: 'vindza', name: 'Vindza', prefet: 'M. Raphaël MOUANDA', email: 'prefecture.vindza@djouelefini.cg', tel: '+242 06 444 5555', adresse: 'Centre-Ville, Vindza' },
  { id: 'kimba', name: 'Kimba', prefet: 'M. Jean-Paul ITSIOUA', email: 'prefecture.kimba@djouelefini.cg', tel: '+242 06 666 7777', adresse: 'Route Nationale 2, Kimba' },
  { id: 'mbanza', name: 'Mbanza-Ndounga', prefet: 'Mme Marie-Louise NGOUARI', email: 'prefecture.mbanza@djouelefini.cg', tel: '+242 06 888 9999', adresse: 'Quartier Résidentiel, Mbanza-Ndounga' },
];

const section1 = districts.slice(0, 3);
const section2 = districts.slice(3, 6);
const section3 = districts.slice(6, 8);

const DistrictCard = ({ district }: { district: any }) => (
  <div className="w-full max-w-sm bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[var(--cg-green-700)] transition-all duration-300">
    <div className="bg-[var(--cg-green-800)] text-white py-5 text-center">
      <h3 className="text-xl font-bold">District de {district.name}</h3>
    </div>
    <div className="p-8 space-y-6 text-center">
      <div>
        <p className="font-bold text-[var(--cg-green-800)] text-lg">{district.prefet}</p>
        <p className="text-sm text-[var(--cg-yellow-600)] font-semibold">Sous-Préfet(e)</p>
      </div>
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex items-center justify-center gap-3">
          <Mail size={16} className="text-[var(--cg-green-600)]" />
          <span>{district.email}</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Phone size={16} className="text-[var(--cg-green-600)]" />
          <span>{district.tel}</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <MapPin size={16} className="text-[var(--cg-green-600)]" />
          <span className="text-xs">{district.adresse}</span>
        </div>
      </div>
      <a
        href={`/districts/${district.id}`}
        className="inline-block px-8 py-3 bg-[var(--cg-green-700)] text-white font-bold rounded-lg hover:bg-[var(--cg-green-600)] transition"
      >
        Voir le district →
      </a>
    </div>
  </div>
);

export default function Contact() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* SIÈGE PRÉFECTORAL */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl border-t-8 border-[var(--cg-green-700)] overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--cg-green-800)] to-[var(--cg-green-700)] text-white py-12 text-center">
              <Shield size={64} className="mx-auto mb-4 text-[var(--cg-yellow-400)]" />
              <h2 className="text-4xl font-extrabold">Préfecture de Djoué-Léfini</h2>
              <p className="text-xl opacity-90 mt-2">Siège Principal – Département du Pool</p>
            </div>
            <div className="p-10 lg:p-14">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-[var(--cg-green-800)]">M. Albert NGOMA</p>
                  <p className="text-xl font-semibold text-[var(--cg-yellow-600)] mt-1">Préfet Principal</p>
                  <p className="mt-8 text-gray-700 leading-relaxed">{prefectureData.description}</p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Mail size={40} className="mx-auto mb-4 text-[var(--cg-green-700)]" />
                    <p className="text-xs uppercase tracking-wider font-bold text-gray-600">Email</p>
                    <a href={`mailto:${prefectureData.contacts.email}`} className="block mt-2 text-[var(--cg-green-800)] font-bold hover:underline">
                      {prefectureData.contacts.email}
                    </a>
                  </div>
                  <div className="text-center">
                    <Phone size={40} className="mx-auto mb-4 text-[var(--cg-green-700)]" />
                    <p className="text-xs uppercase tracking-wider font-bold text-gray-600">Téléphone</p>
                    <p className="mt-2 text-[var(--cg-green-800)] font-bold">{prefectureData.contacts.telephone}</p>
                  </div>
                  <div className="text-center">
                    <MapPin size={40} className="mx-auto mb-4 text-[var(--cg-green-700)]" />
                    <p className="text-xs uppercase tracking-wider font-bold text-gray-600">Adresse</p>
                    <p className="mt-2 text-[var(--cg-green-800)] font-bold text-sm leading-relaxed">
                      {prefectureData.contacts.adresse}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DISTRICTS */}
        <section className="space-y-20">
          <h2 className="text-center text-4xl font-extrabold text-[var(--cg-green-800)] flex items-center justify-center gap-4">
            <Users size={44} className="text-[var(--cg-yellow-400)]" />
            Districts Administratifs
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl">
              {section1.map(d => <DistrictCard key={d.id} district={d} />)}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl">
              {section2.map(d => <DistrictCard key={d.id} district={d} />)}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl">
              {section3.map(d => <DistrictCard key={d.id} district={d} />)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}