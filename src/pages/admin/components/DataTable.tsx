// src/pages/admin/components/DataTable.tsx
import styles from './DataTable.module.css'

interface Column {
  key: string
  header: string
  render?: (item: any) => React.ReactNode
}

interface DataTableProps {
  data: any[]
  columns: Column[]
  onEdit?: (item: any) => void
  onDelete?: (item: any) => void
}

export default function DataTable({ data, columns, onEdit, onDelete }: DataTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.header}</th>
            ))}
            {(onEdit || onDelete) && <th className={styles.actionsHeader}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map(col => (
                <td key={col.key}>
                  {col.render ? col.render(item) : item[col.key]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className={styles.actions}>
                  {onEdit && (
                    <button onClick={() => onEdit(item)} className={styles.edit}>
                      Modifier
                    </button>
                  )}
                  {onDelete && (
                    <button onClick={() => onDelete(item)} className={styles.delete}>
                      Supprimer
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}