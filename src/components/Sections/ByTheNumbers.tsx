'use client'
import s from './Sections.module.css'

const stats = [
  { val:'5', sup:'+',  label:'Years enterprise\nexperience' },
  { val:'30', sup:'%', label:'Reporting efficiency\nimprovement (Škoda VW)' },
  { val:'40', sup:'%', label:'SQL query runtime\nreduction delivered' },
  { val:'24', sup:'%', label:'Early issue detection\naccuracy improvement' },
]

export default function ByTheNumbers() {
  return (
    <div className={s.wrapper}>
      <div data-reveal className={s.card} style={{ padding:'44px 0' }}>
        <div style={{ padding:'0 48px 28px' }}>
          <span className={s.cardNum}>05</span>
          <div className={s.cardLabel}><span>Impact</span> · Metrics</div>
          <div className={s.cardTitle}>BY THE NUMBERS</div>
        </div>
        <div className={s.numsGrid}>
          {stats.map(st => (
            <div key={st.label} className={s.numItem}>
              <div className={s.numVal}>{st.val}<sup>{st.sup}</sup></div>
              <div className={s.numLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
