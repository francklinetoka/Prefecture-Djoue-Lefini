// src/pages/admin/districts/DistrictsList.tsx
import AdminLayout from '../components/AdminLayout'

export default function DistrictsList() {
  const districts = ["Djoué", "Vindza", "Léfini", "Ngoma", "Mbanza-Ndounga"]

  return (
    <AdminLayout userType="admin">
      <div className="p-8">
        <h1 className="text-heading text-3xl mb-8">Districts du Département</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((d, i) => (
            <div key={i} className="bg-gray-900 border border-[var(--cg-green-700)] rounded-lg p-6 hover:border-[var(--cg-yellow-400)] transition">
              <h3 className="text-xl font-bold text-heading">{d}</h3>
              <p className="text-gray-400 mt-2">Chef-lieu : {d}</p>
              <div className="mt-4 flex gap-3">
                <button className="text-sm btn-primary">Modifier</button>
                <button className="text-sm bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded">Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}