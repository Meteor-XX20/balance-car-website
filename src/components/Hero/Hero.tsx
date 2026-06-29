import { heroData } from '../../data/config'
import './Hero.css'

/**
 * 首页展示区（Hero）
 * 全屏首屏，展示大标题、副标题、核心标语 + CTA 按钮
 * 背景：科技感图片 + 网格线 + 渐变光晕
 */
export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* 背景层 */}
      <div className="heroBg">
        <img src={heroData.bgImage} alt="" />
      </div>
      <div className="heroGrid" />

      {/* 内容 */}
      <div className="heroContent">
        <h1 className="heroTitle">{heroData.title}</h1>
        <p className="heroSubtitle">{heroData.subtitle}</p>
        <p className="heroTagline">{heroData.tagline}</p>
        <a href={heroData.ctaLink} className="ctaBtn">
          {heroData.ctaText}
        </a>
      </div>

      {/* 向下滚动提示 */}
      <div className="scrollHint">
        <span>向下滚动</span>
        <span className="scrollArrow">↓</span>
      </div>
    </section>
  )
}
