import Link from "next/link";

const features = [
  {
    ic: "01",
    t: "自動参加 & 録音",
    d: "Zoom / Google Meet / Teams / Webex にAIボットが自動参加し、録音・文字起こしまで完了。",
  },
  {
    ic: "02",
    t: "議事録 & アクション抽出",
    d: "発言ベースの議事録と、決定事項・宿題タスクを自動で構造化。",
  },
  {
    ic: "03",
    t: "カレンダー連携で完全自動",
    d: "Google Calendar から会議を検出し、人手を介さずナレッジ蓄積まで。",
  },
  {
    ic: "04",
    t: "ナレッジ検索 AIチャット",
    d: "蓄積された議事録やドキュメントに、自然言語で問い合わせ。",
  },
  { ic: "05", t: "完全データ隔離", d: "組織ごとに完全分離。Google OAuth と暗号化保存。" },
  { ic: "06", t: "エンタープライズ品質", d: "監査ログ、SSO 対応、権限管理を備えた本番運用。" },
];

export default function Agent() {
  return (
    <section className="al-section agent-sec" id="agent">
      <div className="agent-bg" aria-hidden="true"></div>
      <div className="al-container agent-inner">
        <div className="agent-head">
          <div>
            <span className="eyebrow agent-eyebrow">PRODUCT &nbsp;/&nbsp; 04</span>
            <h2 className="h-section agent-h" style={{ marginTop: 16 }}>
              <span className="en agent-h__en">Ascend Agent</span>
              <br />
              すべての社員に、
              <br />
              もう一人のAIアシスタントを。
            </h2>
          </div>
          <p className="lede agent-lede">
            オンライン会議に自動参加し、議事録・アクション抽出・ナレッジ化まで全自動。
            蓄積されたデータには、AIチャットで自然言語検索。
          </p>
        </div>

        {/* <div className="agent-stage">
          <div className="agent-window">
            <div className="agent-window__bar">
              <div className="agent-window__dots"><span></span><span></span><span></span></div>
              <div className="agent-window__url mono">ascend-agent.app &nbsp;/&nbsp; meetings &nbsp;/&nbsp; q2-product-review</div>
              <div><span className="agent-user">SR</span></div>
            </div>
            <div className="agent-window__body">
              <aside className="agent-side">
                <div className="agent-side-section">
                  <div className="agent-side-h mono">MEETINGS</div>
                  <div className="agent-side-item active">
                    <span className="rec"></span>
                    <span>Q2 プロダクト戦略</span>
                  </div>
                  <div className="agent-side-item">建設PJ ヒアリング</div>
                  <div className="agent-side-item">保険チーム週次</div>
                  <div className="agent-side-item">採用面接 #14</div>
                </div>
                <div className="agent-side-section">
                  <div className="agent-side-h mono">KNOWLEDGE</div>
                  <div className="agent-side-item">議事録 (412)</div>
                  <div className="agent-side-item">アクション (89)</div>
                  <div className="agent-side-item">ドキュメント</div>
                </div>
              </aside>
              <main className="agent-main">
                <div className="agent-main__row">
                  <div className="agent-meet-title">
                    <h3>Q2 プロダクト戦略レビュー</h3>
                    <div className="mono tiny muted">2026.05.17 · 10:00 — 10:45 · Google Meet · 6 attendees</div>
                  </div>
                  <div className="agent-rec-pill">
                    <span className="dot"></span>
                    <span>RECORDING</span>
                  </div>
                </div>

                <div className="agent-grid">
                  <div className="agent-card agent-card--summary">
                    <div className="agent-card__head">
                      <span className="mono tiny muted">SUMMARY</span>
                      <span className="agent-chip">AI生成</span>
                    </div>
                    <p>
                      Q2は<mark>「Ascend Agent」の正式リリース</mark>を最優先課題とし、
                      建設・保険の2業界を初期ターゲットに据える方針で合意。
                      技術的にはマルチテナント基盤の強化と監査ログ実装を6月末までに完了させる。
                    </p>
                    <div className="agent-card__people">
                      <span className="ppl ppl-1">SR</span>
                      <span className="ppl ppl-2">YK</span>
                      <span className="ppl ppl-3">HT</span>
                      <span className="ppl ppl-4">+3</span>
                    </div>
                  </div>

                  <div className="agent-card agent-card--actions">
                    <div className="agent-card__head">
                      <span className="mono tiny muted">ACTION ITEMS</span>
                      <span className="agent-chip">4</span>
                    </div>
                    <ul className="agent-actions">
                      <li><span className="ck"></span><span>マルチテナント実装 <em className="due">~6/30</em></span><span className="who">YK</span></li>
                      <li><span className="ck"></span><span>建設業界の事例ドキュメント整理 <em className="due">~5/24</em></span><span className="who">HT</span></li>
                      <li><span className="ck"></span><span>料金体系ドラフト <em className="due">~5/31</em></span><span className="who">SR</span></li>
                      <li><span className="ck ck-done"></span><span><s>監査ログ要件定義</s></span><span className="who">MK</span></li>
                    </ul>
                  </div>

                  <div className="agent-card agent-card--chat">
                    <div className="agent-card__head">
                      <span className="mono tiny muted">ASK ASCEND</span>
                      <span className="agent-chip accent">AI Chat</span>
                    </div>
                    <div className="agent-chat">
                      <div className="bub bub-user">監査ログの要件、前回の建設業案件でも合意した内容と一致してる？</div>
                      <div className="bub bub-ai">
                        <span className="bub-ai__head"><span className="mono">Ascend</span></span>
                        はい、おおむね一致しています。建設業案件（#1142）では7年保管・WORMストレージが要件でしたが、今回の戦略レビューでも同等の要件として記録されています。
                        <span className="bub-ai__src">出典: 議事録 #1142, #1198</span>
                      </div>
                      <div className="bub-input">
                        <span className="mono muted">›</span>
                        <span className="bub-input__ph">質問を入力…</span>
                        <span className="kbd">⌘K</span>
                      </div>
                    </div>
                  </div>

                  <div className="agent-card agent-card--transcript">
                    <div className="agent-card__head">
                      <span className="mono tiny muted">TRANSCRIPT</span>
                      <span className="agent-chip">JA · auto</span>
                    </div>
                    <div className="agent-tr">
                      <div className="tr-row">
                        <span className="tr-who">早乙女</span>
                        <span className="tr-time mono">10:02</span>
                        <p>Q2はAscend Agentのリリースを最優先にしたいです。建設と保険の2業界を…</p>
                      </div>
                      <div className="tr-row">
                        <span className="tr-who">高木</span>
                        <span className="tr-time mono">10:04</span>
                        <p>マルチテナント基盤、6月末までで間に合う想定でしょうか？</p>
                      </div>
                      <div className="tr-row tr-active">
                        <span className="tr-who">山田</span>
                        <span className="tr-time mono">10:05</span>
                        <p>監査ログのほうは要件定義が終わっていて<span className="tr-cursor">|</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div> */}

        <div className="agent-feat">
          {features.map((f) => (
            <div key={f.ic} className="agent-feat__item">
              <span className="agent-feat__no mono">{f.ic}</span>
              <div>
                <div className="agent-feat__t">{f.t}</div>
                <div className="agent-feat__d">{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="agent-footer">
          <div className="agent-footer__l">
            <div className="mono tiny muted">SECURITY &nbsp;·&nbsp; SOC&nbsp;2 ready</div>
            <div className="agent-footer__chips">
              <span className="tag">Google OAuth</span>
              <span className="tag">AES-256 暗号化</span>
              <span className="tag">テナント完全分離</span>
              <span className="tag">監査ログ</span>
              <span className="tag">SSO 対応</span>
            </div>
          </div>
          <div className="agent-footer__r">
            <Link href="/products/ascendai" className="btn btn-primary">
              <span>詳しく見る</span>
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
