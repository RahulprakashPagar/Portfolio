'use client'
import s from './Sections.module.css'

const certs = [
  { name:'Oracle Cloud Infrastructure (OCI) — Data Science Professional', org:'Oracle' },
  { name:'Google Advanced Data Analytics Professional Certificate', org:'Google / Coursera' },
  { name:'Post Graduate Program in Data Science', org:'Purdue University' },
  { name:'Python for Data Science', org:'IBM' },
  { name:'Machine Learning for Data Science', org:'Simplilearn' },
  { name:'Data Visualisation Using Tableau', org:'Simplilearn' },
]

export default function Education() {
  return (
    <div className={s.wrapper} id="education">
      <div data-reveal className={s.card}>
        <span className={s.cardNum}>04</span>
        <div className={s.cardLabel}><span>Academic</span> · Education</div>
        <div className={s.cardTitle}>EDUCATION</div>

        <div className={s.eduGrid}>
          <div className={`${s.eduItem} ${s.primary}`}>
            <span className={`${s.eduBadge} ${s.grad}`}>★ Post Graduate</span>
            <div className={s.eduDeg}>MSc in Business Analytics</div>
            <div className={s.eduInst}>Dublin Business School</div>
            <div className={s.eduYr}>Sep 2024 – Sep 2025 · Dublin, Ireland</div>
            <span className={s.eduGrade}>2:1 Distinction</span>
            <div className={s.eduModules}>Applied Statistics &amp; Machine Learning · Data Mining · Financial Analytics · Business Intelligence &amp; Data Visualisation (Power BI, Tableau) · Python &amp; SQL · Project Management · Requirements Analysis · Business Strategy</div>
          </div>
          <div className={s.eduItem}>
            <span className={`${s.eduBadge} ${s.ug}`}>Undergraduate</span>
            <div className={s.eduDeg}>Bachelor of Engineering</div>
            <div className={s.eduInst}>Savitribai Phule Pune University</div>
            <div className={s.eduYr}>Jun 2011 – Jun 2015 · Pune, India</div>
            <span className={s.eduGrade}>First Class Honours</span>
            <div className={s.eduModules}>Core engineering fundamentals with strong mathematics, statistics, and systems design foundation — underpinning all subsequent analytical and ML work.</div>
          </div>
        </div>

        <div className={s.certsTitle}>Certifications</div>
        <div className={s.certsGrid}>
          {certs.map(c => (
            <div key={c.name} className={s.certItem}>
              <div className={s.certDot} />
              <div>
                <div className={s.certName}>{c.name}</div>
                <div className={s.certOrg}>{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
