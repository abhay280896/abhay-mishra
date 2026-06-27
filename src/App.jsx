import { useState } from 'react'

const skills = {
  'Languages / Frameworks': ['JavaScript', 'HTML', 'CSS', 'Next.js'],
  Tools: ['Node.js', 'NPM', 'Yarn', 'Vite', 'Webpack', 'Git', 'Jira Agile', 'AWS', 'ChatGPT', 'Claude'],
  Libraries: [
    'React.js',
    'Redux',
    'Redux Toolkit',
    'Material UI',
    'Bootstrap',
    'Tailwind CSS',
    'Styled Components',
    'React Hook Form',
    'Formik',
    'Ionic',
    'Capacitor',
  ],
  'Soft Skills': [
    'Excellent Communication',
    'Troubleshooting',
    'Team Management',
    'Leadership',
  ],
}

const highlights = [
  'Frontend developer with 5 years of experience building scalable enterprise web applications.',
  'Strong in React ecosystems, reusable component systems, JSON-driven dynamic forms, and business workflow automation.',
  'Experienced in collaborating with product, backend, QA, and design teams to ship production-ready features.',
]

const resumeViewUrl =
  'https://docs.google.com/document/d/1hsjUNm-l-f36m2BJ3Cr8RCOhdbkro2Zwq5xcvc7F7bU/edit?tab=t.0'

const resumeDownloadUrl =
  'https://docs.google.com/document/d/1hsjUNm-l-f36m2BJ3Cr8RCOhdbkro2Zwq5xcvc7F7bU/export?format=pdf'

const profileImageSrc = '/myPic.png'

const experience = [
  {
    company: 'Rebel Foods',
    product: 'Spark (Material Management System)',
    role: 'Software Developer',
    duration: 'Jan 2025 - Present',
    points: [
      'Developed business-critical modules for finance, inventory, procurement, and store operations, replacing manual Excel-based workflows with scalable internal applications.',
      'Built Petty Cash, Single Edit MRD, Inventory Audit, and Goods Receipt Note modules to reduce manual effort and improve operational efficiency.',
      'Integrated centralized User Access Management with SSO and role-based access control to strengthen security and streamline user administration.',
      'Created reusable React components and shared frontend utilities to improve maintainability, consistency, and development speed.',
      'Collaborated with product managers, backend engineers, QA, and designers to deliver production-ready releases on schedule.',
    ],
  },
  {
    company: 'Core Integra',
    product: 'SBI Regional Rural Banks (RRB)',
    role: 'Software Developer',
    duration: 'Nov 2023 - Jan 2025',
    points: [
      'Led the frontend modernization of a legacy banking platform by migrating it from a traditional multi-page architecture to a React-based single-page application.',
      'Architected and delivered a reusable JSON-driven dynamic form framework supporting 1,000+ configurable forms with nested layouts, conditional rendering, validation rules, and reusable components.',
      'Reduced development effort and duplication by standardizing form generation patterns across banking workflows.',
      'Improved application scalability and consistency through a modular frontend architecture that was easier to maintain and extend.',
    ],
  },
  {
    company: 'Nimap',
    product: 'Alchemy (Godrej Properties)',
    role: 'Frontend Developer',
    duration: 'Dec 2022 - Aug 2023',
    points: [
      'Contributed to the development of an enterprise learning platform by building intuitive interfaces that supported employee learning and organizational upskilling initiatives.',
    ],
  },
  {
    company: 'Nimap',
    product: 'Collection',
    role: 'Frontend Developer',
    duration: 'Mar 2022 - Nov 2023',
    points: [
      'Built responsive and reusable frontend features for a finance collection application.',
      'Collaborated with senior developers to integrate REST APIs and deliver business requirements.',
      'Participated in code reviews, bug fixing, and performance improvements to ensure a reliable user experience.',
    ],
  },
  {
    company: 'Nimap',
    product: 'Nimap Talent Transformation System (NTTS)',
    role: 'Frontend Developer',
    duration: 'Aug 2021 - Feb 2023',
    points: [
      'Developed frontend interfaces for employee and admin portals used for hiring, resource allocation, bench utilization, client assignments, task management, and performance reviews.',
      'Built reusable React components and responsive interfaces to improve maintainability and speed up feature delivery.',
      'Integrated REST APIs, optimized performance, resolved production issues, and collaborated with backend, QA, and product teams for high-quality releases.',
    ],
  },
]

const stats = [
  { label: 'Years of experience', value: '5' },
  { label: 'Configurable forms delivered', value: '1000+' },
  { label: 'Primary focus', value: 'React & Frontend' },
  { label: 'Location', value: 'Mumbai, India' },
]

function App() {
  const [isProfileImageReady, setIsProfileImageReady] = useState(true)

  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">Abhay Mishra</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#resume">Resume</a>
            <a href="#education">Education</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Frontend Developer</span>
            <h1>
              I build modern, scalable web experiences for enterprise products.
            </h1>
            <p className="hero-text">
              I am a Mumbai-based software developer specializing in React, reusable component systems,
              workflow automation, and frontend architecture for high-impact business applications.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#experience">
                View Experience
              </a>
              <a className="button secondary" href="#skills">
                Explore Skills
              </a>
              <a className="button secondary" href={resumeDownloadUrl} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </div>
          </div>

          <aside className="hero-card profile-card">
            <div className="profile-photo-shell">
              <div className="profile-photo-surface">
                {isProfileImageReady ? (
                  <img
                    className="profile-photo"
                    src={profileImageSrc}
                    alt="Abhay Mishra"
                    onError={() => setIsProfileImageReady(false)}
                  />
                ) : (
                  <div className="profile-photo-fallback">
                    <span>Abhay Mishra</span>
                    <strong>Frontend Developer</strong>
                  </div>
                )}
              </div>
            </div>
            <span className="card-kicker">Quick Profile</span>
            <h2>React-focused frontend engineer with enterprise product experience.</h2>
            <p>
              Experienced in shipping secure, maintainable, and user-friendly applications across
              inventory systems, banking platforms, internal tools, and learning products.
            </p>
            <div className="meta-list">
              <div>
                <span>Currently</span>
                <strong>Software Developer at Rebel Foods</strong>
              </div>
              <div>
                <span>Specialties</span>
                <strong>React, Redux, Dynamic Forms, RBAC</strong>
              </div>
              <div>
                <span>Education</span>
                <strong>B.Sc. (IT), Mumbai University</strong>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading">
            <span>About</span>
            <h2>Professional summary</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              {highlights.map((item) => (
                <div className="highlight-row" key={item}>
                  <span className="highlight-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Technologies and strengths</h2>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([title, items]) => (
              <article className="skill-card" key={title}>
                <h3>{title}</h3>
                <div className="chip-group">
                  {items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Selected work journey</h2>
          </div>

          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.product}`}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <span className="timeline-duration">{job.duration}</span>
                      <h3>{job.role}</h3>
                      <p>
                        {job.company} | {job.product}
                      </p>
                    </div>
                  </div>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="resume">
          <div className="section-heading">
            <span>Resume</span>
            <h2>Download my resume</h2>
          </div>

          <div className="resume-card">
            <div className="resume-copy">
              <h3>For recruiters and hiring teams</h3>
              <p>
                You can view my latest resume online or download it directly as a PDF for job
                applications and profile review.
              </p>
            </div>

            <div className="resume-actions">
              <a className="button primary" href={resumeDownloadUrl} target="_blank" rel="noreferrer">
                Download PDF Resume
              </a>
              <a className="button secondary" href={resumeViewUrl} target="_blank" rel="noreferrer">
                Open Google Doc
              </a>
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <span>Education</span>
            <h2>Academic background</h2>
          </div>

          <div className="education-card">
            <h3>Mumbai University</h3>
            <p>B.Sc. (IT) | Mumbai, India</p>
            <span>May 2015 - May 2018</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h2>Let’s build meaningful products.</h2>
        <p>
          This portfolio highlights my experience in building modern frontend systems for enterprise
          and internal platforms.
        </p>
      </footer>
    </div>
  )
}

export default App
