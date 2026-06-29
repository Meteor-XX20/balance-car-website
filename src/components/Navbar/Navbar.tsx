import { useState, useEffect } from 'react'
import { navLinks } from '../../data/config'
import './Navbar.css'

/**
 * 顶部导航栏组件
 * - 固定定位，滚动后加深背景
 * - 移动端汉堡菜单展开/收起
 * - 自动高亮当前 section 对应的导航项
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver 监听各 section 自动高亮
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navInner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <span className="logoIcon">🤖</span>
          <span>智能小车</span>
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span />
          <span />
          <span />
        </div>

        <ul className={`links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
