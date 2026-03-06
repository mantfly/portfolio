import { BrowserRouter, Routes, Route, Navigate,Outlet } from "react-router-dom";

import WorkDetail from "./pages/WorkDetail";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";

import Works from "./pages/Works";
import About from "./pages/About";
import Fun from "./pages/Fun";
import HMIDetail from "./pages/HMIDetail"; // 导入独立的HMI页面
import AIToolDetail from "./pages/AIToolDetail"
import HomeDetail from "./pages/HomeDetail"
import CloudDetail from "./pages/CloudDetail";
import WorkshopDesignThinking from "./pages/WorkshopDesignThinking";
import PlatformDetail from "./pages/PlatformDetail"
import SLDetail from "./pages/SLDetail"

function Layout() {

  const currentYear = new Date().getFullYear()

  return (
    <section className="hero hero-home">
      <div className="hero-main">

        <Hero />
        <Tabs />

        <Outlet />

        <footer className="site-footer">
          <p className="footer-copy">
            © {currentYear} Chi Chen.
          </p>

          <div className="footer-links">
            <a href="mailto:mantfly@icloud.com">Email</a>

            <a
              href="https://www.linkedin.com/in/chichen121"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="/public/img/cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </footer>

      </div>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      {/* 带 Layout 的路由组 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/works" />} />
        <Route path="works" element={<Works />} />
        <Route path="about" element={<About />} />
        <Route path="fun" element={<Fun />} />
      </Route>
      
      {/* 普通作品详情页 - 使用通用组件 */}
      <Route path="/works/sl" element={<WorkDetail />} />
      <Route path="/works/hmi" element={<HMIDetail />} />
      <Route path="/works/ai-accessibility" element={<AIToolDetail />} />
      <Route path="/works/smart-home" element={<HomeDetail />} />
      <Route path="/works/cloud-conference" element={<CloudDetail />} />
      <Route path="/works/cloud-platform" element={<PlatformDetail />} />
      <Route path="/works/accessible-transport" element={<SLDetail />} />
      <Route path="/about/design-thinking" element={<WorkshopDesignThinking />} />

    </Routes>
  );
}