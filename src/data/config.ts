// ============================================================
// 数据配置文件 —— 集中管理所有文案、图片、参数
// 修改此文件即可更新整个网站的内容
// ============================================================

// ---- 类型导出 ----
export interface HardwareItem {
  name: string
  icon: string
  specs: string[]
}

export interface Feature {
  title: string
  desc: string
  icon: string
}

export interface Product {
  id: string
  name: string
  icon: string
  intro: string
  background: string
  hardware: HardwareItem[]
  principle: string
  features: Feature[]
}

// ---------- 导航栏 ----------
export const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '产品介绍', href: '#products' },
  { label: '交互体验', href: '#interactive' },
  { label: '成果展示', href: '#results' },
]

// ---------- 首页 Hero ----------
export const heroData = {
  title: '智能小车 · 创新驱动未来',
  subtitle: '八路寻迹小车 & 自平衡车',
  tagline: '从传感器到控制算法，两项课程项目完整展示',
  ctaText: '了解更多',
  ctaLink: '#products',
  // 科技感背景图（可替换为本地图片或自己的链接）
  bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
}

// ---------- 两大产品 Tab ----------
export const products = [
  {
    id: 'tracking',
    name: '八路寻迹小车',
    icon: '🚗',
    // 简介
    intro: '基于八路灰度传感器阵列的自动寻迹小车，能够精准识别地面轨迹并自主跟随行驶。项目涵盖传感器信号采集、PID 控制算法、电机驱动等核心模块。',
    // 背景
    background: '本项目为嵌入式系统课程综合设计。随着智能交通与自动驾驶技术的快速发展，自动寻迹作为基础导航能力，在物流搬运、生产线巡检、教育竞赛等场景中具有广泛应用。本作品通过八路传感器阵列实现高精度轨迹跟踪。',
    // 硬件组成
    hardware: [
      { name: 'STM32F103 主控', icon: '🧠', specs: ['ARM Cortex-M3', '72MHz 主频', '64KB SRAM', '12位ADC采样'] },
      { name: '八路灰度传感器', icon: '👁️', specs: ['TCRT5000 × 8', '5mm 检测距离', '模拟量输出', '阵列间距 12mm'] },
      { name: 'L298N 电机驱动', icon: '⚙️', specs: ['双H桥驱动', '峰值电流 2A', '逻辑电压 5V', 'PWM 调速'] },
      { name: '直流减速电机', icon: '🔧', specs: ['1:48 减速比', '额定 6V', '200 RPM', '双轮差速驱动'] },
    ],
    // 工作原理
    principle: '八路灰度传感器横向排列于车体前部，实时采集地面反射光强度，经 ADC 转换为 0~4095 数字量。主控通过加权平均算法计算轨迹偏移量，送入增量式 PID 控制器，输出 PWM 占空比至 L298N 驱动模块，实现左右电机差速转向，使小车始终沿黑色轨迹线行驶。',
    // 功能特点
    features: [
      { title: '高精度寻迹', desc: '八路传感器阵列覆盖更宽，支持大曲率弯道与交叉路口识别', icon: '🎯' },
      { title: 'PID 闭环控制', desc: '增量式 PID 算法，参数可调，响应迅速不震荡', icon: '📈' },
      { title: '多模式切换', desc: '支持循迹模式 / 避障模式一键切换，扩展性强', icon: '🔄' },
      { title: 'OLED 实时显示', desc: '0.96寸 OLED 屏实时展示传感器状态与车速信息', icon: '📟' },
    ],
  },
  {
    id: 'balance',
    name: '自平衡车',
    icon: '🛴',
    intro: '基于 MPU6050 六轴传感器与 PID 控制算法的双轮自平衡小车，利用动态平衡原理实现直立行驶。项目融合姿态解算、卡尔曼滤波、运动控制等关键技术。',
    background: '自平衡技术是移动机器人与个人代步工具的核心。本项目以 STM32 为主控，通过 MPU6050 实时获取姿态角，经互补滤波/卡尔曼滤波融合后送入串级 PID（角度环 + 速度环），精确控制电机输出，使车体始终保持直立平衡状态，并可通过蓝牙遥控移动。',
    hardware: [
      { name: 'STM32F103 主控', icon: '🧠', specs: ['ARM Cortex-M3', '72MHz 主频', 'I²C 总线通信', '定时器 PWM 输出'] },
      { name: 'MPU6050 六轴传感器', icon: '📐', specs: ['3轴陀螺仪 ±2000°/s', '3轴加速度 ±16g', 'DMP 姿态解算', 'I²C 400kHz'] },
      { name: 'DRV8833 电机驱动', icon: '⚡', specs: ['双路H桥', '1.5A 持续电流', '低导通电阻', '过温过流保护'] },
      { name: 'N20 编码电机', icon: '🔄', specs: ['1:30 减速比', '磁编码 12CPR', '额定 6V', '高响应速度'] },
    ],
    principle: 'MPU6050 以 200Hz 频率采集三轴角速度与加速度数据，通过互补滤波（陀螺仪积分 + 加速度计修正）解算实时倾角。控制系统采用串级 PID：外环角度 PID 根据倾角偏差计算目标角速度，内环角速度 PID 快速响应扰动。最终 PWM 输出驱动 DRV8833 调节电机扭矩，实现动态平衡。同时通过蓝牙 HC-05 接收遥控指令，叠加速度环控制实现行进与转向。',
    features: [
      { title: '动态平衡', desc: '毫秒级姿态解算，串级 PID 保证直立稳定不抖动', icon: '⚖️' },
      { title: '蓝牙遥控', desc: '手机 APP 蓝牙连接，支持前进/后退/转向遥控', icon: '📱' },
      { title: '卡尔曼滤波', desc: '卡尔曼滤波融合陀螺仪与加速度计数据，姿态角精度 ±0.5°', icon: '🔬' },
      { title: '低功耗设计', desc: '待机功耗 < 0.5W，18650 锂电池供电，续航 > 2小时', icon: '🔋' },
    ],
  },
]

// ---------- 交互操作区 ----------
export const interactiveData = {
  title: '交互体验',
  subtitle: '点击切换查看不同产品信息，悬停卡片查看详细参数',
  items: [
    { label: '传感器测试', desc: '查看八路传感器阵列在不同轨迹上的实时响应数据', icon: '📊' },
    { label: 'PID 调参演示', desc: '在线调节 P/I/D 参数，观察小车响应曲线变化', icon: '🎛️' },
    { label: '3D 模型展示', desc: '旋转缩放查看小车与平衡车的三维结构模型', icon: '🔍' },
    { label: '视频演示', desc: '观看实际运行视频，包含直线、弯道、爬坡等场景', icon: '🎬' },
  ],
}

// ---------- 成果展示区 ----------
export const resultData = {
  title: '成果展示',
  subtitle: '实测数据与性能指标',
  tracking: {
    label: '八路寻迹小车',
    metrics: [
      { label: '最大寻迹速度', value: '1.2 m/s', unit: '', icon: '⚡' },
      { label: '弯道最小半径', value: '15', unit: 'cm', icon: '🔄' },
      { label: '轨迹偏离误差', value: '±3', unit: 'mm', icon: '🎯' },
      { label: '循迹成功率', value: '98.5', unit: '%', icon: '✅' },
    ],
    // 简单的柱状数据（用于 CSS 图表渲染）
    chartData: [
      { label: '直线', value: 99.2 },
      { label: 'S 弯', value: 96.8 },
      { label: '直角弯', value: 95.1 },
      { label: '交叉路口', value: 93.4 },
      { label: '爬坡 15°', value: 88.7 },
    ],
  },
  balance: {
    label: '自平衡车',
    metrics: [
      { label: '稳态角度误差', value: '±0.5', unit: '°', icon: '⚖️' },
      { label: '抗扰动恢复', value: '300', unit: 'ms', icon: '⏱️' },
      { label: '最大爬坡角度', value: '20', unit: '°', icon: '⛰️' },
      { label: '续航时间', value: '2.5', unit: 'h', icon: '🔋' },
    ],
    chartData: [
      { label: '直立稳态', value: 0.3 },
      { label: '轻推恢复', value: 0.8 },
      { label: '中等扰动', value: 2.1 },
      { label: '剧烈冲击', value: 5.4 },
      { label: '载重 500g', value: 1.2 },
    ],
  },
}

// ---------- 页脚 ----------
export const footerData = {
  groupName: '智能小车项目组',
  major: '电子信息工程 / 自动化',
  email: 'project@example.com',
  university: 'XX 大学',
  year: 2025,
}

// ---------- 详情弹窗（Modal）数据 ----------
export const detailData = {
  tracking: {
    title: '八路寻迹小车 — 技术详解',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    description: `八路寻迹小车采用 STM32F103C8T6 作为主控芯片，前部搭载 8 个 TCRT5000 红外反射式传感器，以 12mm 间距横向排列，形成 96mm 宽的检测阵列。

传感器通过 ADC 多通道扫描方式，以 1kHz 采样率采集各路模拟电压值（0~3.3V，对应 0~4095 数字量）。主控采用加权平均法计算轨迹中心偏移量：
  offset = Σ(i × val_i) / Σ(val_i) - center

将 offset 送入增量式 PID 控制器：
  Δu = Kp × (e_k - e_{k-1}) + Ki × e_k + Kd × (e_k - 2e_{k-1} + e_{k-2})

最终输出两路 PWM 信号至 L298N，通过差速实现转向。整机采用 7.4V 锂电池供电，续航约 1.5 小时。`,
  },
  balance: {
    title: '自平衡车 — 技术详解',
    image: 'https://images.unsplash.com/photo-1598986647860-2a1f5a096f0b?w=800&q=80',
    description: `自平衡车以 STM32F103C8T6 为核心，搭载 MPU6050 六轴传感器（3轴陀螺仪 + 3轴加速度计），通过 I²C 总线以 400kHz 速率通信。

姿态解算采用互补滤波算法：
  angle = 0.98 × (angle + gyro × dt) + 0.02 × accel_angle

控制系统采用串级 PID 结构：
  外环（角度环）：Target_Omega = Kp_angle × (θ_target - θ_current)
  内环（角速度环）：PWM = Kp_omega × (ω_target - ω_current) + Kd_omega × dω/dt

此外叠加速度环实现遥控行进。蓝牙 HC-05 模块接收手机指令，转换为目标速度与转向角速度。整机由两节 18650 锂电池供电（7.4V），经 LDO 稳压至 5V 与 3.3V 供各模块使用。`,
  },
}
