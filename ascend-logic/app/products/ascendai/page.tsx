import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '../../../components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Ascend Agent',
  description: 'すべての社員に、もう一人のAIアシスタントを。会議に同席し、記録し、学習し、いつでも答える。あなたの業務を誰よりも深く理解するAIが、チームの一員になります。',
  keywords: 'AIアシスタント, AI議事録, 自動議事録作成, RAGチャットボット, Google Calendar連携, ビデオ会議文字起こし, 会議自動録画, ナレッジ検索, 議事録自動化',
  openGraph: {
    title: 'Ascend Agent - あなた専属のAIアシスタント',
    description: 'すべての社員に、もう一人のAIアシスタントを。会議に同席し、記録し、学習し、いつでも答える。',
    type: 'website',
  },
}

const abilities = [
  {
    number: '01',
    title: '会議に同席する',
    subtitle: 'Attend',
    description: 'オンライン会議にはAIボットが自動参加。デスクトップアプリを使えば対面会議の録画にも対応。あなたの代わりに記録係を担当します。',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: '記録を整理する',
    subtitle: 'Organize',
    description: '文字起こし・要約・トピック抽出・アクションアイテムまで自動で整理。議事録作成の工数はゼロになります。',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: '質問に答える',
    subtitle: 'Answer',
    description: '「先週の商談で何を決めた？」過去の全会議・ドキュメントから関連情報を検索し、根拠を示しながら即座に回答します。',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: '組織の知見になる',
    subtitle: 'Accumulate',
    description: '個人の記憶に頼らない。蓄積されたナレッジがチーム全体の資産になり、使うほどAIの回答精度も向上します。',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
]

const beforeAfter = {
  before: ['会議のたびに手作業で議事録を書く', '「あの件どうなった？」に自力で調べる', '過去の決定事項を誰も覚えていない', '録画を最初から見返す時間はない', 'ナレッジが個人に閉じて共有されない'],
  after: ['AIが会議に同席し、自動で記録・整理', 'チャットで聞けば即座に回答が返る', '全会議の文脈をAIが横断的に記憶', '必要な箇所だけピンポイントで確認', '組織のナレッジがAIに蓄積・共有される'],
}

const modes = [
  {
    title: 'ボット同席モード',
    subtitle: 'オンライン会議にAIボットが自動参加',
    points: ['Google Calendar連携で自動起動', 'Zoom / Google Meet / Teams / Webex 対応', 'クラウド完結でアプリのインストール不要', '会議開始前にボットが自動で参加', '録音から議事録生成まで全自動'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: 'デスクトップ録画モード',
    subtitle: '対面会議やウェビナーもキャプチャ',
    points: ['専用デスクトップアプリで画面録画', '画面共有と音声を同時にキャプチャ', '対面・ハイブリッド会議にも対応', '録画後にクラウドへ自動アップロード', 'オフライン時も録画、復帰後に自動同期'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
        />
      </svg>
    ),
  },
]

const pipeline = [
  {
    step: '1',
    title: '会議を検出',
    description: 'Google Calendar連携で自動認識',
  },
  {
    step: '2',
    title: 'AIが同席',
    description: 'ボット参加 or デスクトップ録画',
  },
  {
    step: '3',
    title: '文字起こし',
    description: 'AIが高精度にテキスト化',
  },
  {
    step: '4',
    title: '議事録生成',
    description: '要約・トピック・アクション自動抽出',
  },
  {
    step: '5',
    title: '知識として蓄積',
    description: 'ナレッジベースに自動登録・検索可能に',
  },
]

const impacts = [
  {
    value: '0分',
    label: '議事録の作成時間',
    description: 'AIが自動で生成するため手作業は完全にゼロに',
  },
  {
    value: '30秒',
    label: '過去情報へのアクセス',
    description: 'AIチャットに聞くだけで必要な情報が即座に見つかる',
  },
  {
    value: '100%',
    label: '会議ナレッジの蓄積率',
    description: '全会議が自動で記録・検索可能に',
  },
]

const steps = [
  {
    number: '1',
    title: 'お問い合わせ・資料請求',
    description: 'まずはお気軽にお問い合わせください。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    number: '2',
    title: '個別デモ',
    description: '実際の画面をご覧いただきながらご説明します。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
        />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'ご契約',
    description: 'お客様に最適なプランをご提案いたします。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15"
        />
      </svg>
    ),
  },
  {
    number: '4',
    title: '活用開始・効果測定',
    description: '導入後も伴走しながらサポートいたします。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
        />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'どのビデオ会議サービスに対応していますか？',
    a: 'Google Meet、Zoom、Microsoft Teams、Webexなど、主要なビデオ会議サービスに対応しています。また、デスクトップアプリを使えば対面会議の画面録画にも対応できます。',
  },
  {
    q: 'AIチャットではどんな質問ができますか？',
    a: '蓄積された議事録やドキュメントに関する質問に、根拠となる資料を提示しながら回答します。「先月の定例で決まったタスクは？」「A社との契約条件は？」といった質問に即座に答えます。',
  },
  {
    q: '既存のGoogle Workspaceアカウントで使えますか？',
    a: 'はい、お使いのGoogle Workspaceアカウントで簡単に連携できます。Googleアカウントでログインするだけで、カレンダーの会議情報を自動取得して録画ボットの起動まで行います。',
  },
  {
    q: '他の組織のデータが見えてしまうことはありますか？',
    a: 'いいえ、ありません。組織ごとにデータが完全に隔離されており、他の組織のデータにアクセスすることは一切できない設計になっています。',
  },
  {
    q: 'セットアップ後に手動で操作する必要はありますか？',
    a: 'カレンダー連携を設定すれば、会議の検出からボットの起動、録画、文字起こし、議事録生成、ナレッジ蓄積まですべて自動で実行されます。操作は一切不要です。',
  },
  {
    q: 'チームメンバーの追加はどうすればいいですか？',
    a: '管理者が招待コードを発行し、メンバーに共有するだけで簡単に追加できます。メンバーの権限（管理者・一般メンバー・ゲスト）も個別に設定可能です。',
  },
]

export default function AscendAgentProductPage() {
  return (
    <>
      {/* ===== Hero — Black BG ===== */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)]" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32 text-center">
          <FadeIn>
            <p className="section-title-en text-sm text-white/40 tracking-[0.2em] mb-6">YOUR AI ASSISTANT</p>
            <h1 className="hero-title text-3xl md:text-5xl lg:text-[3.4rem] leading-tight mb-6">
              すべての社員に、
              <br className="hidden md:block" />
              もう一人のAIアシスタントを。
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              会議に同席し、記録し、学習し、いつでも答える。
              <br className="hidden md:block" />
              あなたの業務を誰よりも深く理解するAIが、チームの一員になります。
            </p>
            <Link href="/request-documents" className="pill-btn !border-white/30 !text-white hover:!bg-white hover:!text-black">
              お問い合わせ <span className="arrow">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== Data Integration Visual ===== */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Integration</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">あらゆるツールの情報が、AIに集まる</h2>
            <p className="text-gray-500 text-sm text-center mb-16 max-w-xl mx-auto">
              日常で使うコミュニケーションツールと自動連携。
              <br className="hidden md:block" />
              散らばった会議データをAIアシスタントが一元的に学習します。
            </p>
          </FadeIn>

          {/* Vertical flow: Sources → Ascend Agent */}
          <div className="flex flex-col items-center">
            {/* Source icons row */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-10">
              {[
                { src: '/images/zoom-icon.png', alt: 'Zoom', label: '会議録画' },
                { src: '/images/meet-icon.png', alt: 'Google Meet', label: '会議録画' },
                { src: '/images/teams-icon.png', alt: 'Teams', label: '会議録画' },
                { src: '/images/slack-icon.png', alt: 'Slack', label: 'ハドル' },
                { src: '/images/google-calendar-icon.png', alt: 'Calendar', label: 'スケジュール' },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center p-2.5 hover:shadow-md hover:border-gray-300 transition-all">
                      <Image src={s.src} alt={s.alt} width={40} height={40} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-gray-600 text-[11px] font-medium">{s.alt}</span>
                    <span className="text-gray-400 text-[10px] leading-none">{s.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Connecting line */}
            <FadeIn>
              <div className="flex flex-col items-center mb-10">
                <div className="h-12 w-px bg-gradient-to-b from-gray-300 to-indigo-400" />
                <svg className="w-4 h-4 text-indigo-400 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </FadeIn>

            {/* Ascend Agent hub */}
            <FadeIn>
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-4 bg-indigo-100/40 rounded-3xl blur-xl" />
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-200">
                    <Image src="/images/ascend-agent-icon.png" alt="Ascend Agent" width={112} height={112} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Ascend Agent</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">AIアシスタント</p>
                </div>
              </div>
            </FadeIn>

            {/* Bottom description */}
            <FadeIn>
              <p className="mt-12 text-center text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
                連携された会議データ・メッセージは自動でナレッジとして蓄積。
                <br />
                あなた専属のAIアシスタントが日々賢くなっていきます。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== Before / After ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Before &amp; After</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">もし、あなた専属のAIアシスタントがいたら？</h2>
            <p className="text-gray-500 text-sm text-center mb-16 max-w-xl mx-auto">Ascend Agentがいる働き方は、今までの「当たり前」を変えます。</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <FadeIn direction="left">
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-400">今の働き方</h3>
                </div>
                <ul className="space-y-4">
                  {beforeAfter.before.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-black rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Ascend Agent がいる働き方</h3>
                </div>
                <ul className="space-y-4">
                  {beforeAfter.after.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 4 Abilities ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Capabilities</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-20">あなたのAIアシスタントができること</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {abilities.map((a, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 md:p-10 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">{a.icon}</div>
                    <div>
                      <p className="section-title-en text-xs text-gray-400 tracking-[0.15em]">{a.subtitle}</p>
                      <h3 className="text-xl font-bold">{a.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Chat UI Showcase ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">AI Chat</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">AIアシスタントに聞く &#8212; いつでも、なんでも</h2>
            <p className="text-gray-500 text-sm text-center mb-16 max-w-2xl mx-auto">
              過去の会議内容や蓄積されたドキュメントに対して自然な言葉で質問するだけ。
              <br className="hidden md:block" />
              根拠となる議事録を提示しながら、AIが即座に回答します。
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <FadeIn direction="left" className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image src="/images/ascend-agent-chat-ui.png" alt="Ascend Agent RAGチャット画面 - AIが議事録を横断検索して回答" width={1440} height={900} className="w-full h-auto" priority />
              </div>
            </FadeIn>

            <FadeIn direction="right" className="md:w-[340px] flex-shrink-0">
              <h3 className="text-lg font-bold mb-6">こんな質問に即座に回答</h3>
              <ul className="space-y-4">
                {['先週の商談で出た条件は？', 'A社との契約で合意した内容は？', '先月の定例で決まったタスクは？', '展示会出展の検討状況は？'].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">「{q}」</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs mt-6 leading-relaxed">全会議のコンテキストから根拠付きで回答します</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== Two Modes ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Two Modes</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">AIの「同席」方法</h2>
            <p className="text-gray-500 text-sm text-center mb-16 max-w-xl mx-auto">あらゆる会議形態に対応する、2つの録画方式を用意しています。</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modes.map((m, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="border border-gray-200 rounded-xl p-8 md:p-10 hover:border-gray-400 transition-colors h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-700 mb-6">{m.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{m.subtitle}</p>
                  <ul className="space-y-3">
                    {m.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Automated Pipeline ===== */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-white/40 tracking-[0.2em] text-center mb-2">Automated Pipeline</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">完全自動 &#8212; セットアップ後は手間ゼロ</h2>
            <p className="text-white/50 text-sm text-center mb-16 max-w-2xl mx-auto">
              カレンダーに会議が入った瞬間から、録画・文字起こし・議事録生成・ナレッジ蓄積まで、ユーザーの操作は一切不要です。
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {pipeline.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white/20 text-white flex items-center justify-center mx-auto mb-4">
                    <span className="section-title-en text-lg font-bold">{p.step}</span>
                  </div>
                  <h3 className="text-base font-bold mb-2">{p.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Impact Numbers ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Impact</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">AIアシスタントがもたらす変化</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((item, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="text-center p-8">
                  <p className="section-title-en text-5xl md:text-6xl font-bold text-black mb-3">{item.value}</p>
                  <p className="text-base font-bold mb-2">{item.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Security ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Security</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">エンタープライズ品質のセキュリティ</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '認証基盤',
                description: 'Google OAuth認証を採用。安全なログインと自動的なセッション管理を提供します。',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                ),
              },
              {
                title: 'テナント完全隔離',
                description: '全データに組織フィルタを適用。組織間のデータは完全に分離され、相互にアクセスできません。',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ),
              },
              {
                title: 'ロール管理',
                description: '管理者・メンバー・ゲストの3段階の権限設定。招待コードで安全にメンバーを追加できます。',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'データ暗号化',
                description: 'すべてのデータは暗号化して保存。機密性の高い情報も安全に管理されます。',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                ),
              },
              {
                title: 'オートスケール',
                description: '利用状況に応じて自動でスケール。急なアクセス増加にも安定したパフォーマンスを維持します。',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                    />
                  </svg>
                ),
              },
              {
                title: 'データ保護',
                description: '安全なアクセス制御と通信の暗号化により、データの漏洩リスクを最小限に抑えます。',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                    />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4">{s.icon}</div>
                  <h3 className="text-base font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Flow — Steps ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Flow</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">ご利用開始までの流れ</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-full bg-gray-100 mb-6">
                    <div className="text-gray-600">{s.icon}</div>
                    <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold section-title-en">{s.number}</div>
                  </div>
                  <h3 className="text-base font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-16">
              <Link href="/request-documents" className="pill-btn">
                お問い合わせ <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="section-title-en text-sm text-gray-400 tracking-[0.2em] text-center mb-2">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">よくあるご質問</h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-bold section-title-en">Q</span>
                    <div>
                      <h3 className="font-bold text-base mb-3">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Black BG ===== */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <p className="section-title-en text-sm text-white/40 tracking-[0.2em] mb-4">Contact Us</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">すべての社員に、もう一人の力を。</h2>
            <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Ascend Agent &#8212; あなた専属のAIアシスタント。
              <br />
              まずはお気軽にお問い合わせください。
            </p>
            <Link href="/request-documents" className="pill-btn !border-white/30 !text-white hover:!bg-white hover:!text-black">
              お問い合わせ <span className="arrow">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
