## 风味记忆 · 非遗美食档案馆（flavor-legacy-archive）

一个以 **中国非物质文化遗产美食** 为主题的纯前端单页应用（SPA），通过档案列表、技艺展示、传承人故事、互动体验、地图分布等模块，呈现非遗美食的文化与传承。

本项目采用 **React + Vite** 搭建，配合 **React Router** 实现多页面路由，使用 **Redux Toolkit + redux-persist** 管理全局状态，并结合 **Ant Design / lucide-react 等 UI 组件与图标库** 完成整体界面和交互。

---

## 项目特性概述

- **纯前端项目**：  
  无真实后端服务，所有数据请求均在前端完成，无需部署独立的后端进程。

- **Mock 模拟后端数据**：  
  使用 `msw`（Mock Service Worker）在浏览器层面拦截请求，模拟后端 API：
  - 开发模式下在 `src/index.jsx` 中通过 `enableMocking()` 启动 MSW；
  - `src/mocks/handlers.js` 中定义各类接口（如 banner、heritage、inheritor、map、quiz 等）的 mock 响应；
  - `src/services/api/*.js` 统一封装 axios 请求，前端代码以“真实 HTTP 调用”的方式使用这些接口，方便后续接入真正后端。

- **多页面路由与模块化页面**：  
  通过 `react-router-dom` 管理路由，在 `App.jsx` 中集中配置：
  - `/`：首页 `Home`
  - `/archive`：非遗档案列表 `ArchiveList`
  - `/archive/:id`：档案详情 `ArchiveDetail`
  - `/techniques`：技艺展示 `Techniques`
  - `/stories`：故事与传承 `Stories`
  - `/inheritors` / `/inheritors/:id`：传承人列表与详情
  - `/map`：分布地图 `MapPage`
  - `/interactive`：互动体验 `Interactive`
  - `/protection`：保护现状与行动 `Protection`
  - `/about`：关于项目 `About`
  - `*`：404 页面 `NotFound`

- **全局状态管理与持久化**：  
  - 使用 `@reduxjs/toolkit` 构建 `store`，并在 `App.jsx` 中通过 `Provider` 注入；
  - 借助 `redux-persist` 将部分状态（如评论、投票等）持久化到本地存储；
  - 在 `src/store/slices` 中划分 `commentsSlice`、`voteSlice` 等业务状态。

- **UI 与样式体系**：  
  - 使用 `Ant Design` 部分组件提升交互体验；
  - 使用 `tailwindcss + PostCSS + autoprefixer` 提供原子化样式和兼容性处理；
  - 在 `src/assets/css` 下为各页面与组件编写定制化样式（如 `Home.css`、`Archive.css`、`Detail.css` 等），实现主题化的非遗美食视觉风格。

- **数据与内容组织**：  
  - `src/assets/data` 下集中管理静态数据（banner、heritage、inheritor、map、quiz、story、technique、trivia 等），便于维护文案与扩展内容；
  - `src/assets/image` 存放与非遗美食相关的图片素材（如北京烤鸭、扬州炒饭、螺蛳粉、郫县豆瓣等）。

---

## 目录结构简要说明

- **根目录**
  - `index.html`：Vite 入口 HTML 模板
  - `package.json`：项目依赖与脚本配置
  - `vite.config.js`：Vite 打包与开发服务器配置
  - `tailwind.config.js` / `postcss.config.js`：Tailwind 与 PostCSS 配置
  - `技术总结文档.md` / `课程报告.md`：课程相关文档与技术总结

- **public/**
  - `index.html`：最终注入 React 应用的 HTML 模板
  - `mockServiceWorker.js`：MSW 生成的 Service Worker 文件
  - 其他静态资源（favicon、manifest、logo 等）

- **src/**
  - `index.jsx`：应用入口，负责 React 挂载与 MSW 启动
  - `App.jsx`：根组件，配置路由、布局（Header/Footer/Main）与 ScrollToTop
  - `assets/`
    - `css/`：页面与组件的样式文件
    - `data/`：各类静态数据源（banner、heritage、quiz 等）
    - `image/`：图片资源
  - `components/`：通用组件（如 `Header`、`Footer`、`Banner`、`Breadcrumb`、`Quiz` 等）
  - `pages/`：具体业务页面（Home、Archive、Detail、Interactive、MapPage 等）
  - `services/api/`：对各业务模块的 API 封装
  - `store/`：Redux store 与业务 slice 配置
  - `mocks/`：MSW 的 `browser.js` 与 `handlers.js`，定义 mock 接口

---

## 技术栈

- **框架与语言**
  - React 19
  - React DOM
  - React Router DOM

- **状态管理**
  - Redux Toolkit
  - React Redux
  - redux-persist

- **网络与 Mock**
  - axios
  - msw（Mock Service Worker）

- **UI 与样式**
  - Ant Design
  - @ant-design/icons
  - lucide-react
  - tailwindcss
  - PostCSS
  - autoprefixer

- **构建与开发**
  - Vite
  - Web Vitals（性能度量）

---

## 本地运行与构建

> 以下命令均在项目根目录执行。

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器（带 mock 接口）

```bash
npm run dev
```

默认会启动 Vite 开发服务器（通常为 `http://localhost:5173`，以终端输出为准）。  
在开发环境下，`src/index.jsx` 会自动执行 `enableMocking()`，加载 `msw` 并启动浏览器端的 Mock Service Worker，前端请求会被路由到 `src/mocks/handlers.js` 中定义的模拟接口。

### 3. 生产构建

```bash
npm run build
```

构建产物会输出到 `dist/` 目录，可部署到任意静态托管平台（如 Netlify、Vercel、静态服务器等）；项目本身无需后端环境即可运行。

### 4. 预览构建结果

```bash
npm run preview
```

Vite 会启动一个本地静态服务器预览 `dist` 构建结果。

---

## 项目工程与实践总结

- **前后端解耦与 Mock 驱动开发**  
  - 通过 `msw` 在浏览器层拦截接口，模拟真实后端请求与响应格式，实现前端与后端的解耦；
  - API 层使用统一的 `services/api` 封装 axios 调用，确保后续接入真实后端时仅需调整请求地址与少量逻辑。

- **模块化与可维护性**  
  - 按“页面（pages）—组件（components）—数据（assets/data）—接口（services/api）—状态（store）”进行分层组织；
  - 路由集中注册、样式按页面拆分，使得后期维护、功能扩展和重构更加清晰。

- **状态与交互设计**  
  - 使用 Redux Toolkit 划分业务 slice，如评论、投票等，与 UI 组件解耦；
  - redux-persist 提升用户体验，使部分操作可以在刷新后保留；
  - 配合 Ant Design 与 Tailwind 的组合，实现了较为现代的 UI 与交互体验。

- **前端工程化与性能考虑**  
  - 使用 Vite 提供的开发体验与构建优化，热更新迅速；
  - 引入 Web Vitals 方便后续对性能指标进行监控和优化；
  - 资源与数据按模块拆分，有利于后续的按需加载与性能优化实践。

---

## 时间信息

- **项目 README 创建时间**：2025-12-17  


