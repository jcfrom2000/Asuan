# OverStream Therapy 溪流心理 - 网站 SEO 规范与实践手册
*(SEO Specification & Best Practices Manual)*

> **版本**：v1.0  
> **适用范围**：OverStream Therapy 官方双语网站（包含桌面端、移动端与未来扩展子页面）  
> **核心目标**：确保网站在 Google、Bing、百度等主流搜索引擎中获得最高权重、快速收录、精准本地化搜索（Local SEO）排名及最佳核心网页指标（Core Web Vitals）。

---

## 一、URL 架构与国际化多语言规范 (Multilingual & URL Architecture)

### 1. 禁用哈希锚点作为主路由 (Zero-Hash Architecture)
- **准则**：所有主页面严禁在 URL 中使用 `#`（例如禁止使用 `/#contact`）。
- **原因**：搜索引擎爬虫视 `#` 之后的内容为同一文档内的本地锚点，不会为哈希路由创建独立的搜索索引条目。
- **实施标准**：全面采用 HTML5 History API（`pushState` / `replaceState` / `popstate`），保持纯净路径。

### 2. 双语独立路径标准 (Sub-path Architecture)
Google 官方《多语言网站 SEO 指南》强制要求各语言必须具备独立、可唯一访问的 URL：
- **英文首页**：`/`
- **中文首页**：`/zh`
- **英文联系与初访**：`/contact`
- **中文联系与初访**：`/zh/contact`
- **未来业务扩展路径示范**：
  - 个人心理咨询：`/therapy/individual` 与 `/zh/therapy/individual`
  - 伴侣与家庭疗愈：`/therapy/couples` 与 `/zh/therapy/couples`
  - 认证性治疗：`/therapy/sex-therapy` 与 `/zh/therapy/sex-therapy`
  - 移民心理评估：`/evaluations/immigration` 与 `/zh/evaluations/immigration`

### 3. Google 官方 `hreflang` 双向对等配置
每一个页面头部必须双向声明语言互联关系，便于 Google 针对不同语言偏好的用户精准投放：
```html
<link rel="alternate" hreflang="en" href="https://overstreamtherapy.com/contact" />
<link rel="alternate" hreflang="zh" href="https://overstreamtherapy.com/zh/contact" />
<link rel="alternate" hreflang="x-default" href="https://overstreamtherapy.com/contact" />
<link rel="canonical" href="https://overstreamtherapy.com/contact" />
```

---

## 二、图片 SEO 专项规范 (Image SEO & Core Web Vitals)

图片对于心理诊所网站至关重要：既要传递温润、安全、治愈的视觉感受，又不能破坏加载性能和搜索引擎理解。

### 1. Alt 文本（替代文本）规范
- **禁止行为**：
  - ❌ 禁止留空（空 `alt=""` 会让图片失去图片搜索排名机会）。
  - ❌ 禁止使用文件名代替（如 `alt="IMG_5210.jpg"` 或 `alt="photo"`）。
  - ❌ 禁止机械堆砌关键词（Keyword Stuffing）。
- **规范标准**：
  -  **语境+专业身份+地域**结合：
    - 中文范例：`alt="曹傲轩 (Jessica Cao), LCSW, LCPC, CST - 芝加哥多语种心理咨询师与认证性治疗师"`
    - 英文范例：`alt="Jessica Cao, LCSW, LCPC, CST - Licensed Psychotherapist and Certified Sex Therapist in Chicago"`
  -  **自然意境与治愈隐喻**：
    - 首屏背景：`alt="宁静自然的晨曦与舒缓林泉水流 - OverStream Therapy 溪流心理"`
    - 联系页花卉：`alt="纯净白罂粟花卉静物摄影 - OverStream Therapy 溪流心理 预约咨询与联络"`

### 2. 核心加载性能优化 (LCP & Lazy Loading)
- **首屏主图 (Hero / LCP 元素)**：
  - 必须添加：`fetchPriority="high"` 与 `decoding="async"`。
  - **严禁**对首屏 Hero 大图添加 `loading="lazy"`（会导致首屏渲染延迟，扣减 Google LCP 分数）。
- **首屏以下图片 (Below-the-fold)**：
  - 必须统一添加：`loading="lazy"` 与 `decoding="async"`。
  - 浏览器只有在用户滚动至可视区域附近时才加载，极大节省移动端带宽并提升初始页面交互速度（INP / TBT）。

### 3. 防止布局偏移 (Cumulative Layout Shift - CLS)
- **准则**：所有图片容器必须在 CSS 中显式声明宽高比（Aspect Ratio）。
- **实施**：采用 Tailwind 的 `aspect-[4/3]`、`aspect-[4/5]`、`aspect-square` 或指定具体固定容器高度，杜绝图片加载完成瞬间造成的页面跳动。

### 4. 图片格式与命名标准
- **现代图片格式**：推荐使用现代高效格式（`WebP` 或 `AVIF`），体积较传统 JPEG/PNG 可减少 30%–60%。
- **语义化文件名建议**：
  - 推荐：`jessica-cao-therapist-chicago.webp`、`overstream-therapy-office-monadnock.webp`
  - 避免：`screen_b6b95529.png`、`image-asset.jpg`

---

## 三、TDK 标题与元数据标准 (Title, Description, Keywords)

### 1. 页面标题 `<title>` 编写公式
`[核心服务/当前页面] | [诊所品牌名] – [执业城市/核心资质]`
- **字数**：英文字符 50–60 字符，中文字符 25–30 字（确保在 Google/百度搜索结果卡片中不被省略号截断）。
- **范例**：
  - 英文首页：`OverStream Therapy | Serene Integrative Psychotherapy & Counseling in Chicago`
  - 中文首页：`OverStream Therapy 溪流心理 | 芝加哥中文心理咨询与性治疗 • 曹傲轩`
  - 英文联系页：`Contact & 15-Minute Consultation | OverStream Therapy – Chicago Office`
  - 中文联系页：`联系方式与初访预约 | OverStream Therapy 溪流心理 – 芝加哥实体咨询室`

### 2. 页面描述 `<meta name="description">`
- **字数**：英文 140–160 字符，中文 70–85 字。
- **要素**：受众痛点 + 独特优势（多语种、性积极、创伤知情）+ 执照覆盖范围 + 明确行动号召（Call to Action）。

---

## 四、本地化搜索与结构化数据 (Local SEO & Schema.org)

Google 会在搜索结果右侧展示商家知识面板（Google Business Profile），结构化数据代码可直接助推本地收录：

### 1. NAP 一致性原则 (Name, Address, Phone)
在全网（官网各页面、Google Maps、Psychology Today、LinkedIn、小红书等）必须保证以下三要素一字不差：
- **Name**：OverStream Therapy PLLC (Jessica Cao, LCSW)
- **Address**：53 W Jackson Blvd, Suite 820, Chicago, IL 60604
- **Phone**：(312) 967-0117
- **Email**：care@overstreamtherapy.com

### 2. Schema.org JSON-LD 代码植入标准
在页面 `<head>` 中动态注入 `MedicalBusiness`、`Psychiatric` 及 `LocalBusiness` 类型，标明经纬度、执业人、毕业院校、支持语言及门诊时间（当前已在 `src/utils/seo.ts` 中全面实现）。

---

## 五、搜索引擎抓取控制文件 (Sitemap & Robots.txt)

1. **`/public/robots.txt`**：
   - 允许所有合规搜索引擎抓取主站资源。
   - 显式声明 `Sitemap: https://overstreamtherapy.com/sitemap.xml` 指引位置。
2. **`/public/sitemap.xml`**：
   - 列出所有公开路由及其最后更新时间戳（`<lastmod>`）。
   - 包含 `<xhtml:link rel="alternate" hreflang="...">` 语法，确保爬虫一次性读取全站双语映射结构。

---

## 六、日常运营与后续扩展自检清单 (Checklist)

新增或修改页面时，请逐项核对：
- [ ] URL 路径是否纯净（无 `#`，小写字母，单词间连字符 `-`）？
- [ ] 是否在 `translations.ts` 和 `seo.ts` 中同步配置了中英文专属标题与描述？
- [ ] 页面中的每个 `<img>` 是否拥有符合当前语言的语义化 `alt` 描述？
- [ ] 首屏关键大图是否配置了 `fetchPriority="high"`？下方其余图片是否为 `loading="lazy"`？
- [ ] 图片容器是否有防抖动宽高比限制（如 `aspect-[4/3]`）？
- [ ] `sitemap.xml` 中是否已收录该新增页面的中英文双语路径？
