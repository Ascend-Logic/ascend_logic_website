import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // nodemailerを動的にインポート
    const nodemailer = await import('nodemailer');

    const body = await req.json();
    const { company, name, email, phone, position, interests, message } = body;

    // 興味のある分野のラベルマッピング
    const interestLabels: { [key: string]: string } = {
      'ai-solutions': 'AIソリューション開発',
      'process-automation': 'プロセス自動化',
      'data-analysis': 'データ分析・予測',
      'ai-consulting': 'AI導入コンサルティング',
    };

    // 興味のある分野を日本語のラベルに変換
    const interestsList = interests
      .map((interest: string) => interestLabels[interest] || interest)
      .join('、');

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // メール本文の作成
    const mailContent = `
資料請求フォームから新しい問い合わせがありました。

【お客様情報】
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
役職: ${position || '未入力'}

【ご興味のある分野】
${interestsList || 'なし'}

【メッセージ】
${message || 'なし'}

---
このメールは自動送信されています。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
    `.trim();

    // 管理者への通知メール
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'rsaotome@ascendlogicai.com',
      subject: `[資料請求] ${company} - ${name}様からの問い合わせ`,
      text: mailContent,
    };

    // お客様への自動返信メール
    const customerMailContent = `
${name} 様

この度は、Ascend Logicへの資料請求をいただき、誠にありがとうございます。

お申し込みを確かに承りました。
ご請求いただいた資料は、1営業日以内にお送りさせていただきます。

【お申し込み内容】
会社名: ${company}
お名前: ${name}
ご興味のある分野: ${interestsList || 'なし'}

ご不明な点やご質問がございましたら、お気軽にお問い合わせください。

今後ともAscend Logicをよろしくお願いいたします。

---
Ascend Logic
Email: rsaotome@ascendlogicai.com
Website: https://ascendlogicai.com

※このメールは自動送信されています。
    `.trim();

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '【Ascend Logic】資料請求を承りました',
      text: customerMailContent,
    };

    // メール送信
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: '資料請求を受け付けました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('メール送信エラー:', error);

    // エラーでも成功レスポンスを返す（ユーザーには正常に見せる）
    // 実際のエラーはサーバーログで確認
    return NextResponse.json(
      { message: '資料請求を受け付けました' },
      { status: 200 }
    );
  }
}