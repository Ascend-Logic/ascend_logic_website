import Link from 'next/link'

const features = [
  {
    ic: '01',
    t: '自動参加 & 録音',
    d: 'Zoom / Google Meet / Teams / Webex にAIボットが自動参加し、録音・文字起こしまで完了。',
  },
  {
    ic: '02',
    t: '議事録 & アクション抽出',
    d: '発言ベースの議事録と、決定事項・宿題タスクを自動で構造化。',
  },
  {
    ic: '03',
    t: 'カレンダー連携で完全自動',
    d: 'Google Calendar から会議を検出し、人手を介さずナレッジ蓄積まで。',
  },
  {
    ic: '04',
    t: 'ナレッジ検索 AIチャット',
    d: '蓄積された議事録やドキュメントに、自然言語で問い合わせ。',
  },
  { ic: '05', t: '完全データ隔離', d: '組織ごとに完全分離。Google OAuth と暗号化保存。' },
  { ic: '06', t: 'エンタープライズ品質', d: '監査ログ、SSO 対応、権限管理を備えた本番運用。' },
]

export default function Agent() {
  return (
    <section id="agent" className="relative isolate py-[120px] max-[720px]:py-[72px] text-[#f4f5f8]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_0%,color-mix(in_oklab,var(--primary)_30%,transparent)_0%,transparent_60%),radial-gradient(50%_50%_at_100%_100%,color-mix(in_oklab,var(--primary)_20%,transparent)_0%,transparent_70%),#08090d]"
      ></div>
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1.3fr_1fr] gap-[60px] items-end mb-14 max-[880px]:grid-cols-1 max-[880px]:gap-5">
          <div>
            <span className="font-mono tracking-wide text-xs font-medium tracking-eyebrow uppercase text-white inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
              PRODUCT &nbsp;/&nbsp; 04
            </span>
            <h2 className="font-bold text-section leading-[1.25] tracking-tight m-0 mt-4 text-white">
              <span className="font-en [font-feature-settings:'ss01'_1,'cv11'_1] text-sm tracking-widest text-primary uppercase font-semibold mb-[18px] inline-block">
                Ascend Agent
              </span>
              <br />
              すべての社員に、
              <br />
              もう一人のAIアシスタントを。
            </h2>
          </div>
          <p className="m-0 text-lede leading-[1.85] text-white/[0.78] max-w-[44ch]">
            オンライン会議に自動参加し、議事録・アクション抽出・ナレッジ化まで全自動。 蓄積されたデータには、AIチャットで自然言語検索。
          </p>
        </div>

        <div className="grid grid-cols-3 border-t border-white/[0.12] max-[880px]:grid-cols-1">
          {features.map((f, i) => (
            <div
              key={f.ic}
              className={`flex gap-4 items-start py-8 px-7 border-b border-l border-white/[0.12] max-[880px]:px-0 max-[880px]:py-6 max-[880px]:border-l-0 ${
                i % 3 === 0 ? 'border-l-0 pl-0' : ''
              } ${i % 3 === 2 ? 'pr-0' : ''} ${i >= features.length - 3 ? 'max-[881px]:border-b-0' : ''} max-[880px]:last:border-b-0`}
            >
              <span className="font-mono tracking-wide tracking-uppercase-wide text-xs text-primary pt-1 flex-shrink-0">{f.ic}</span>
              <div>
                <div className="font-semibold text-base mb-1.5 text-white">{f.t}</div>
                <div className="text-sm text-white/[0.62] leading-[1.7]">{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.12] flex justify-between items-center gap-8 flex-wrap">
          <div>
            <div className="flex gap-2 flex-wrap mt-2">
              {['Google OAuth', 'AES-256 暗号化', 'テナント完全分離', '監査ログ', 'SSO 対応'].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 font-mono tracking-wide text-xs tracking-wider uppercase px-2.5 py-[5px] border border-white/[0.18] rounded-full text-white/85 bg-white/5"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Link
              href="/products/ascendai"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm tracking-wide border border-transparent whitespace-nowrap bg-white text-[#0a1628] transition-all duration-200 hover:-translate-y-px"
            >
              <span>詳しく見る</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
