// src/pages/admin/utilisateurs/AdminsList.tsx
import AdminLayout from '../components/AdminLayout'
import { Ban, UserCheck } from 'lucide-react'

export default function AdminsList() {
  const admins = [
    { id: 1, nom: "M. KOUALA", email: "kouala@prefecture.cg", role: "Admin", actif: true },
    { id: 2, nom: "Mme MBOUNGOU", email: "mboungou@prefecture.cg", role: "Rédacteur", actif: false },
  ]

  return (
    <AdminLayout userType="superadmin">
      <div className="p-8">
        <h1 className="text-heading text-3xl mb-8">Gestion des Administrateurs</h1>
        <button className="btn-yellow mb-6">+ Ajouter un administrateur</button>

        <div className="space-y-4">
          {admins.map(admin => (
            <div key={admin.id} className="bg-gray-900 rounded-lg p-6 flex items-center justify-between border border-gray-800">
              <div>
                <h3 className="font-bold text-xl">{admin.nom}</h3>
                <p className="text-gray-400">{admin.email} • {admin.role}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={admin.actif ? "text-green-400" : "text-red-500"}>
                  {admin.actif ? <UserCheck /> : <Ban />}
                </span>
                <button className="text-red-500 hover:text-red-400">Bloquer</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}