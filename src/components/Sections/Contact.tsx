'use client'

import s from './Sections.module.css'

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const contacts = [
  { Icon: EmailIcon,    label:'Email',    value:'rahulpagar423@gmail.com',         href:'mailto:rahulpagar423@gmail.com',                   color:'#F4A135' },
  { Icon: LinkedInIcon, label:'LinkedIn', value:'linkedin.com/in/rahul-pagar1993', href:'https://linkedin.com/in/rahul-pagar1993',           color:'#0A66C2' },
  { Icon: GitHubIcon,   label:'GitHub',   value:'github.com/RahulprakashPagar',    href:'https://github.com/RahulprakashPagar',             color:'#ffffff' },
  { Icon: LocationIcon, label:'Location', value:'Dublin, Ireland · +353 089 419 5898', href:'#',                                           color:'#4ade80' },
]

export default function Contact() {
  return (
    <div className={s.wrapper} id="contact">
      <div data-reveal className={s.contactCard}>
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
            {contacts.map(({ Icon, label, value, href, color }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <div className={s.ci}>
                  <div className={s.ciIcon} style={{ background: `${color}18`, borderColor: `${color}35`, color }}>
                    <Icon />
                  </div>
                  <div>
                    <div className={s.ciLabel}>{label}</div>
                    <div className={s.ciValue}>{value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className={s.contactCta}>
            <a className={s.cctaP} href="mailto:rahulpagar423@gmail.com">
              <EmailIcon /> Send Email
            </a>
            <a className={s.cctaS} href="https://linkedin.com/in/rahul-pagar1993" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
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
