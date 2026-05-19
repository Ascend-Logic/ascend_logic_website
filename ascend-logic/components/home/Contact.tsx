import Link from 'next/link'

export default function Contact({ index = 6 }: { index?: number }) {
  const no = String(index).padStart(2, '0')
  return (
    <section id="contact" className="py-[120px] max-[720px]:py-[72px]">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="relative rounded-[26px] overflow-hidden text-white isolate">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 before:content-[''] before:absolute before:inset-0 before:[background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] before:bg-[length:48px_48px]"
            style={{
              background:
                'radial-gradient(70% 80% at 0% 0%, color-mix(in oklab, var(--primary) 60%, transparent) 0%, transparent 65%), radial-gradient(60% 70% at 100% 100%, color-mix(in oklab, var(--primary) 45%, #6b8cff) 0%, transparent 60%), linear-gradient(135deg, #0a0e1a 0%, #1a1f30 100%)',
            }}
          ></div>
          <div className="grid grid-cols-[1.4fr_1fr] gap-[60px] p-20 max-[880px]:grid-cols-1 max-[880px]:px-8 max-[880px]:py-12 max-[880px]:gap-10">
            <div>
              <span className="font-mono text-xs font-medium tracking-widest uppercase text-white/70 inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
                CONTACT &nbsp;/&nbsp; {no}
              </span>
              <h2 className="font-bold leading-[1.14] tracking-tight text-[clamp(36px,4.4vw,60px)] mt-4 mb-6">
                AI活用のご相談、
                <br />
                承ります。
              </h2>
              <p className="text-lg leading-[1.85] text-white/[0.78] max-w-[60ch] mb-8">
                業種・課題は問いません。まずは無料の60分相談で、
                <br />
                貴社の業務にAIをどう活かせるか、一緒に整理します。
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/request-documents"
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm tracking-wide border border-transparent whitespace-nowrap bg-white text-foreground transition-all duration-200 hover:-translate-y-px"
                >
                  <span>無料相談を予約</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
                </Link>
                <Link
                  href="/request-documents"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm tracking-wide border border-white/30 whitespace-nowrap bg-transparent text-white transition-all duration-200 hover:border-white"
                >
                  <span>資料ダウンロード</span>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-6 border-t border-white/[0.16] pt-6">
                <div className="flex flex-col gap-1">
                  <div className="font-mono tracking-wide text-sm text-white/50">EMAIL</div>
                  <a href="mailto:rsaotome@ascendlogicai.com" className="text-base font-medium">
                    rsaotome@ascendlogicai.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-mono tracking-wide text-sm text-white/50">OFFICE</div>
                  <div className="text-base font-medium">東京都青梅市師岡町1-125-14</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-mono tracking-wide text-sm text-white/50">RESPONSE</div>
                  <div className="text-base font-medium">2 営業日以内に返信</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
