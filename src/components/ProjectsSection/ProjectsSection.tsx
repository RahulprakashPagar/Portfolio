'use client'

import styles from './ProjectsSection.module.css'

const projects = [
  {
    num: '01',
    featured: true,
    type: 'ml',
    typeLabel: 'MSc Dissertation · ML',
    title: 'EV Charging Peak Load Prediction',
    desc: 'End-to-end ML forecasting system predicting station-level monthly peak electricity demand across an EV network using 10+ years of historical data and Open-Meteo weather API. Benchmarked Linear Regression, SVR, Random Forest, XGBoost, and Neural Networks with grid search cross-validation. Translated outputs into infrastructure planning insights for grid operators.',
    techs: ['Python', 'Scikit-learn', 'XGBoost', 'SVR', 'Pandas', 'Open-Meteo API', 'Jupyter'],
    href: 'https://github.com/RahulprakashPagar/EV-Charging-Peak-Load-Prediction-Using-Machine-Learning',
  },
  {
    num: '02',
    type: 'ml',
    typeLabel: 'Healthcare ML',
    title: 'Heart Attack Risk Prediction',
    desc: 'Supervised ML classification system predicting heart attack risk for insurance underwriting, prioritising recall to minimise false negatives. Logistic Regression, XGBoost, KNN. Business-oriented cost-benefit framework quantifying intervention costs, claim reduction potential and projected ROI.',
    techs: ['Python', 'Scikit-learn', 'XGBoost', 'Logistic Regression', 'Feature Engineering'],
    href: 'https://github.com/RahulprakashPagar/Heart-Attack-Risk-Prediction-Using-Machine-Learning',
  },
  {
    num: '03',
    type: 'analytics',
    typeLabel: 'FinTech ML',
    title: 'Bank Term Deposit Prediction',
    desc: 'Supervised ML predicting whether a bank customer will subscribe to a term deposit. Implements SMOTE for class balancing, feature encoding, and thorough model evaluation pipeline.',
    techs: ['Python', 'SMOTE', 'Classification', 'Feature Encoding', 'Pandas'],
    href: 'https://github.com/RahulprakashPagar/Bank-Term-Deposit-Prediction-ML',
  },
  {
    num: '04',
    type: 'powerbi',
    typeLabel: 'Power BI · Dashboard',
    title: 'Cybersecurity Threat Analysis Dashboard',
    desc: 'Executive-level Power BI dashboard monitoring cybersecurity incidents, vulnerabilities, and financial impact across business units. Star-schema data model with advanced DAX measures for incident frequency, severity scoring, and trend analysis.',
    techs: ['Power BI', 'DAX', 'Star Schema', 'Data Modeling', 'Risk Analytics'],
    href: 'https://github.com/RahulprakashPagar/Cybersecurity-Threat-Analysis-dashboard-using-PowerBi',
  },
  {
    num: '05',
    type: 'ml',
    typeLabel: 'Regression Study',
    title: 'Regularisation & Model Comparison',
    desc: 'Systematic regression model comparison for house price prediction: Linear, Lasso (L1), Ridge (L2), Elastic Net, SVR, and Random Forest. GridSearchCV hyperparameter tuning with bias-variance trade-off analysis across model families.',
    techs: ['Python', 'Scikit-learn', 'Lasso', 'Ridge', 'ElasticNet', 'GridSearchCV'],
    href: 'https://github.com/RahulprakashPagar/House-Price-Prediction-using-Regularized-Linear-Regression-SVR-and-Random-Forest',
  },
]

const typeStyleMap: Record<string, string> = {
  ml: styles.typeMl,
  powerbi: styles.typePowerbi,
  analytics: styles.typeAnalytics,
}

export default function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.sectionLabel}>GitHub Projects</p>
            <h2 className={styles.sectionTitle}>
              Selected <em>work</em>
            </h2>
          </div>
          <a
            href="https://github.com/RahulprakashPagar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View all 13 repos
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
            >
              {/* Arrow */}
              <svg className={styles.cardArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>

              <span className={styles.cardNum}>{p.num}</span>

              {p.featured && (
                <span className={styles.featuredBadge}>
                  ★ Dissertation
                </span>
              )}

              <span className={`${styles.cardType} ${typeStyleMap[p.type]}`}>
                {p.typeLabel}
              </span>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.cardTechs}>
                {p.techs.map((t, j) => (
                  <span key={j} className={styles.tech}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
