import { Link } from "react-router-dom";

export default function SLDetail() {
  return (
    <div className="sl-detail">
      {/* 返回按钮 */}
      <Link to="" className="hmi-back-button-fixed-white">
        Back
      </Link>
      
      <div className="sl-content">
        
        {/* 标题区 */}
        <div className="sl-header">
          <h1 className="sl-title">SL Accessible Public Transport</h1>
          <p className="sl-subtitle">KTH Royal Institute of Technology • 2025 • UX Research & Design</p>
        </div>

        {/* 项目简介 - 插入图片 */}
        <div className="sl-intro">
          Redesigning Stockholm's SL public transport system to improve accessibility for people with disabilities, based on the EU Accessibility Act and Swedish accessibility laws.
        </div>
        
        {/* 在简介后插视频 */}
        <div className="sl-video-container">
        <video 
            autoPlay
            loop
            muted
            playsInline
            className="sl-background-video"
        >
            <source src="/img/video/route.mp4" type="video/mp4" />
        </video>
        </div>


        {/* 关键问题 - 8个核心挑战 */}
        <section className="sl-section">
        <h2 className="sl-section-title">Research</h2>

                                         
          <div className="sl-inline-image">
            <img src="/img/sl/test.png" alt="User research findings" />
            <img src="/img/sl/discussion.png" alt="User research findings" />
            <img src="/img/sl/data.png" alt="User research findings" />
            <img src="/img/sl/journey.png" alt="User research findings" />


          </div>


          <h2 className="sl-section-title">Challenges</h2>

          <div className="sl-issues-grid">
            <div className="sl-issue-item">1. Improve Navigation in Stations</div>
            <div className="sl-issue-item">2. Manage Crowding & Boarding</div>
            <div className="sl-issue-item">3. Improve Display Readability</div>
            <div className="sl-issue-item">4. Improve Information Accessibility</div>
            <div className="sl-issue-item">5. Improve In-App Route Planning</div>
            <div className="sl-issue-item">6. Fix Issues with SL Apps</div>
            <div className="sl-issue-item">7. Better Handling of Delays</div>
            <div className="sl-issue-item">8. Improve Feedback & Resolution</div>
          </div>
          

        </section>


        {/* 设计解决方案 */}
        <section className="sl-section">
          <h2 className="sl-section-title">Key Solutions</h2>
          
          {/* 延迟信息 - 带图片 */}
          <div className="sl-solution-block">
            <h3 className="sl-solution-title">Delay Information</h3>
            <p className="sl-solution-desc">Community-based disruption updates with real-time visual information and large high-contrast signs.</p>
            <div className="sl-inline-image-small">
              <img src="/img/sl/screen.png" alt="Delay information concept" />
            </div>
          </div>

          {/* 地图功能 - 带图片 */}
          <div className="sl-solution-block">
            <h3 className="sl-solution-title">Map Functionality</h3>
            <p className="sl-solution-desc">Real-time vehicle location, interactive station finder, customizable information layers, and alternative route suggestions with accessibility icons.</p>
            <div className="sl-inline-image-small">
              <img src="/img/sl/map.png" alt="Map functionality concept" />
            </div>
          </div>

          {/* 车站信息 - 带图片 */}
          <div className="sl-solution-block">
            <h3 className="sl-solution-title">Station Information</h3>
            <p className="sl-solution-desc">Real-time occupancy data, accessibility exit information, stroller seat availability, and elevator/lift status.</p>
            <div className="sl-inline-image-small">
              <img src="/img/sl/sl.png" alt="Station information display" />
            </div>
          </div>

          {/* 实时更新 - 带图片 */}
          <div className="sl-solution-block">
            <h3 className="sl-solution-title">Real-Time User Updates</h3>
            <p className="sl-solution-desc">Live ticker updated by passengers and Trafikverket, with verified system ensuring reliable information.</p>
            <div className="sl-inline-image-small">
              <img src="/img/sl/realtime.png" alt="Real-time updates interface" />
            </div>
          </div>
        </section>

        {/* 无障碍功能 - 插入图片 */}
        <section className="sl-section">
          <h2 className="sl-section-title">Accessibility Features</h2>
          

          
          <ul className="sl-features-list">
            <li>Interactive & Informative Map in the SL app</li>
            <li>Clearer Information on Train Status</li>
            <li>Occupancy & Accessibility Information</li>
            <li>Convenient Wayfinding</li>
            <li>Real-time location tracking</li>
            <li>Interactive route selection</li>
            <li>Accessibility icons for wheelchair-friendly routes, elevators and lifts</li>
          </ul>
        </section>


        {/* 相关链接 */}
        <section className="sl-section">
          <h2 className="sl-section-title">Featured links:</h2>
          <ul className="sl-links-list">
            <li><a href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en" target="_blank" rel="noopener noreferrer">EU Accessibility Act</a></li>
            <li><a href="http://sl.se" target="_blank" rel="noopener noreferrer">SL Official Site</a></li>
          </ul>
        </section>

      </div>
    </div>
  );
}