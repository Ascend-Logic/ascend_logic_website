export default function Company() {
  return (
    <section className="al-section" id="company">
      <div className="al-container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">COMPANY &nbsp;/&nbsp; 06</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              会社情報
            </h2>
          </div>
        </div>

        <div className="company-grid">
          <div className="company-table">
            <dl>
              <div>
                <dt>会社名</dt>
                <dd>
                  株式会社 Ascend Logic
                  <br />
                  <span className="mono tiny muted">Ascend Logic, Inc.</span>
                </dd>
              </div>
              <div>
                <dt>設立</dt>
                <dd>2025年12月</dd>
              </div>
              <div>
                <dt>代表者</dt>
                <dd>
                  早乙女 琉真
                  <span className="mono tiny muted" style={{ marginLeft: 8 }}>
                    CEO
                  </span>
                </dd>
              </div>
              <div>
                <dt>本社所在地</dt>
                <dd>
                  〒198-0043
                  <br />
                  東京都青梅市師岡町1-125-14
                </dd>
              </div>
              <div>
                <dt>事業内容</dt>
                <dd>
                  オーダーメイドAI開発 / プロセス自動化 / データ分析・予測 / AI導入コンサルティング
                  / 自社プロダクト「Ascend Agent」の開発・提供
                </dd>
              </div>
              <div>
                <dt>取引先業種</dt>
                <dd>建設 · 不動産 · IT · 通信 · 公共 · 金融 · 保険 · ヘルスケア · 政府機関 ほか</dd>
              </div>
            </dl>
          </div>
          <div className="company-side">
            <div className="company-card">
              <div className="mono tiny muted">FOUNDED</div>
              <div className="bignum">2025</div>
              <div className="muted">December · Tokyo</div>
            </div>
            <div className="company-card">
              <div className="mono tiny muted">FOCUS</div>
              <div className="bignum">04</div>
              <div className="muted">Core service lines</div>
            </div>
            {/* <div className="company-map placeholder">
              <span>MAP — 東京都青梅市</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
