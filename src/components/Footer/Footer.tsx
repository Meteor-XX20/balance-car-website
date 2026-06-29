import { footerData } from '../../data/config'
import './Footer.css'

/**
 * 页脚组件
 * 展示项目组信息、专业、联系方式等
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">🤖 {footerData.groupName}</div>

        <div className="footerInfo">
          <span>🏫 {footerData.university}</span>
          <span>📚 {footerData.major}</span>
          <span>📧 {footerData.email}</span>
        </div>

        <div className="footerDivider" />

        <p className="footerCopy">
          © {footerData.year} {footerData.groupName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
