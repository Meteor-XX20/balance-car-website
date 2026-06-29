import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import type { HardwareItem } from '../../data/config'
import './HardwareFlipCard.css'

interface Props {
  hardware: HardwareItem[]
  onDetailClick: () => void
}

/**
 * 硬件参数翻转卡片
 * 正面：部件名称 + 图标
 * 背面：详细参数列表（3D 翻转）
 */
export default function HardwareFlipCard({ hardware, onDetailClick }: Props) {
  const [ref, visible] = useScrollAnimation()

  return (
    <div ref={ref} className={`scroll-fade${visible ? ' visible' : ''}`}>
      <div className="hardwareGrid">
        {hardware.map((h, i) => (
          <div key={h.name} className={`flipCard stagger-${i + 1}${visible ? '' : ''}`}>
            <div className="flipCardInner">
              {/* 正面 */}
              <div className="flipCardFront">
                <span className="cardIcon">{h.icon}</span>
                <span className="cardName">{h.name}</span>
                <span className="cardHint">悬停查看参数</span>
              </div>
              {/* 背面 */}
              <div className="flipCardBack">
                {h.specs.map(spec => (
                  <span key={spec} className="specItem">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="detailBtn" onClick={onDetailClick}>
          查看详情 →
        </button>
      </div>
    </div>
  )
}
