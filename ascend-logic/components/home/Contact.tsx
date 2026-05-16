import Link from 'next/link';

export default function Contact() {
  return (
    <section className="contact-sec" id="contact">
      <div className="al-container">
        <div className="contact-card">
          <div className="contact-card__bg" aria-hidden="true"></div>
          <div className="contact-card__inner">
            <div>
              <span className="eyebrow">CONTACT &nbsp;/&nbsp; 09</span>
              <h2 className="h-display contact-h">
                AI活用のご相談、<br />承ります。
              </h2>
              <p className="lede contact-lede">
                業種・課題は問いません。まずは無料の60分相談で、<br />
                貴社の業務にAIをどう活かせるか、一緒に整理します。
              </p>
              <div className="contact-cta">
                <Link href="/request-documents" className="btn btn-primary contact-btn-primary">
                  <span>無料相談を予約</span>
                  <span className="arr">→</span>
                </Link>
                <Link href="/request-documents" className="btn btn-ghost contact-btn-ghost">
                  <span>資料ダウンロード</span>
                </Link>
              </div>
            </div>
            <div>
              <div className="contact-info">
                <div>
                  <div className="mono tiny muted">EMAIL</div>
                  <a href="mailto:rsaotome@ascendlogicai.com" className="contact-info__v">rsaotome@ascendlogicai.com</a>
                </div>
                <div>
                  <div className="mono tiny muted">OFFICE</div>
                  <div className="contact-info__v">東京都青梅市師岡町1-125-14</div>
                </div>
                <div>
                  <div className="mono tiny muted">RESPONSE</div>
                  <div className="contact-info__v">2 営業日以内に返信</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
