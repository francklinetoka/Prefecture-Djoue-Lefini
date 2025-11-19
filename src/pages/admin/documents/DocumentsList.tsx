// src/pages/admin/documents/DocumentsList.tsx
import AdminLayout from '../components/AdminLayout'
import { Plus, Download, Edit, Trash2 } from 'lucide-react'

export default function DocumentsList() {
  const documents = [
    { id: 1, titre: "Budget 2025", type: "PDF", date: "2025-11-10", taille: "2.4 Mo" },
    { id: 2, titre: "Arrêté n°2025/001", type: "PDF", date: "2025-11-05", taille: "890 Ko" },
  ]

  return (
    <AdminLayout userType="admin">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-heading text-3xl">Documents Officiels</h1>
          <button className="btn-yellow flex items-center gap-2">
            <Plus /> Ajouter un document
          </button>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[var(--cg-green-800)]">
              <tr>
                <th className="p-4">Titre</th>
                <th className="p-4">Type</th>
                <th className="p-4">Date</th>
                <th className="p-4">Taille</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc.id} className="border-b border-gray-800">
                  <td className="p-4">{doc.titre}</td>
                  <td className="p-4"><span className="text-red-400 font-mono">{doc.type}</span></td>
                  <td className="p-4">{doc.date}</td>
                  <td className="p-4 text-gray-400">{doc.taille}</td>
                  <td className="p-4 flex gap-3">
                    <button className="text-blue-400 hover:text-blue-300"><Download size={18} /></button>
                    <button className="text-yellow-400 hover:text-yellow-300"><Edit size={18} /></button>
                    <button className="text-red-500 hover:text-red-400"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}