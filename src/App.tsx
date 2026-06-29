import { useState, useMemo } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ProductTabs from './components/ProductTabs/ProductTabs'
import IntroCard from './components/IntroCard/IntroCard'
import HardwareFlipCard from './components/HardwareFlipCard/HardwareFlipCard'
import InteractivePanel from './components/InteractivePanel/InteractivePanel'
import ResultShowcase from './components/ResultShowcase/ResultShowcase'
import Modal from './components/Modal/Modal'
import Footer from './components/Footer/Footer'
import { products, detailData } from './data/config'
import './App.css'

/**
 * 应用根组件
 * 管理全局状态：当前选中产品、弹窗显隐
 * 组合所有子组件构成完整页面
 */
export default function App() {
  // 当前选中的产品 Tab
  const [activeTab, setActiveTab] = useState(products[0].id)
  const activeProduct = useMemo(
    () => products.find(p => p.id === activeTab)!,
    [activeTab]
  )

  // 详情弹窗状态
  const [modalOpen, setModalOpen] = useState(false)
  // 交互区弹窗提示
  const [interactiveMsg, setInteractiveMsg] = useState('')

  const openModal = () => setModalOpen(true)
  const closeModal = () => {
    setModalOpen(false)
    setInteractiveMsg('')
  }

  // 交互区点击
  const handleInteractiveClick = (label: string) => {
    setInteractiveMsg(label)
    setModalOpen(true)
  }

  // 构建交互区弹窗内容
  const interactiveModalContent = useMemo(() => {
    if (interactiveMsg === '传感器测试') {
      return {
        title: '传感器测试数据',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
        description:
          '八路传感器阵列在标准黑线测试轨迹上的实时响应数据：\n\n' +
          '传感器 S1-S8 在不同曲率弯道下的 ADC 采样值（0~4095），采样频率 1kHz。\n' +
          '数据展示白色背景与黑色轨迹反射率的明显差异（约 2000~3500 vs 200~800）。\n\n' +
          '交叉路口识别采用双阈值判断算法，误识别率 < 2%。',
      }
    }
    if (interactiveMsg === 'PID 调参演示') {
      return {
        title: 'PID 参数调节演示',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
        description:
          'PID 控制器参数在线调节界面（仿真）：\n\n' +
          'Kp（比例系数）：控制响应速度与超调量\n' +
          'Ki（积分系数）：消除稳态误差\n' +
          'Kd（微分系数）：抑制震荡，改善动态响应\n\n' +
          '推荐参数组合：Kp=1.8, Ki=0.04, Kd=12.0（经实验整定）',
      }
    }
    if (interactiveMsg === '3D 模型展示') {
      return {
        title: '3D 结构模型',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80',
        description:
          '小车与平衡车的三维结构模型展示。\n\n' +
          '八路寻迹小车：底盘尺寸 180mm × 120mm，前后轮轴距 140mm，传感器阵列距地高度 8mm。\n' +
          '自平衡车：底盘 140mm × 100mm，轮径 65mm，重心高度低于轮轴中心以确保自然不稳定状态。',
      }
    }
    if (interactiveMsg === '视频演示') {
      return {
        title: '实车运行视频',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
        description:
          '实际运行场景演示：\n\n' +
          '场景 1：直线加速 + 直角弯\n' +
          '场景 2：连续 S 弯追踪\n' +
          '场景 3：15° 斜坡爬坡\n' +
          '场景 4：交叉路口选择\n' +
          '场景 5：自平衡车抗扰动测试',
      }
    }
    // 默认返回当前产品的技术详解
    const d = activeTab === 'tracking' ? detailData.tracking : detailData.balance
    return { title: d.title, image: d.image, description: d.description }
  }, [interactiveMsg, activeTab])

  return (
    <div className="app">
      {/* 顶部导航栏 */}
      <Navbar />

      {/* 首页大屏 */}
      <Hero />

      {/* 内容介绍区 */}
      <section id="products" className="section">
        <h2 className="section-title">产品介绍</h2>
        <p className="section-subtitle">
          点击下方 Tab 切换查看不同产品的详细信息
        </p>

        {/* 产品切换 Tab */}
        <ProductTabs activeId={activeTab} onChange={setActiveTab} />

        {/* 产品介绍卡片 */}
        <IntroCard product={activeProduct} />

        {/* 硬件翻转卡片 + 查看详情按钮 */}
        <div style={{ marginTop: 32 }}>
          <HardwareFlipCard
            key={activeTab}
            hardware={activeProduct.hardware}
            onDetailClick={openModal}
          />
        </div>
      </section>

      {/* 交互操作区 */}
      <InteractivePanel onItemClick={handleInteractiveClick} />

      {/* 成果展示区 */}
      <ResultShowcase />

      {/* 页脚 */}
      <Footer />

      {/* 详情弹窗 */}
      {modalOpen && (
        <Modal
          title={interactiveModalContent.title}
          image={interactiveModalContent.image}
          description={interactiveModalContent.description}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
