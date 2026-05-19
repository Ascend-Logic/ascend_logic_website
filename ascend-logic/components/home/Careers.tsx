const careers = [
  { team: 'ENGINEERING', role: 'AIエンジニア', loc: 'Tokyo / Remote', type: 'Full-time' },
  {
    team: 'ENGINEERING',
    role: 'ソフトウェアエンジニア (Backend)',
    loc: 'Tokyo / Remote',
    type: 'Full-time',
  },
  { team: 'PRODUCT', role: 'プロダクトマネージャー', loc: 'Tokyo', type: 'Full-time' },
  { team: 'CONSULTING', role: 'AIコンサルタント', loc: 'Tokyo / Hybrid', type: 'Full-time' },
  { team: 'DESIGN', role: 'プロダクトデザイナー', loc: 'Tokyo / Remote', type: 'Full-time' },
]

export default function Careers() {
  return (
    <section className="al-section" id="careers">
      <div className="al-container">
        <div className="careers-head">
          <div>
            <span className="eyebrow">CAREERS &nbsp;/&nbsp; 08</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              一緒にAIで、
              <br />
              社会の可能性を解き放つ。
            </h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: '44ch' }}>
              創業期のAscend Logicでは、AIの民主化を共に推進する仲間を募集しています。
            </p>
          </div>
          <div>
            {/* <div className="placeholder careers-placeholder">
              <span>TEAM — PHOTO</span>
            </div> */}
          </div>
        </div>

        <ul className="careers-list">
          {careers.map((c) => (
            <li key={c.role} className="careers-row">
              <span className="mono careers-team">{c.team}</span>
              <span className="careers-role focus-line">{c.role}</span>
              <span className="careers-loc muted tiny">{c.loc}</span>
              <span className="careers-type tag">{c.type}</span>
              <span className="careers-arr">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
