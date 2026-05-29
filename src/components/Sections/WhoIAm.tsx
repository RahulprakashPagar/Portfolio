'use client'
import s from './Sections.module.css'

export default function WhoIAm() {
  return (
    <div className={s.wrapper} id="about">
      <div className={s.card}>
        <span className={s.cardNum}>01</span>
        <div className={s.cardLabel}><span>About</span> · Profile</div>
        <div className={s.cardTitle}>WHO I AM</div>
        <div className={s.whoGrid}>
          <div className={s.whoText}>
            <p>I&apos;m a <strong>Senior Data Analyst</strong> with <em>5+ years</em> of enterprise experience transforming complex datasets into decisions that move the needle — across manufacturing, automotive, and now healthcare and fintech.</p>
            <p>My background spans <strong>end-to-end analytics delivery</strong>: from raw data pipelines and star-schema modelling to predictive ML systems and executive Power BI dashboards. I&apos;ve worked inside large-scale enterprise environments at <em>Škoda Auto Volkswagen</em>, <em>Caterpillar India</em>, and <em>Mahindra &amp; Mahindra</em>, consistently bridging the gap between technical complexity and business clarity.</p>
            <p>Currently based in Dublin, holding an <strong>MSc in Business Analytics (2:1)</strong> from Dublin Business School. Actively targeting roles in <em>Data Analytics, BI Development, Analytics Engineering</em>, and <em>Healthcare IT / FinTech</em>.</p>
            <div className={s.whoTags}>
              {['Full Stack Analytics','ML Engineering','BI Development','ETL Design','Data Storytelling','Stakeholder Comms'].map(t => (
                <span key={t} className={s.tag}>{t}</span>
              ))}
            </div>
          </div>
          <div className={s.whoHighlights}>
            {[
              { icon:'🏭', title:'Enterprise Background', desc:'3 large-scale enterprise employers across automotive and manufacturing — Škoda VW, Caterpillar India, M&M India.' },
              { icon:'🤖', title:'ML + BI Hybrid', desc:'Rare combination of deep BI expertise (Power BI, DAX, star schemas) with hands-on ML delivery (SVR, XGBoost, NLP).' },
              { icon:'🎓', title:'MSc Business Analytics', desc:'Dublin Business School, 2:1 — Applied Statistics, Data Mining, ML, Financial Analytics, Power BI & Tableau.' },
              { icon:'🌍', title:'Dublin-Based, Global Mindset', desc:'Originally from Pune, India. Working in Dublin — open to hybrid & remote roles across EMEA.' },
            ].map(h => (
              <div key={h.title} className={s.highlightItem}>
                <div className={s.hiIcon}>{h.icon}</div>
                <div><div className={s.hiTitle}>{h.title}</div><div className={s.hiDesc}>{h.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
