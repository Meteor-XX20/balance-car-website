import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import type { Product } from '../../data/config'
import './IntroCard.css'

interface Props {
  product: Product
  index?: number
}

/**
 * 内容介绍卡片
 * 展示单个产品的背景、硬件组成、工作原理、功能特点四大模块
 * 每个子模块通过滚动动画依次显示
 */
export default function IntroCard({ product, index = 1 }: Props) {
  const [ref1, vis1] = useScrollAnimation()
  const [ref2, vis2] = useScrollAnimation()
  const [ref3, vis3] = useScrollAnimation()
  const [ref4, vis4] = useScrollAnimation()

  return (
    <div className="introCard scroll-fade visible">
      {/* 产品简介 */}
      <div ref={ref1} className={`scroll-fade${vis1 ? ' visible' : ''}`}>
        <p className="productIntro">{product.intro}</p>
      </div>

      {/* 模块1：项目背景 */}
      <div ref={ref2} className={`scroll-fade${vis2 ? ' visible' : ''}`}>
        <h3 className="subTitle">📋 项目背景</h3>
        <p className="subContent">{product.background}</p>
      </div>

      {/* 模块2：硬件组成（引用 HardwareFlipCard 在此展示列表） */}
      <div ref={ref3} className={`scroll-fade${vis3 ? ' visible' : ''}`}>
        <h3 className="subTitle">🔧 硬件组成</h3>
        <p className="subContent">
          {product.hardware.map(h => h.name).join('、')}
        </p>
      </div>

      {/* 模块3：工作原理 */}
      <div ref={ref4} className={`scroll-fade${vis4 ? ' visible' : ''}`}>
        <h3 className="subTitle">⚡ 工作原理</h3>
        <p className="subContent">{product.principle}</p>
      </div>
    </div>
  )
}
