import Link from 'next/link'
import { newsItems } from '../../lib/news'

export default function News() {
  return (
    <section className="al-section-tight" id="news">
      <div className="al-container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">NEWS &nbsp;/&nbsp; 07</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              ニュース / ブログ
            </h2>
          </div>
          <Link href="/news" className="btn-link">
            <span>すべて見る</span>
            <span className="arr">→</span>
          </Link>
        </div>
        <ul className="news-list">
          {newsItems.map((n) => {
            const isExternal = n.url.startsWith('http')
            const Inner = (
              <>
                <span className="news-date mono">{n.date}</span>
                <span className="news-cat tag">{n.category}</span>
                <span className="news-title focus-line">{n.title}</span>
                <span className="news-arr">{isExternal ? '↗' : '→'}</span>
              </>
            )
            return (
              <li key={n.id} style={{ listStyle: 'none' }}>
                {isExternal ? (
                  <a href={n.url} target="_blank" rel="noopener noreferrer" className="news-row">
                    {Inner}
                  </a>
                ) : (
                  <Link href={n.url} className="news-row">
                    {Inner}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
