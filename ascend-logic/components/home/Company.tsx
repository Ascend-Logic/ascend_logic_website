export default function Company() {
  return (
    <section id="company" className="relative py-[120px] max-[720px]:py-[72px]">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] items-end mb-16 max-[880px]:grid-cols-1 max-[880px]:gap-6">
          <div>
            <span className="font-mono tracking-wide text-xs font-medium tracking-eyebrow uppercase text-primary inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
              COMPANY &nbsp;/&nbsp; 06
            </span>
            <h2 className="font-bold text-section leading-[1.25] tracking-tight m-0 mt-4">会社情報</h2>
          </div>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] gap-12 items-start max-[880px]:grid-cols-1">
          <div>
            <dl className="m-0 border-t border-border">
              {[
                {
                  k: '会社名',
                  v: (
                    <>
                      株式会社 Ascend Logic
                      <br />
                      <span className="font-mono tracking-wide text-sm text-muted-foreground">Ascend Logic, Inc.</span>
                    </>
                  ),
                },
                { k: '設立', v: '2025年12月' },
                {
                  k: '代表者',
                  v: (
                    <>
                      早乙女 琉真
                      <span className="font-mono tracking-wide text-sm text-muted-foreground ml-2">CEO</span>
                    </>
                  ),
                },
                {
                  k: '本社所在地',
                  v: (
                    <>
                      〒198-0043
                      <br />
                      東京都青梅市師岡町1-125-14
                    </>
                  ),
                },
                {
                  k: '事業内容',
                  v: 'オーダーメイドAI開発 / プロセス自動化 / データ分析・予測 / AI導入コンサルティング / 自社プロダクト「Ascend Agent」の開発・提供',
                },
                { k: '取引先業種', v: '建設 · 不動産 · IT · 通信 · 公共 · 金融 · 保険 · ヘルスケア · 政府機関 ほか' },
              ].map(({ k, v }) => (
                <div key={k} className="grid grid-cols-[200px_1fr] gap-6 py-6 border-b border-border max-[880px]:grid-cols-1 max-[880px]:gap-1.5 max-[880px]:py-4">
                  <dt className="font-mono tracking-wide text-xs tracking-widest uppercase text-muted-foreground pt-[3px]">{k}</dt>
                  <dd className="m-0 text-base leading-[1.7] text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-6 border border-border rounded-[18px] bg-surface flex flex-col gap-2">
              <div className="font-mono tracking-wide text-sm text-muted-foreground">FOUNDED</div>
              <div className="font-en font-semibold text-[56px] leading-none tracking-tighter">2025</div>
              <div className="text-muted-foreground">December · Tokyo</div>
            </div>
            <div className="p-6 border border-border rounded-[18px] bg-surface flex flex-col gap-2">
              <div className="font-mono tracking-wide text-sm text-muted-foreground">FOCUS</div>
              <div className="font-en font-semibold text-[56px] leading-none tracking-tighter">04</div>
              <div className="text-muted-foreground">Core service lines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
