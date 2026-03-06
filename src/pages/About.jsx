import { Link } from "react-router-dom";
export default function About() {
    return (
      <section className="about-page">
        <div className="about-grid">
  
          {/* LEFT CONTENT */}
          <div className="about-left">
  
            <h3 className="about-h">Experiences</h3>
  
            <div className="exp">
              <p className="year">2024 — Present</p>
              <div>
                <p className="org">KTH Royal Institute of Technology</p>
                <p className="role">MSc Human-Computer Interaction Design</p>
                <p className="desc">
                  Exploring human-AI interaction, accessibility design, and emerging
                  interface paradigms. Research interests include fatigue detection in
                  strength training, real-time biofeedback systems, and gamified
                  rehabilitation through HCI solutions.
                </p>
              </div>
            </div>
  
            <div className="exp">
              <p className="year">2018 — 2023</p>
              <div>
                <p className="org">vivo</p>
                <p className="role">Senior UI/UX Designer</p>
                <p className="desc">
                  Led end-to-end UX design for automotive HMI systems and cross-device
                  ecosystems. Built scalable design systems and interaction frameworks
                  across mobile, voice assistants, and smart home platforms serving
                  millions of users. Initiated accessibility features including AI
                  subtitles and assistive voice interaction for hearing-impaired users.
                </p>
              </div>
            </div>
  
            <div className="exp">
              <p className="year">2016 — 2018</p>
              <div>
                <p className="org">Tencent</p>
                <p className="role">UI Designer</p>
                <p className="desc">
                  Designed interfaces and visual systems for Tencent Cloud products and
                  developer conferences. Led redesign projects including the Shenzhen
                  Public Security Bureau website and created visual systems for
                  large-scale cloud computing events.
                </p>
              </div>
            </div>
  
            <div className="exp">
              <p className="year">2015 — 2016</p>
              <div>
                <p className="org">SCUD Group</p>
                <p className="role">Visual Designer</p>
                <p className="desc">
                  Developed brand systems and visual language for enterprise electronics
                  products. Led website and mobile application design, strengthening
                  product presentation and brand consistency.
                </p>
              </div>
            </div>
  
            <div className="exp">
              <p className="year">2014 — 2015</p>
              <div>
                <p className="org">BYD</p>
                <p className="role">Multimedia Designer</p>
                <p className="desc">
                  Produced multimedia communication materials for the Automotive
                  Electronics Division, including video, photography, and digital
                  campaigns supporting product promotion and internal communication.
                </p>
              </div>
            </div>
            {/* 添加 Bachelor 经历 */}
            <div className="exp">
              <p className="year">2010 — 2014</p>
              <div>
                <p className="org">Wuhan University of Technology</p>
                <p className="role">Bachelor of Information Engineering</p>
                <p className="desc">
                Built a strong technical foundation in signal processing, communication systems, and programming, which later informed my human-centered approach to designing accessible digital experiences.
                </p>
              </div>
            </div>
  
            {/* EXPERTISE */}
  
            <h3 className="about-h">Expertise</h3>
  
            <p className="desc about-list">
              UX & Product Design · Interaction Design · Design Systems · Accessibility
              Design · Human-Computer Interaction · AI-Driven Interfaces · Rapid
              Prototyping · Cross-device Ecosystems
            </p>
  
  
            {/* TOOLS */}
  
            <h3 className="about-h">Tools</h3>
  
            <p className="desc about-list">
              Figma · Sketch · Adobe Creative Suite · After Effects · Cinema 4D ·
              HTML / CSS / JavaScript Fundamentals
            </p>

            <h3 className="about-h">
            <Link to="/about/design-thinking">Workshops  </Link>
            </h3>
          <p className="desc about-list">
                A collaborative workshop exploring design thinking methods, rapid ideation,
                and problem framing in interdisciplinary teams.
          </p>
          </div>
  


          {/* RIGHT IMAGE */}
  
          <aside className="about-right">
            <div className="about-photo">
              <img src="/img/portrait.jpg" alt="Chi Chen" />
            </div>
          </aside>
  
        </div>
      </section>
    );
  }