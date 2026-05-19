export default function Vision() {
  return (
    <section id="vision" className="relative py-[120px] max-[720px]:py-[72px]">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[360px_1fr] gap-20 items-start max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <div className="flex flex-col gap-8 sticky top-24 max-[900px]:static">
            <span className="font-mono text-xs font-medium tracking-eyebrow uppercase text-primary inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
              VISION &nbsp;/&nbsp; 02
            </span>
            <div className="font-en [font-feature-settings:'ss01'_1,'cv11'_1] font-semibold text-[clamp(28px,3vw,40px)] leading-[1.05] tracking-tighter text-foreground">
              &ldquo;Unlocking <br /> potential <br /> through AI.&rdquo;
            </div>
          </div>
          <div className="max-w-[720px] flex flex-col gap-7">
            <h2 className="font-bold text-section leading-[1.25] tracking-tight m-0">
              <span className="text-muted-foreground">AIの力で、</span>
              <br />
              すべての企業と個人の
              <br />
              可能性を解き放つ。
            </h2>
            <p className="m-0 text-lede leading-[1.85] text-foreground-soft max-w-[60ch]">
              AIは単なる技術革新ではなく、人間の創造性を拡張するツールです。 私たちは、最先端のAI技術を誰もが活用できるものにし、 AIの民主化を通じて社会全体のDX加速を目指します。
            </p>
            <div className="mt-4 grid grid-cols-2 border-t border-border max-[900px]:grid-cols-1">
              <div className="py-7 pr-6 border-b border-border flex flex-col gap-3">
                <div className="font-mono tracking-wide text-sm text-muted-foreground">VISION</div>
                <div className="font-semibold text-lg leading-[1.55]">AIの力で、すべての企業と個人の可能性を解き放つ。</div>
              </div>
              <div className="py-7 px-6 border-b border-l border-border flex flex-col gap-3 max-[900px]:pl-0 max-[900px]:border-l-0">
                <div className="font-mono tracking-wide text-sm text-muted-foreground">MISSION</div>
                <div className="font-semibold text-lg leading-[1.55]">最先端のAI技術を、誰もが活用できるものに。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
