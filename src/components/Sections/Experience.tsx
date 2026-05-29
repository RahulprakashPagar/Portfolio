'use client'
import s from './Sections.module.css'

const jobs = [
  {
    period: 'Nov 2022 – Aug 2024',
    company: 'Škoda Auto Volkswagen India',
    location: 'Pune, India',
    role: 'Senior Data Analyst',
    bullets: [
      'Designed interactive Power BI dashboards consolidating data from multiple enterprise systems, improving leadership reporting accessibility and decision-making efficiency by an estimated <strong>30%</strong>.',
      'Built and optimised SQL-based data models (star schemas) and ETL workflows feeding executive reporting layers, reducing <strong>query runtimes by 40%</strong> and improving downstream reporting accuracy.',
      'Developed predictive forecasting models in Python (regression, time-series) for demand and resource planning, improving <strong>planning accuracy by 18%</strong>.',
      'Built supervised ML models to detect consumption anomalies and surface optimisation opportunities, contributing to <strong>7% cost savings</strong> on operational spend.',
      'Automated recurring analytics pipelines and collaborated cross-functionally to translate ambiguous business requirements into structured BI solutions delivered on time.',
    ],
    tags: ['Power BI','SQL','Python','Star Schema','ETL','Machine Learning','DAX'],
  },
  {
    period: 'Oct 2021 – Nov 2022',
    company: 'Caterpillar India',
    location: 'Pune, India',
    role: 'Data Analyst',
    bullets: [
      'Delivered targeted analytics use cases on operational, quality and event-level datasets, identifying inefficiencies that contributed to a <strong>12% cost reduction</strong>.',
      'Built Power BI dashboards tracking key operational KPIs, enabling leadership to monitor trends in real time.',
      'Performed trend, variance and root-cause analysis on historical datasets uncovering recurring failure patterns — resulting in a <strong>15% reduction in repeat issues</strong>.',
      'Developed predictive statistical models in Python to estimate failure probability and risk prioritisation using incident logs and quality datasets.',
      'Built and evaluated supervised ML models (classification and regression) improving <strong>early issue detection accuracy by 24%</strong>.',
    ],
    tags: ['Power BI','Python','XGBoost','Root Cause Analysis','KPI Dashboards','Classification'],
  },
  {
    period: 'Oct 2019 – Oct 2021',
    company: 'Mahindra & Mahindra India',
    location: 'Pune, India',
    role: 'Operations Analyst',
    bullets: [
      'Collected, cleaned and prepared <strong>large-scale operational and sensor datasets</strong> using Python and SQL, ensuring data accuracy, consistency and reliability for downstream analysis.',
      'Worked closely with cross-functional teams to gather requirements and translate business problems into structured analytical solutions and reporting deliverables.',
      'Applied descriptive and diagnostic analytics to explain performance variations and deviations, supporting data-driven course corrections.',
      'Built and maintained KPI dashboards covering <strong>productivity, cycle time, quality and efficiency</strong> metrics, surfacing trends for management review.',
    ],
    tags: ['Python','SQL','KPI Dashboards','Sensor Data','Stakeholder Mgmt','ETL'],
  },
]

export default function Experience() {
  return (
    <div className={s.wrapper} id="experience">
      <div className={s.card}>
        <span className={s.cardNum}>03</span>
        <div className={s.cardLabel}><span>Career</span> · Work History</div>
        <div className={s.cardTitle}>EXPERIENCE</div>
        <div className={s.expList}>
          {jobs.map((j, i) => (
            <div key={i} className={s.expItem}>
              <div className={s.expMeta}>
                <div className={s.expPeriod}>{j.period}</div>
                <div className={s.expCo}>{j.company}</div>
                <div className={s.expLoc}>{j.location}</div>
              </div>
              <div>
                <div className={s.expRole}>{j.role}</div>
                <ul className={s.expBullets}>
                  {j.bullets.map((b, bi) => (
                    <li key={bi} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
                <div className={s.expTags}>
                  {j.tags.map(t => <span key={t} className={s.etag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
