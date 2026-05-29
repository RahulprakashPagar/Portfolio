'use client'
import s from './Sections.module.css'

const projects = [
  {
    num:'01', featured:true,
    badge:'diss', badgeLabel:'★ MSc Dissertation',
    type:'ml', typeLabel:'Machine Learning',
    title:'EV Charging Peak Load Prediction',
    desc:'End-to-end ML forecasting system predicting station-level monthly peak electricity demand across an EV network using 10+ years of historical data and Open-Meteo weather API. Benchmarked Linear Regression, SVR, Random Forest, XGBoost, and Neural Networks with grid search cross-validation. Outputs translated into grid infrastructure planning insights.',
    techs:['Python','Scikit-learn','XGBoost','SVR','Neural Networks','Open-Meteo API','Pandas'],
    href:'https://github.com/RahulprakashPagar/EV-Charging-Peak-Load-Prediction-Using-Machine-Learning',
  },
  {
    num:'02',
    type:'ml', typeLabel:'Healthcare ML',
    title:'Heart Attack Risk Prediction',
    desc:'Classification models predicting heart attack risk for insurance underwriting, prioritising recall to minimise false negatives. Includes a cost-benefit ROI framework comparing traditional vs ML-augmented screening.',
    techs:['Python','XGBoost','Logistic Reg.','KNN','Scikit-learn'],
    href:'https://github.com/RahulprakashPagar/Heart-Attack-Risk-Prediction-Using-Machine-Learning',
  },
  {
    num:'03',
    type:'bi', typeLabel:'Power BI',
    title:'Cybersecurity Threat Dashboard',
    desc:'Executive Power BI dashboard monitoring cybersecurity incidents, vulnerabilities, and financial impact across business units. Star-schema data model with advanced DAX measures for incident frequency and severity scoring.',
    techs:['Power BI','DAX','Star Schema','Data Modeling'],
    href:'https://github.com/RahulprakashPagar/Cybersecurity-Threat-Analysis-dashboard-using-PowerBi',
  },
  {
    num:'04',
    type:'ml', typeLabel:'Regression Study',
    title:'Regularisation & Model Comparison',
    desc:'Systematic regression benchmark for house price prediction — Linear, Lasso (L1), Ridge (L2), Elastic Net, SVR, Random Forest — with GridSearchCV tuning and bias-variance analysis across model families.',
    techs:['Python','Lasso/Ridge','ElasticNet','SVR','GridSearchCV'],
    href:'https://github.com/RahulprakashPagar/House-Price-Prediction-using-Regularized-Linear-Regression-SVR-and-Random-Forest',
  },
  {
    num:'05',
    type:'fin', typeLabel:'FinTech ML',
    title:'Bank Term Deposit Prediction',
    desc:'Supervised ML predicting customer subscription to term deposits. Implements SMOTE for class imbalance, full feature encoding pipeline, and thorough evaluation across multiple classifiers.',
    techs:['Python','SMOTE','Classification','Feature Encoding','Pandas'],
    href:'https://github.com/RahulprakashPagar/Bank-Term-Deposit-Prediction-ML',
  },
  {
    num:'06',
    type:'bi', typeLabel:'AI Tool',
    title:'Shortlist — AI CV Optimizer',
    desc:'Browser-local TF-IDF ATS scoring tool with Gemini 2.5 Flash-Lite AI rewriting backend, cover letter generation for 13 markets, interview Q&A generation, and PDF/DOCX export. Live at shortlistcvbuilder.netlify.app.',
    techs:['JavaScript','TF-IDF','Gemini API','Netlify Functions','PDF Export'],
    href:'https://shortlistcvbuilder.netlify.app',
  },
]

const typeClass: Record<string,string> = { ml:'ml', bi:'bi', fin:'fin' }

export default function Projects() {
  return (
    <div className={s.wrapper} id="projects">
      <div className={s.card}>
        <span className={s.cardNum}>06</span>
        <div className={s.cardLabel}><span>GitHub</span> · Selected Work</div>
        <div className={s.cardTitle}>PROJECTS</div>

        <div className={s.projGrid}>
          {projects.map(p => (
            <a
              key={p.num}
              className={`${s.pcard} ${p.featured ? s.featured : ''}`}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={s.pcArrow}>↗</span>
              <span className={s.pcNum}>{p.num}</span>
              {p.badge && (
                <span className={`${s.pcBadge} ${s[p.badge as keyof typeof s]}`}>{p.badgeLabel}</span>
              )}
              <span className={`${s.pcBadge} ${s[typeClass[p.type] as keyof typeof s]}`}>{p.typeLabel}</span>
              <div className={s.pcTitle}>{p.title}</div>
              <div className={s.pcDesc}>{p.desc}</div>
              <div className={s.pcTechs}>
                {p.techs.map(t => <span key={t} className={s.pt}>{t}</span>)}
              </div>
            </a>
          ))}
        </div>

        <a
          className={s.ghCta}
          href="https://github.com/RahulprakashPagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{opacity:0.6}}>
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Check remaining projects on GitHub &nbsp;<span className={s.ghArrow}>→</span>
        </a>
      </div>
    </div>
  )
}
