import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { resultData } from '../../data/config'
import './ResultShowcase.css'

/**
 * 结果展示区
 * 双栏布局：分别展示两种产品的指标卡片 + CSS 柱状图
 * 每张卡片悬停有缩放+阴影效果
 */
export default function ResultShowcase() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="results" className="section">
      <h2 className="section-title">{resultData.title}</h2>
      <p className="section-subtitle">{resultData.subtitle}</p>

      <div ref={ref} className={`scroll-fade${visible ? ' visible' : ''}`}>
        <div className="compareRow">
          {/* 左栏：八路寻迹小车 */}
          <div className="compareCol">
            <h3 className="compareTitle">🚗 {resultData.tracking.label}</h3>
            <div className="metricsGrid">
              {resultData.tracking.metrics.map(m => (
                <div key={m.label} className="metricCard">
                  <span className="metricIcon">{m.icon}</span>
                  <div className="metricValue">
                    {m.value}
                    {m.unit && <span className="metricUnit">{m.unit}</span>}
                  </div>
                  <div className="metricLabel">{m.label}</div>
                </div>
              ))}
            </div>
            {/* CSS 柱状图 */}
            <div className="chartSection">
              <h4 className="chartTitle">不同场景循迹成功率 (%)</h4>
              <div className="chart">
                {resultData.tracking.chartData.map(d => (
                  <div key={d.label} className="chartBar">
                    <span className="barValue">{d.value}%</span>
                    <div className="barFill" style={{ height: `${d.value}%` }} />
                    <span className="barLabel">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右栏：自平衡车 */}
          <div className="compareCol">
            <h3 className="compareTitle">🛴 {resultData.balance.label}</h3>
            <div className="metricsGrid">
              {resultData.balance.metrics.map(m => (
                <div key={m.label} className="metricCard">
                  <span className="metricIcon">{m.icon}</span>
                  <div className="metricValue">
                    {m.value}
                    {m.unit && <span className="metricUnit">{m.unit}</span>}
                  </div>
                  <div className="metricLabel">{m.label}</div>
                </div>
              ))}
            </div>
            {/* 角度误差柱状图 */}
            <div className="chartSection">
              <h4 className="chartTitle">扰动后角度偏差 (°)</h4>
              <div className="chart">
                {resultData.balance.chartData.map(d => (
                  <div key={d.label} className="chartBar">
                    <span className="barValue">{d.value}°</span>
                    <div className="barFill" style={{ height: `${d.value / 5.4 * 100}%` }} />
                    <span className="barLabel">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
