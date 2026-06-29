import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { interactiveData } from '../../data/config'
import './InteractivePanel.css'

interface Props {
  onItemClick: (label: string) => void
}

/**
 * 交互操作区
 * 展示 4 个可点击的交互卡片，每个卡片悬停有缩放+阴影效果
 * 点击时触发回调，可配合 Modal 展示更多内容
 */
export default function InteractivePanel({ onItemClick }: Props) {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="interactive" className="section interactive">
      <h2 className="section-title">{interactiveData.title}</h2>
      <p className="section-subtitle">{interactiveData.subtitle}</p>

      <div ref={ref} className={`interactiveGrid${visible ? ' scroll-fade visible' : ' scroll-fade'}`}>
        {interactiveData.items.map((item, i) => (
          <div
            key={item.label}
            className={`interactiveCard stagger-${i + 1}`}
            onClick={() => onItemClick(item.label)}
          >
            <span className="interactiveIcon">{item.icon}</span>
            <h4 className="interactiveLabel">{item.label}</h4>
            <p className="interactiveDesc">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="tipText">点击上方卡片，查看详细技术参数与演示内容 ↑</p>
    </section>
  )
}
