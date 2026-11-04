# OverStream Therapy 在溪心理 - 全站图片 SEO 与静态资源管理规范
*(Image SEO & Static Asset Management Standards)*

> **版本**：v1.0 (Production Standard)  
> **适用范围**：OverStream Therapy 官方双语全站所有页面、组件、卡片、社交卡片及结构化数据  
> **核心目标**：最大化 Google 图像与本地搜索收录，杜绝死链与布局偏移（CLS = 0），保障移动端、平板端与桌面端流畅自适应体验。

---

## 一、静态资源目录结构与语义化命名准则 (Semantic Asset Naming)

### 1. 物理目录结构
所有全站图片资源统一收拢于 `/public/assets/images/`，严禁随意分散或存放于临时哈希目录中：
```
/public/assets/images/
├── overstream-therapy-chicago-jessica-cao-licensed-therapist-portrait.jpg
├── overstream-therapy-michigan-ann-arbor-sexual-health-training-program.jpg
├── overstream-therapy-chicago-dawn-river-landscape-hero.jpg
├── overstream-therapy-individual-counseling-botanical-study.jpg
├── overstream-therapy-couples-family-healing-botanical.jpg
├── overstream-therapy-sex-intimacy-therapy-dried-blossom.jpg
├── overstream-therapy-solution-focused-coaching-hellebore.jpg
├── overstream-therapy-immigration-psychological-evaluation-botanical.jpg
├── overstream-therapy-community-workshops-groups-jasmine.jpg
├── overstream-therapy-office-white-poppies-botanical-still-life.jpg
├── overstream-therapy-chicago-monadnock-office-location-map.jpg
├── overstream-therapy-solution-focused-sunrise-mountains.jpg
├── overstream-therapy-solution-focused-mindfulness-sunlight.jpg
├── overstream-therapy-solution-focused-empowerment-silhouette.jpg
├── overstream-therapy-solution-focused-visa-skyscrapers.jpg
├── overstream-therapy-solution-focused-consulting-office.jpg
├── overstream-therapy-immigration-statue-of-liberty.jpg
├── overstream-therapy-immigration-court-community-flag.jpg
└── overstream-therapy-immigration-love-thy-neighbor-rally.jpg
```

### 2. 语义化命名规范 (Strict Zero-Hash Standard)
- **严禁使用**：
  - 相机默认命名：`IMG_*.jpg`、`DSC_*.jpg`、`PHOTO_*.png`
  - 随机构建哈希：`image_68ac057b.png`、`imgi_13_Cao_professionl_photo_589c0cba.jpg`
  - 模糊无意义名称：`banner.jpg`、`pic1.png`、`test.jpg`
- **强制命名公式**：
  `[机构标识]-[地理位置/服务领域]-[主体描述].[扩展名]`
  - 全小写英文字母
  - 单词间仅使用半角短横线 `-`（连字符），严禁使用下划线 `_` 或空格
  - 范例：
    - 创始人肖像：`overstream-therapy-chicago-jessica-cao-licensed-therapist-portrait.jpg`
    - 密歇根大学培训现场：`overstream-therapy-michigan-ann-arbor-sexual-health-training-program.jpg`
    - 实体咨询室地图：`overstream-therapy-chicago-monadnock-office-location-map.jpg`

---

## 二、动态双语 Alt 文本规范 (Dynamic Bilingual Alt Formula)

### 1. 结构公式
全站所有 `<img>` 标签的 `alt` 属性必须随页面当前语言（`language === 'zh'` 或 `'en'`）动态输出，严格符合以下公式：

- **中文公式**：  
  `[活动/主题标题] - [类别] | [机构全称]`  
  *机构全称*：`OverStream Therapy 在溪心理`
  - 示例：`曹翱璇 (Jessica Cao) 临床心理治疗师 - 执业团队与背景 | OverStream Therapy 在溪心理`
  - 示例：`晨曦宁静林泉自然水景 - 诊所意象与疗愈氛围 | OverStream Therapy 在溪心理`
  - 示例：`安宁野花植物微距静物 - 个体心理咨询 | OverStream Therapy 在溪心理`

- **英文公式**：  
  `[Subject / Event Title] - [Category] | [Institution Full Name]`  
  *机构全称*：`OverStream Therapy`
  - 示例：`Jessica Cao, LCSW, LCPC, CST - Clinical Psychotherapist & Founder | OverStream Therapy`
  - 示例：`Tranquil Dawn Stream Landscape - Mindful Sanctuary & Atmosphere | OverStream Therapy`
  - 示例：`Botanical Queen Anne Lace Study - Individual Therapy | OverStream Therapy`

### 2. 国际化翻译同步 (Translations Sync)
每次替换图片或更新图注时，必须在 `src/locales/translations.ts`（及同步导出的 `src/data/translations.ts`）中同时维护 `en.imageAlts` 与 `zh.imageAlts`，绝不允许遗漏任一分支。

---

## 三、核心网页体验指标规范 (Core Web Vitals & Zero CLS)

### 1. 首屏关键图片 (LCP Hero Image)
- **属性配置**：
  - `fetchPriority="high"`
  - `decoding="async"`
  - **严禁**添加 `loading="lazy"`（首屏懒加载会导致 Google LCP 评估严重扣分）
- **加载策略**：确保在 DOM 树挂载时立即以最高网络优先级排队下载。

### 2. 首屏以下非关键图片 (Below-the-fold)
- **属性配置**：
  - `loading="lazy"`
  - `decoding="async"`
- 浏览器在视口临近时异步解码加载，最大化降低首屏网络阻塞与初始渲染时延（TBT/INP）。

### 3. 布局偏移为零 (CLS = 0)
- **准则**：所有图片容器必须在 CSS 中显式声明比例或固定尺寸，在图片加载完成前即预先占位。
- **推荐实用类**：
  - 肖像卡片：`aspect-[4/5]`
  - 服务卡片：`aspect-[4/3]`
  - 场景氛围图：`aspect-[4/5]` 或 `aspect-[16/9]`
  - 圆形头像：`w-64 h-64 sm:w-80 sm:h-80 rounded-full`
- 图片本体统一应用 `w-full h-full object-cover`，并针对人像调整对焦点（如 `object-[50%_15%]`），防止面部在响应式折叠中被裁切。

---

## 四、多端自适应与跨环境路径解析 (Responsive & Base URL)

### 1. 三端自适应响应矩阵
- **移动端（Mobile < 768px）**：单列铺满 (`grid-cols-1`)，边距 `px-5`，卡片充满容器，字体与图标同比例缩放。
- **平板端（Tablet 768px ~ 1024px）**：双列网格 (`md:grid-cols-2`)，保持间距一致 (`gap-6`)。
- **桌面端（Desktop > 1024px）**：三列网格 (`lg:grid-cols-3` 或针对版面的 `12-col` 分栏)，留白开阔，无视觉拉伸与空白塌陷。

### 2. GitHub Pages 与多级路径解析准则
针对在 GitHub Pages 部署（如仓库路径 `https://jcfrom2000.github.io/Asuan/`）与根域部署（`https://overstreamtherapy.com/`）间的兼容性痛点：
- **禁止硬编码绝对根路径**：避免直接书写 `src="/assets/..."`，在二级目录中会导致请求命中主域根路径导致 404。
- **统一使用 `getAssetUrl(path)` 工具函数**：
  ```ts
  import { getAssetUrl } from '../utils/assets';
  
  <img src={getAssetUrl('assets/images/overstream-therapy-chicago-jessica-cao-licensed-therapist-portrait.jpg')} ... />
  ```
  该函数动态结合 Vite 的 `import.meta.env.BASE_URL`，在任何子路径或二级仓库部署下均能 100% 正确寻址。

---

## 五、社交分享卡片与结构化数据对齐 (OpenGraph & Schema.org)

1. **`index.html` 静态头部**：
   - 配置 `og:image` 指向高分辨率肖像/实体门诊图片：  
     `https://overstreamtherapy.com/assets/images/overstream-therapy-chicago-jessica-cao-licensed-therapist-portrait.jpg`
   - 配置 `og:image:alt` 与 `twitter:image:alt`。
2. **`src/utils/seo.ts` 动态注入**：
   - 在路由切换时，同步更新 `og:image` 与 `twitter:image`。
   - `Schema.org JSON-LD`（`MedicalBusiness` 与 `LocalBusiness`）内声明：
     - `image`: 语义化门诊与主理人图片。
     - `logo`: 高品质品牌标识。

---

## 六、日常变更自检清单 (Checklist)

- [ ] 图片文件名是否采用全小写连字符，且包含 `overstream-therapy-`、地点与明确主题？
- [ ] 页面中的 `<img>` 是否接入了 `getAssetUrl()`，避免 GitHub Pages 404 错误？
- [ ] 对应图片在 `src/locales/translations.ts` 的 `zh` 与 `en` 中是否均提供了符合公式的 `alt` 描述？
- [ ] 首屏主图是否设置了 `fetchPriority="high"`、`decoding="async"` 且没有 `loading="lazy"`？
- [ ] 其余图片是否均已声明 `loading="lazy"` 与 `decoding="async"`？
- [ ] 图片容器是否配置了固定的 `aspect-*` 宽高比类以实现 `CLS = 0`？
- [ ] 在手机端（单列）、平板端（双列）、桌面端（三列）测试均无拉伸变形与图文重叠？
