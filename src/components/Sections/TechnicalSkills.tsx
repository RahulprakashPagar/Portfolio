'use client'
import s from './Sections.module.css'

const groups = [
  { title:'Languages',           pills:[['Python',true],['SQL',true],['DAX',false],['M Query',false]] },
  { title:'Frameworks & Libs',   pills:[['Scikit-learn',true],['XGBoost',false],['Pandas',false],['NumPy',false],['Matplotlib',false],['TensorFlow',false]] },
  { title:'BI & Visualisation',  pills:[['Power BI',true],['Tableau',false],['DAX Calc',false],['Excel (Adv)',false]] },
  { title:'Databases',           pills:[['MS SQL Server',true],['MySQL',false],['Star Schema',false],['Snowflake',false]] },
  { title:'ML Techniques',       pills:[['SVR',false],['Random Forest',false],['NLP',false],['Time Series',false],['Classification',false]] },
  { title:'Data Engineering',    pills:[['ETL Pipelines',false],['Feature Eng.',false],['Data Cleaning',false],['API Integration',false]] },
  { title:'Tools & Workflow',    pills:[['Git',false],['JIRA',false],['Jupyter',false],['Google Colab',false],['VS Code',false]] },
  { title:'Soft Skills',         pills:[['Stakeholder Mgmt',false],['Requirements',false],['Agile / JIRA',false],['Storytelling',false]] },
]

export default function TechnicalSkills() {
  return (
    <div className={s.wrapper}>
      <div data-reveal className={s.card}>
        <span className={s.cardNum}>02</span>
        <div className={s.cardLabel}><span>About</span> · Arsenal</div>
        <div className={s.cardTitle}>TECHNICAL SKILLS</div>
        <div className={s.skillsGrid}>
          {groups.map(g => (
            <div key={g.title} className={s.skillGroup}>
              <div className={s.sgTitle}>{g.title}</div>
              <div className={s.sgPills}>
                {g.pills.map(([name, hot]) => (
                  <span key={name as string} className={`${s.spill} ${hot ? s.hot : ''}`}>{name as string}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
