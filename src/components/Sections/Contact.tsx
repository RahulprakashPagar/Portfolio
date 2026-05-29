'use client'
import s from './Sections.module.css'

export default function Contact() {
  return (
    <div className={s.wrapper} id="contact">

      <div className={s.contactCard}>
        {/* Left */}
        <div>
          <div className={s.contactTagline}>Let&apos;s work together</div>
          <div className={s.contactHeadline}>
            Got a project<br />in <em>mind?</em>
          </div>
          <div className={s.contactSub}>
            I&apos;m currently open to new <strong>Data Analyst, BI Developer, Analytics Engineer</strong>, and Healthcare IT / FinTech roles in Dublin and remote. Let&apos;s build something meaningful with data.
          </div>
        </div>

        {/* Right */}
        <div>
          <div className={s.contactItems}>
            {[
              { icon:'✉', label:'Email',    value:'rahulpagar423@gmail.com',          href:'mailto:rahulpagar423@gmail.com' },
              { icon:'in', label:'LinkedIn', value:'linkedin.com/in/rahul-pagar1993',  href:'https://linkedin.com/in/rahul-pagar1993' },
              { icon:'⌥', label:'GitHub',   value:'github.com/RahulprakashPagar',     href:'https://github.com/RahulprakashPagar' },
              { icon:'📍', label:'Location', value:'Dublin, Ireland · +353 089 419 5898', href:'#' },
            ].map(ci => (
              <a key={ci.label} href={ci.href} target={ci.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <div className={s.ci}>
                  <div className={s.ciIcon}>{ci.icon}</div>
                  <div>
                    <div className={s.ciLabel}>{ci.label}</div>
                    <div className={s.ciValue}>{ci.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className={s.contactCta}>
            <a className={s.cctaP} href="mailto:rahulpagar423@gmail.com">✉&nbsp; Send Email</a>
            <a className={s.cctaS} href="https://linkedin.com/in/rahul-pagar1993" target="_blank" rel="noopener noreferrer">in&nbsp; View LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={s.footer}>
        <div className={s.footerL}>Rahul <span>Pagar</span> · Senior Data Analyst · Dublin, Ireland</div>
        <div className={s.footerR}>rahulpagar423@gmail.com · github.com/RahulprakashPagar · © 2025</div>
      </div>

    </div>
  )
}
