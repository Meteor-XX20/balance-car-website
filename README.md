[README.md](https://github.com/user-attachments/files/29584899/README.md)
# 八路寻迹小车与自平衡车产品介绍官网

## 项目简介

本项目是《专业认知实践》课程实验中的前端交互式动态网页，主题为"八路寻迹小车与自平衡车产品介绍官网"，用于课程答辩展示。

项目采用 React 18 + TypeScript + Vite 技术栈，使用原生 CSS 编写样式，实现了 4 种以上交互功能，拆分为 10 个独立 React 组件，并完整适配移动端。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.3.1 | UI 框架，组件化开发 |
| TypeScript | 5.6.3 | 类型检查，增强代码可靠性 |
| Vite | 6.0.5 | 开发服务器、构建打包 |
| CSS | 原生 | 全局样式变量、响应式布局、动画 |

无额外 UI 组件库依赖。

## 项目结构

```
balance-car-website/
├── index.html                          # HTML 入口
├── package.json                        # 依赖配置与脚本
├── tsconfig.json                       # TypeScript 配置
├── vite.config.ts                      # Vite 构建配置
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Pages 自动部署
└── src/
    ├── main.tsx                        # React 入口
    ├── App.tsx                         # 根组件（状态管理）
    ├── App.css
    ├── index.css                       # 全局样式 + CSS 变量
    ├── vite-env.d.ts
    ├── data/
    │   └── config.ts                   # ★ 数据配置文件（所有文案/参数）
    ├── hooks/
    │   └── useScrollAnimation.ts       # 滚动动画 Hook
    └── components/
        ├── Navbar/                     # 顶部导航栏
        ├── Hero/                       # 首页展示区
        ├── ProductTabs/                # 产品切换 Tab
        ├── IntroCard/                  # 内容介绍卡片
        ├── HardwareFlipCard/           # 硬件参数 3D 翻转卡片
        ├── InteractivePanel/           # 交互操作区
        ├── ResultShowcase/             # 结果展示区
        ├── Modal/                      # 详情弹窗
        └── Footer/                     # 页脚
```

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 1. 克隆仓库
git clone https://github.com/Meteor-XX20/balance-car-website.git
cd balance-car-website

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 浏览器访问
# http://localhost:5173/
```

### 构建生产版本

```bash
npm run build
# 产出在 dist/ 目录
```

## 页面功能

### 四大区域

1. **首页展示区（Hero）**：全屏首屏，科技感背景，渐变标题，CTA 跳转按钮
2. **内容介绍区**：两个产品板块（八路寻迹小车 / 自平衡车），含项目背景、硬件组成、工作原理、功能特点
3. **交互操作区**：4 张可点击交互卡片，触发弹窗展示不同内容
4. **结果展示区**：指标卡片 + 纯 CSS 柱状图，双栏对比展示

### 交互功能（4+ 种）

| 功能 | 说明 |
|------|------|
| Tab 切换 | 点击顶部 Tab 切换"寻迹小车 / 平衡车"两套内容 |
| 3D 卡片翻转 | 硬件参数卡片悬停 rotateY 180° 翻转，正面图标 + 背面参数 |
| 滚动动画 | 页面滚动时各板块依次淡入上浮（IntersectionObserver） |
| 弹窗展示 | 点击"查看详情"或交互卡片弹出 Modal（Esc / 点击遮罩关闭） |
| 悬停效果 | 按钮、卡片悬停时缩放 + 阴影 + 边框高亮 |

## 移动端适配

- Navbar → 汉堡菜单
- 硬件卡片网格：4 列 → 2 列 → 1 列
- 指标卡片：4 列 → 2 列 → 1 列
- 标题字号自动缩小
- 所有按钮在触屏下可正常点击

## 修改内容

修改页面文案、图片、参数只需编辑一个文件：

```
src/data/config.ts
```

修改全局配色只需编辑 CSS 变量：

```
src/index.css  →  :root { --color-accent: ... }
```

## 部署

推送 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages：

```
https://meteor-xx20.github.io/balance-car-website/
```

## 开发辅助

本项目使用 Hermes Agent（DeepSeek 模型）辅助完成需求拆解、组件生成、Bug 修复和部署配置。

## 作者

- 谢鑫 — 工程架构与项目集成
- 专业认知实践课程小组项目
