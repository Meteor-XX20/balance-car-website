import { useEffect } from 'react'
import './Modal.css'

interface Props {
  title: string
  image: string
  description: string
  onClose: () => void
}

/**
 * 详情弹窗组件
 * 点击「查看详情」按钮后弹出，展示大图 + 详细技术说明
 * 按 Esc 键关闭，点击遮罩关闭
 */
export default function Modal({ title, image, description, onClose }: Props) {
  // Esc 键关闭
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // 阻止背景滚动
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="closeBtn" onClick={onClose} aria-label="关闭">
          ✕
        </button>

        <img className="modalImage" src={image} alt={title} />

        <h2 className="modalTitle">{title}</h2>

        <p className="modalDesc">{description}</p>
      </div>
    </div>
  )
}
