# OverStream Therapy 溪流心理 - 界面排版与视觉设计规范手册
*(UI Design System & Typography Specification)*

> **版本**：v1.0  
> **适用范围**：OverStream Therapy 官方全站页面（首页、Contact、未来扩展的所有子页面）  
> **核心原则**：统一、克制、温润、呼吸感。所有页面必须严格继承同一套版式、字体大小与层级规则。

---

## 一、页面版块标题层级标准 (Section Header Hierarchy)

每个功能版块的标题区域，必须严格采用以下三层标准结构，**严禁添加额外的左右横线或私自放大标签字号**：

### 1. 版块小标 (Eyebrow / Category Tag)
用于指示当前版块的主题分类（如 *Our Collaborative Stance*, *Care Paths*, *Connect Directly*, *Physical Sanctuary & Practice Hours*）。

- **HTML 结构**：
  ```tsx
  <span
    className="font-label-md uppercase tracking-widest text-xs font-medium"
    style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
  >
    {eyebrowText}
  </span>
  ```
- **核心规约**：
  -  **字号与行高**：固定为 `text-xs`（12px），保持细腻与谦逊感。
  -  **字距**：`tracking-widest`（宽字距，营造禅意与呼吸感）。
  -  **大小写**：`uppercase`（英文全大写，中文自然排版）。
  -  **颜色**：统一暖陶土色 `#a35e3e` (`rgb(163, 94, 62)`)。
  - ❌ **严禁行为**：禁止在左右两侧添加装饰线条（如 `span.w-6.h-px`），禁止放大至 `text-sm` 或 `text-base`。

### 2. 版块主标题 (Section Heading `<h2>` / `<h1>`)
- **主标题 `<h2>`**（标准版块）：
  ```tsx
  <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
    {headingText}
  </h2>
  ```
  - **字体**：`font-headline-lg` (Playfair Display 衬线体)。
  - **字号**：移动端 `text-2xl`，平板 `sm:text-3xl`，桌面端 `md:text-4xl`。
  - **字重**：`font-normal`（400），避免粗重压迫感。
  - **颜色**：`text-primary` (`#192317` 深森林碳绿)。

### 3. 版块副标/导语段落 (Section Subheading `<p>`)
- **副标 `<p>`**：
  ```tsx
  <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
    {descriptionText}
  </p>
  ```
  - **字体**：`font-body-md` (Plus Jakarta Sans)。
  - **字号**：`text-sm sm:text-base`。
  - **行高**：`leading-relaxed`（舒适的 1.75 倍阅读行距）。
  - **文本容器**：居中版块限制最大宽度 `max-w-xl` 或 `max-w-2xl mx-auto`，避免单行过宽引起阅读疲劳。

---

## 二、页面外层容器与留白节奏 (Spacing & Layout Pacing)

1. **版块垂直内边距 (Vertical Padding)**：
   - 标准内容版块统一为：`py-16 md:py-24`。
   - 保证滚动时的节奏呼吸感，防止内容过度堆叠。
2. **水平容器边距 (Horizontal Margin)**：
   - 统一包裹于：`<div className="max-w-[1240px] mx-auto px-5 md:px-16">`。
3. **版块底部边框 (Hairline Divider)**：
   - 相邻浅色版块之间使用低对比度发丝分割线：`border-b border-surface-container` 或 `border-[#2e382b]/5`。

---

## 三、常用组件规范 (Components Standardization)

### 1. 操作按钮 (Action Buttons)
- **主操作按钮（深绿实底）**：
  `px-6 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs sm:text-sm font-medium transition-all shadow-xs`
- **次操作按钮（浅色胶囊）**：
  `px-6 py-2.5 rounded-full bg-surface-container text-primary hover:bg-surface-container-highest font-label-md text-xs sm:text-sm font-medium transition-colors border border-surface-container-high`

### 2. 卡片容器 (Card Containers)
- 底色统一为浅米燕麦色：`bg-surface-container-low`。
- 圆角统一：`rounded-xl` 或 `rounded-2xl`。
- 边框：`border border-surface-container/60`，悬浮时平滑变为暖沙色：`hover:border-secondary/40`。

---

## 四、新增页面自检审查清单 (Design Review Checklist)

新增任何页面（如关于页、服务详情页等）时，请核对：
- [ ] 版块小标（Eyebrow）是否为 `font-label-md uppercase tracking-widest text-xs font-medium` 且为暖陶土色？
- [ ] 是否去除了左右两侧的横线装饰？
- [ ] 主标题 `h2` 是否统一为 `font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight`？
- [ ] 导语段落是否统一为 `font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed`？
- [ ] 版块上下间距是否保持 `py-16 md:py-24`？
