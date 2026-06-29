import { useEffect, useRef, useState } from 'react'

/**
 * 滚动动画 Hook
 * 当元素进入视口时触发 visible 状态，配合 CSS 实现淡入上浮效果
 * @param threshold 元素露出多少比例时触发，默认 0.15
 * @returns [ref, visible] —— ref 绑定到目标元素，visible 表示是否可见
 */
export function useScrollAnimation(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  // 使用 null! 避免 React 18 RefObject<HTMLDivElement | null> 的类型兼容问题
  const ref = useRef<HTMLDivElement>(null!)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // 只触发一次，之后不再观察
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
