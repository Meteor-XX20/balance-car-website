import { products } from '../../data/config'
import './ProductTabs.css'

interface Props {
  activeId: string
  onChange: (id: string) => void
}

/**
 * 产品切换 Tab 栏
 * 点击切换「寻迹小车 / 平衡车」两套产品内容
 */
export default function ProductTabs({ activeId, onChange }: Props) {
  return (
    <div className="tabs">
      {products.map(p => (
        <button
          key={p.id}
          className={`tabBtn${activeId === p.id ? ' active' : ''}`}
          onClick={() => onChange(p.id)}
        >
          <span>{p.icon}</span>
          <span>{p.name}</span>
        </button>
      ))}
    </div>
  )
}
