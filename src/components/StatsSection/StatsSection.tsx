'use client'

import styles from './StatsSection.module.css'

const experience = [
  {
    period: 'Nov 2022 – Aug 2024',
    title: 'Senior Data Analyst',
    company: 'Škoda Auto Volkswagen India',
    desc: 'Power BI dashboards consolidating multi-system enterprise data, improving leadership reporting by an estimated 30%. SQL star-schema ETL pipelines cutting query runtimes by 40%. Predictive forecasting in Python for demand planning.',
  },
  {
    period: 'Oct 2021 – Nov 2022',
    title: 'Data Analyst',
    company: 'Caterpillar India',
    desc: 'Operational analytics identifying inefficiencies that contributed to 12% cost reduction. ML classification and regression models improving early issue detection accuracy by 24%. Root-cause analysis on historical quality datasets.',
  },
  {
    period: 'Oct 2019 – Oct 2021',
    title: 'Operations Analyst',
    company: 'Mahindra & Mahindra India',
    desc: 'Large-scale sensor and operational data pipelines in Python and SQL. KPI dashboards covering productivity, cycle time, quality and efficiency metrics. Cross-functional stakeholder reporting and requirements gathering.',
  },
  {
    period: 'Sep 2024 – Sep 2025',
    title: 'MSc Business Analytics',
    company: 'Dublin Business School',
    desc: 'Applied Statistics & Machine Learning · Data Mining · Financial Analytics · Business Intelligence & Data Visualisation (Power BI, Tableau) · Python & SQL · Project Management. Graduated 2:1.',
  },
]

const skills = [
  'Python', 'SQL', 'Power BI', 'Tableau', 'Machine Learning',
  'NLP', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
  'ETL Pipelines', 'Star Schema', 'DAX', 'MS SQL Server',
  'MySQL', 'Feature Engineering', 'XGBoost', 'Random Forest',
  'SVR', 'Time Series', 'GSAP', 'Three.js', 'Git', 'JIRA',
]

const certs = [
  'Oracle OCI – Data Science Professional',
  'Google Advanced Data Analytics',
  'IBM Python for Data Science',
  'Purdue PGP Data Science',
  'Data Visualisation – Tableau',
]

export default function StatsSection() {
  return (
    <section className={styles.section} id="stats">
      <div className={styles.inner}>

        <p className={styles.sectionLabel}>Experience & Education</p>

        <div className={styles.grid}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.cardPeriod}>{exp.period}</p>
              <h3 className={styles.cardTitle}>{exp.title}</h3>
              <p className={styles.cardCompany}>{exp.company}</p>
              <p className={styles.cardDesc}>{exp.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Technical Arsenal</h2>

          <div className={styles.skillsGrid}>
            {skills.map((s, i) => (
              <div key={i} className={styles.skillPill}>{s}</div>
            ))}
          </div>

          <div className={styles.certRow}>
            {certs.map((c, i) => (
              <div key={i} className={styles.cert}>
                <div className={styles.certDot} />
                {c}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
