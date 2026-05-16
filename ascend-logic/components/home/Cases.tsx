import Link from 'next/link';
import CaseVisual from './CaseVisual';

type Kind = 'construction' | 'it' | 'infra' | 'insurance' | 'healthcare' | 'government' | 'property';

const cases: { ind: string; en: string; tag: string; note: string; viz: Kind }[] = [
  { ind: '建設・不動産', en: 'Construction & Real Estate', tag: 'RAGナレッジ検索', note: '現場ノウハウを横断検索', viz: 'construction' },
  { ind: 'IT・通信', en: 'IT & Telecom', tag: 'AI議事録', note: '全社会議をナレッジ化', viz: 'it' },
  { ind: '公共インフラ', en: 'Public Infrastructure', tag: '可視化カメラ FW', note: 'マンホール内 IoT 開発', viz: 'infra' },
  { ind: '保険・金融', en: 'Insurance & Finance', tag: '車種自動識別AI', note: '事故車両の自動分類', viz: 'insurance' },
  { ind: 'ヘルスケア', en: 'Healthcare', tag: 'カウンセリングAI', note: 'オンライン相談の補助', viz: 'healthcare' },
  { ind: '政府・公共機関', en: 'Government', tag: '大使館ポータル', note: '多言語ポータル基盤', viz: 'government' },
  { ind: '不動産・管理', en: 'Property Management', tag: 'AI-OCR 自動転記', note: '紙帳票の構造化', viz: 'property' },
];

export default function Cases() {
  return (
    <section className="al-section" id="cases">
      <div className="al-container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">CASE STUDIES &nbsp;/&nbsp; 05</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              業種を問わず、<br />
              現場に届くAIを。
            </h2>
          </div>
          <p className="lede sec-head__lede">
            7+ 業種でのAI導入実績。<br />
            技術の専門性と、現場定着への伴走支援が私たちの強みです。
          </p>
        </div>

        <div className="cases-grid">
          {cases.map((c, i) => (
            <article key={c.en} className="case-card">
              <div className="case-card__no mono">CASE / {String(i + 1).padStart(2, '0')}</div>
              <div className="case-card__viz">
                <CaseVisual kind={c.viz} />
              </div>
              <div className="case-card__body">
                <div className="case-card__ind">
                  <span className="en case-card__en">{c.en}</span>
                  <h3 className="case-card__h">{c.ind}</h3>
                </div>
                <div className="case-card__tag">
                  <span className="tag"><span className="tag-dot"></span>{c.tag}</span>
                </div>
                <p className="case-card__note">{c.note}</p>
              </div>
            </article>
          ))}
          <div className="case-card case-card--more">
            <div className="bignum">+</div>
            <div>
              <div className="case-card__h">あなたの業界も。</div>
              <p className="muted tiny">業種・課題に応じてご提案。<br />まずは無料相談から。</p>
              <Link href="/request-documents" className="btn-link">
                <span>相談する</span>
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
