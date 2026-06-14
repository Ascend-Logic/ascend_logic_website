import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Ascend Agent（アセンドエージェント） - Coming Soon',
  description: 'Ascend Agent（アセンドエージェント）は近日公開予定です。すべての社員に、もう一人のAIアシスタントを提供する新しいプロダクトをご期待ください。',
  alternates: {
    canonical: '/products/ascendai',
  },
  openGraph: {
    title: 'Ascend Agent（アセンドエージェント） - Coming Soon',
    description: 'Ascend Agent（アセンドエージェント）は近日公開予定です。',
    url: '/products/ascendai',
    type: 'website',
  },
}

export default function AscendAgentComingSoonPage() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.18),transparent_70%)]" />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-32 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-indigo-300" strokeWidth={1.8} />
            <span className="font-en text-xs tracking-[0.2em] text-white/70">COMING SOON</span>
          </div>
          <p className="font-en font-semibold text-base md:text-lg text-white/90 tracking-wide mb-4">
            Ascend Agent<span className="font-jp text-white/50">（アセンドエージェント）</span>
          </p>
          <h1 className="font-jp font-bold tracking-wide leading-tight text-3xl md:text-5xl mb-6">
            近日公開予定
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-12">
            すべての社員に、もう一人のAIアシスタントを。
            <br className="hidden md:block" />
            現在ローンチに向けて準備を進めています。続報をお待ちください。
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            トップページへ戻る
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

// =============================================================================
// 以下は元の Ascend Agent LP コード。ローンチ時に上部 ComingSoon 実装を削除し、
// 下記コメントを解除して復元する想定で残しています。
// =============================================================================

// import { Metadata } from 'next'
// import { ArrowDown, ArrowRight, BarChart3, Check, ClipboardList, HelpCircle, Key, Lightbulb, Lock, Mail, MessageSquare, Monitor, Shield, ShieldCheck, User, Users, X } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import CtaLink from '@/components/ui/CtaLink'
// import FadeIn from '@/components/ui/FadeIn'
// 
// export const metadata: Metadata = {
//   title: 'Ascend Agent（アセンドエージェント）',
//   description: 'Ascend Agent（アセンドエージェント）は、すべての社員に、もう一人のAIアシスタントを提供します。会議に同席し、記録し、学習し、いつでも答える。あなたの業務を誰よりも深く理解するAIが、チームの一員になります。',
//   keywords: 'アセンドエージェント, アセンド・エージェント, Ascend Agent, AIアシスタント, AI議事録, 自動議事録作成, RAGチャットボット, Google Calendar連携, ビデオ会議文字起こし, 会議自動録画, ナレッジ検索, 議事録自動化',
//   alternates: {
//     canonical: '/products/ascendai',
//   },
//   openGraph: {
//     title: 'Ascend Agent（アセンドエージェント） - あなた専属のAIアシスタント',
//     description: 'Ascend Agent（アセンドエージェント）は、会議に同席し、記録し、学習し、いつでも答えるAIアシスタント。すべての社員に、もう一人のAIアシスタントを。',
//     url: '/products/ascendai',
//     type: 'website',
//   },
// }
// 
// const abilities = [
//   {
//     number: '01',
//     title: '会議に同席する',
//     subtitle: 'Attend',
//     description: 'オンライン会議にはAIボットが自動参加。デスクトップアプリを使えば対面会議の録画にも対応。あなたの代わりに記録係を担当します。',
//     icon: <User className="w-7 h-7" strokeWidth={1.5} />,
//   },
//   {
//     number: '02',
//     title: '記録を整理する',
//     subtitle: 'Organize',
//     description: '文字起こし・要約・トピック抽出・アクションアイテムまで自動で整理。議事録作成の工数はゼロになります。',
//     icon: <ClipboardList className="w-7 h-7" strokeWidth={1.5} />,
//   },
//   {
//     number: '03',
//     title: '質問に答える',
//     subtitle: 'Answer',
//     description: '「先週の商談で何を決めた？」過去の全会議・ドキュメントから関連情報を検索し、根拠を示しながら即座に回答します。',
//     icon: <MessageSquare className="w-7 h-7" strokeWidth={1.5} />,
//   },
//   {
//     number: '04',
//     title: '組織の知見になる',
//     subtitle: 'Accumulate',
//     description: '個人の記憶に頼らない。蓄積されたナレッジがチーム全体の資産になり、使うほどAIの回答精度も向上します。',
//     icon: <Lightbulb className="w-7 h-7" strokeWidth={1.5} />,
//   },
// ]
// 
// const beforeAfter = {
//   before: ['会議のたびに手作業で議事録を書く', '「あの件どうなった？」に自力で調べる', '過去の決定事項を誰も覚えていない', '録画を最初から見返す時間はない', 'ナレッジが個人に閉じて共有されない'],
//   after: ['AIが会議に同席し、自動で記録・整理', 'チャットで聞けば即座に回答が返る', '全会議の文脈をAIが横断的に記憶', '必要な箇所だけピンポイントで確認', '組織のナレッジがAIに蓄積・共有される'],
// }
// 
// const modes = [
//   {
//     title: 'ボット同席モード',
//     subtitle: 'オンライン会議にAIボットが自動参加',
//     points: ['Google Calendar連携で自動起動', 'Zoom / Google Meet / Teams / Webex 対応', 'クラウド完結でアプリのインストール不要', '会議開始前にボットが自動で参加', '録音から議事録生成まで全自動'],
//     icon: <User className="w-10 h-10" strokeWidth={1.5} />,
//   },
//   {
//     title: 'デスクトップ録画モード',
//     subtitle: '対面会議やウェビナーもキャプチャ',
//     points: ['専用デスクトップアプリで画面録画', '画面共有と音声を同時にキャプチャ', '対面・ハイブリッド会議にも対応', '録画後にクラウドへ自動アップロード', 'オフライン時も録画、復帰後に自動同期'],
//     icon: <Monitor className="w-10 h-10" strokeWidth={1.5} />,
//   },
// ]
// 
// const pipeline = [
//   {
//     step: '1',
//     title: '会議を検出',
//     description: 'Google Calendar連携で自動認識',
//   },
//   {
//     step: '2',
//     title: 'AIが同席',
//     description: 'ボット参加 or デスクトップ録画',
//   },
//   {
//     step: '3',
//     title: '文字起こし',
//     description: 'AIが高精度にテキスト化',
//   },
//   {
//     step: '4',
//     title: '議事録生成',
//     description: '要約・トピック・アクション自動抽出',
//   },
//   {
//     step: '5',
//     title: '知識として蓄積',
//     description: 'ナレッジベースに自動登録・検索可能に',
//   },
// ]
// 
// const impacts = [
//   {
//     value: '0分',
//     label: '議事録の作成時間',
//     description: 'AIが自動で生成するため手作業は完全にゼロに',
//   },
//   {
//     value: '30秒',
//     label: '過去情報へのアクセス',
//     description: 'AIチャットに聞くだけで必要な情報が即座に見つかる',
//   },
//   {
//     value: '100%',
//     label: '会議ナレッジの蓄積率',
//     description: '全会議が自動で記録・検索可能に',
//   },
// ]
// 
// const steps = [
//   {
//     number: '1',
//     title: 'お問い合わせ・資料請求',
//     description: 'まずはお気軽にお問い合わせください。',
//     icon: <Mail className="w-10 h-10" strokeWidth={1.5} />,
//   },
//   {
//     number: '2',
//     title: '個別デモ',
//     description: '実際の画面をご覧いただきながらご説明します。',
//     icon: <Monitor className="w-10 h-10" strokeWidth={1.5} />,
//   },
//   {
//     number: '3',
//     title: 'ご契約',
//     description: 'お客様に最適なプランをご提案いたします。',
//     icon: <Key className="w-10 h-10" strokeWidth={1.5} />,
//   },
//   {
//     number: '4',
//     title: '活用開始・効果測定',
//     description: '導入後も伴走しながらサポートいたします。',
//     icon: <BarChart3 className="w-10 h-10" strokeWidth={1.5} />,
//   },
// ]
// 
// const faqs = [
//   {
//     q: 'どのビデオ会議サービスに対応していますか？',
//     a: 'Google Meet、Zoom、Microsoft Teams、Webexなど、主要なビデオ会議サービスに対応しています。また、デスクトップアプリを使えば対面会議の画面録画にも対応できます。',
//   },
//   {
//     q: 'AIチャットではどんな質問ができますか？',
//     a: '蓄積された議事録やドキュメントに関する質問に、根拠となる資料を提示しながら回答します。「先月の定例で決まったタスクは？」「A社との契約条件は？」といった質問に即座に答えます。',
//   },
//   {
//     q: '既存のGoogle Workspaceアカウントで使えますか？',
//     a: 'はい、お使いのGoogle Workspaceアカウントで簡単に連携できます。Googleアカウントでログインするだけで、カレンダーの会議情報を自動取得して録画ボットの起動まで行います。',
//   },
//   {
//     q: '他の組織のデータが見えてしまうことはありますか？',
//     a: 'いいえ、ありません。組織ごとにデータが完全に隔離されており、他の組織のデータにアクセスすることは一切できない設計になっています。',
//   },
//   {
//     q: 'セットアップ後に手動で操作する必要はありますか？',
//     a: 'カレンダー連携を設定すれば、会議の検出からボットの起動、録画、文字起こし、議事録生成、ナレッジ蓄積まですべて自動で実行されます。操作は一切不要です。',
//   },
//   {
//     q: 'チームメンバーの追加はどうすればいいですか？',
//     a: '管理者が招待コードを発行し、メンバーに共有するだけで簡単に追加できます。メンバーの権限（管理者・一般メンバー・ゲスト）も個別に設定可能です。',
//   },
// ]
// 
// // 検索エンジンに製品名と読み（カタカナ別名）を伝える構造化データ
// const productJsonLd = {
//   '@context': 'https://schema.org',
//   '@type': 'SoftwareApplication',
//   name: 'Ascend Agent',
//   alternateName: ['アセンドエージェント', 'アセンド・エージェント'],
//   applicationCategory: 'BusinessApplication',
//   operatingSystem: 'Web, Windows, macOS',
//   url: 'https://ascendlogicai.com/products/ascendai',
//   description:
//     'Ascend Agent（アセンドエージェント）は、会議に同席し、記録・要約・ナレッジ化まで全自動で行うAIアシスタント。蓄積したデータにはAIチャットで自然言語検索できます。',
//   publisher: {
//     '@type': 'Organization',
//     '@id': 'https://ascendlogicai.com/#organization',
//     name: 'Ascend Logic',
//     alternateName: ['アセンドロジック', '株式会社Ascend Logic'],
//     url: 'https://ascendlogicai.com',
//   },
// }
// 
// export default function AscendAgentProductPage() {
//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
//       />
//       {/* ===== Hero — Black BG ===== */}
//       <section className="relative bg-black text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)]" />
//         <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32 text-center">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-white/40 tracking-[0.2em] mb-6">YOUR AI ASSISTANT</p>
//             <p className="font-en font-semibold text-base md:text-lg text-white/90 tracking-wide mb-4">
//               Ascend Agent<span className="font-jp text-white/50">（アセンドエージェント）</span>
//             </p>
//             <h1 className="font-jp font-bold tracking-wide leading-tight text-3xl md:text-5xl lg:text-[3.4rem] mb-6">
//               すべての社員に、
//               <br className="hidden md:block" />
//               もう一人のAIアシスタントを。
//             </h1>
//             <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
//               会議に同席し、記録し、学習し、いつでも答える。
//               <br className="hidden md:block" />
//               あなたの業務を誰よりも深く理解するAIが、チームの一員になります。
//             </p>
//             <CtaLink href="/request-documents" variant="outline-light-invert">
//               お問い合わせ <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </CtaLink>
//           </FadeIn>
//         </div>
//       </section>
// 
//       {/* ===== Data Integration Visual ===== */}
//       <section className="py-20 bg-gray-50 overflow-hidden">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Integration</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">あらゆるツールの情報が、AIに集まる</h2>
//             <p className="text-gray-500 text-sm text-center mb-16 max-w-xl mx-auto">
//               日常で使うコミュニケーションツールと自動連携。
//               <br className="hidden md:block" />
//               散らばった会議データをAIアシスタントが一元的に学習します。
//             </p>
//           </FadeIn>
// 
//           {/* Vertical flow: Sources → Ascend Agent */}
//           <div className="flex flex-col items-center">
//             {/* Source icons row */}
//             <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-10">
//               {[
//                 { src: '/images/zoom-icon.png', alt: 'Zoom', label: '会議録画' },
//                 { src: '/images/meet-icon.png', alt: 'Google Meet', label: '会議録画' },
//                 { src: '/images/teams-icon.png', alt: 'Teams', label: '会議録画' },
//                 { src: '/images/slack-icon.png', alt: 'Slack', label: 'ハドル' },
//                 { src: '/images/google-calendar-icon.png', alt: 'Calendar', label: 'スケジュール' },
//               ].map((s, i) => (
//                 <FadeIn key={i} delay={i * 100}>
//                   <div className="flex flex-col items-center gap-1.5">
//                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center p-2.5 hover:shadow-md hover:border-gray-300 transition-all">
//                       <Image src={s.src} alt={s.alt} width={40} height={40} className="w-full h-full object-contain" />
//                     </div>
//                     <span className="text-gray-600 text-[11px] font-medium">{s.alt}</span>
//                     <span className="text-gray-400 text-[10px] leading-none">{s.label}</span>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
// 
//             {/* Connecting line */}
//             <FadeIn>
//               <div className="flex flex-col items-center mb-10">
//                 <div className="h-12 w-px bg-gradient-to-b from-gray-300 to-indigo-400" />
//                 <ArrowDown className="w-4 h-4 text-indigo-400 -mt-0.5" />
//               </div>
//             </FadeIn>
// 
//             {/* Ascend Agent hub */}
//             <FadeIn>
//               <div className="flex flex-col items-center gap-4">
//                 <div className="relative">
//                   <div className="absolute -inset-4 bg-indigo-100/40 rounded-3xl blur-xl" />
//                   <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-200">
//                     <Image src="/images/ascend-agent-icon.png" alt="Ascend Agent" width={112} height={112} className="w-full h-full object-cover" />
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm font-bold">Ascend Agent</p>
//                   <p className="text-gray-400 text-[11px] mt-0.5">AIアシスタント</p>
//                 </div>
//               </div>
//             </FadeIn>
// 
//             {/* Bottom description */}
//             <FadeIn>
//               <p className="mt-12 text-center text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
//                 連携された会議データ・メッセージは自動でナレッジとして蓄積。
//                 <br />
//                 あなた専属のAIアシスタントが日々賢くなっていきます。
//               </p>
//             </FadeIn>
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== Before / After ===== */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Before &amp; After</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">もし、あなた専属のAIアシスタントがいたら？</h2>
//             <p className="text-gray-500 text-sm text-center mb-16 max-w-xl mx-auto">Ascend Agentがいる働き方は、今までの「当たり前」を変えます。</p>
//           </FadeIn>
// 
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//             <FadeIn direction="left">
//               <div className="bg-gray-50 rounded-xl p-8 h-full">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center flex-shrink-0">
//                     <X className="w-5 h-5" strokeWidth={2} />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-400">今の働き方</h3>
//                 </div>
//                 <ul className="space-y-4">
//                   {beforeAfter.before.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
//                       <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </FadeIn>
// 
//             <FadeIn direction="right">
//               <div className="bg-black rounded-xl p-8 h-full">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
//                     <Check className="w-5 h-5" strokeWidth={2} />
//                   </div>
//                   <h3 className="text-lg font-bold text-white">Ascend Agent がいる働き方</h3>
//                 </div>
//                 <ul className="space-y-4">
//                   {beforeAfter.after.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
//                       <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== 4 Abilities ===== */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Capabilities</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-20">あなたのAIアシスタントができること</h2>
//           </FadeIn>
// 
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {abilities.map((a, i) => (
//               <FadeIn key={i} delay={i * 100}>
//                 <div className="bg-white rounded-xl p-8 md:p-10 hover:shadow-lg transition-shadow h-full">
//                   <div className="flex items-center gap-4 mb-5">
//                     <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">{a.icon}</div>
//                     <div>
//                       <p className="font-en font-semibold text-xs text-gray-400 tracking-[0.15em]">{a.subtitle}</p>
//                       <h3 className="text-xl font-bold">{a.title}</h3>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== Chat UI Showcase ===== */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">AI Chat</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">AIアシスタントに聞く &#8212; いつでも、なんでも</h2>
//             <p className="text-gray-500 text-sm text-center mb-16 max-w-2xl mx-auto">
//               過去の会議内容や蓄積されたドキュメントに対して自然な言葉で質問するだけ。
//               <br className="hidden md:block" />
//               根拠となる議事録を提示しながら、AIが即座に回答します。
//             </p>
//           </FadeIn>
// 
//           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
//             <FadeIn direction="left" className="flex-1 w-full">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
//                 <Image src="/images/ascend-agent-chat-ui.png" alt="Ascend Agent RAGチャット画面 - AIが議事録を横断検索して回答" width={1440} height={900} className="w-full h-auto" priority />
//               </div>
//             </FadeIn>
// 
//             <FadeIn direction="right" className="md:w-[340px] flex-shrink-0">
//               <h3 className="text-lg font-bold mb-6">こんな質問に即座に回答</h3>
//               <ul className="space-y-4">
//                 {['先週の商談で出た条件は？', 'A社との契約で合意した内容は？', '先月の定例で決まったタスクは？', '展示会出展の検討状況は？'].map((q, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mt-0.5">
//                       <HelpCircle className="w-4 h-4" strokeWidth={2} />
//                     </span>
//                     <span className="text-gray-700 text-sm leading-relaxed">「{q}」</span>
//                   </li>
//                 ))}
//               </ul>
//               <p className="text-gray-400 text-xs mt-6 leading-relaxed">全会議のコンテキストから根拠付きで回答します</p>
//             </FadeIn>
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== Two Modes ===== */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Two Modes</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">AIの「同席」方法</h2>
//             <p className="text-gray-500 text-sm text-center mb-16 max-w-xl mx-auto">あらゆる会議形態に対応する、2つの録画方式を用意しています。</p>
//           </FadeIn>
// 
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {modes.map((m, i) => (
//               <FadeIn key={i} delay={i * 150}>
//                 <div className="border border-gray-200 rounded-xl p-8 md:p-10 hover:border-gray-400 transition-colors h-full">
//                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-700 mb-6">{m.icon}</div>
//                   <h3 className="text-xl font-bold mb-2">{m.title}</h3>
//                   <p className="text-gray-500 text-sm mb-6">{m.subtitle}</p>
//                   <ul className="space-y-3">
//                     {m.points.map((p, j) => (
//                       <li key={j} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
//                         <Check className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== Automated Pipeline ===== */}
//       <section className="py-24 bg-black text-white overflow-hidden">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-white/40 tracking-[0.2em] text-center mb-2">Automated Pipeline</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">完全自動 &#8212; セットアップ後は手間ゼロ</h2>
//             <p className="text-white/50 text-sm text-center mb-16 max-w-2xl mx-auto">
//               カレンダーに会議が入った瞬間から、録画・文字起こし・議事録生成・ナレッジ蓄積まで、ユーザーの操作は一切不要です。
//             </p>
//           </FadeIn>
// 
//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//             {pipeline.map((p, i) => (
//               <FadeIn key={i} delay={i * 100}>
//                 <div className="text-center">
//                   <div className="w-14 h-14 rounded-full border-2 border-white/20 text-white flex items-center justify-center mx-auto mb-4">
//                     <span className="font-en text-lg font-bold">{p.step}</span>
//                   </div>
//                   <h3 className="text-base font-bold mb-2">{p.title}</h3>
//                   <p className="text-white/50 text-xs leading-relaxed">{p.description}</p>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== Impact Numbers ===== */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en tracking-wide font-semibold text-sm text-gray-400 text-center mb-2">Impact</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">AIアシスタントがもたらす変化</h2>
//           </FadeIn>
// 
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {impacts.map((item, i) => (
//               <FadeIn key={i} delay={i * 120}>
//                 <div className="text-center p-8">
//                   <p className="font-jp tracking-wide font-semibold text-5xl md:text-6xl text-black mb-3">{item.value}</p>
//                   <p className="text-base font-bold mb-2">{item.label}</p>
//                   <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== Security ===== */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Security</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">エンタープライズ品質のセキュリティ</h2>
//           </FadeIn>
// 
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 title: '認証基盤',
//                 description: 'Google OAuth認証を採用。安全なログインと自動的なセッション管理を提供します。',
//                 icon: <Key className="w-6 h-6" strokeWidth={1.5} />,
//               },
//               {
//                 title: 'テナント完全隔離',
//                 description: '全データに組織フィルタを適用。組織間のデータは完全に分離され、相互にアクセスできません。',
//                 icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
//               },
//               {
//                 title: 'ロール管理',
//                 description: '管理者・メンバー・ゲストの3段階の権限設定。招待コードで安全にメンバーを追加できます。',
//                 icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
//               },
//               {
//                 title: 'データ暗号化',
//                 description: 'すべてのデータは暗号化して保存。機密性の高い情報も安全に管理されます。',
//                 icon: <Lock className="w-6 h-6" strokeWidth={1.5} />,
//               },
//               {
//                 title: 'オートスケール',
//                 description: '利用状況に応じて自動でスケール。急なアクセス増加にも安定したパフォーマンスを維持します。',
//                 icon: <BarChart3 className="w-6 h-6" strokeWidth={1.5} />,
//               },
//               {
//                 title: 'データ保護',
//                 description: '安全なアクセス制御と通信の暗号化により、データの漏洩リスクを最小限に抑えます。',
//                 icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
//               },
//             ].map((s, i) => (
//               <FadeIn key={i} delay={i * 80}>
//                 <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow h-full">
//                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4">{s.icon}</div>
//                   <h3 className="text-base font-bold mb-2">{s.title}</h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
// 
//           <FadeIn>
//             <div className="text-center mt-12">
//               <Link href="/ascendai-privacy" className="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
//                 プライバシーポリシーを確認 <ArrowRight className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </FadeIn>
//         </div>
//       </section>
// 
//       {/* ===== Flow — Steps ===== */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1100px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">Flow</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">ご利用開始までの流れ</h2>
//           </FadeIn>
// 
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {steps.map((s, i) => (
//               <FadeIn key={i} delay={i * 120}>
//                 <div className="text-center">
//                   <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-full bg-gray-100 mb-6">
//                     <div className="text-gray-600">{s.icon}</div>
//                     <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold font-en">
//                       {s.number}
//                     </div>
//                   </div>
//                   <h3 className="text-base font-bold mb-2">{s.title}</h3>
//                   <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
// 
//           <FadeIn>
//             <div className="text-center mt-16">
//               <CtaLink href="/request-documents" variant="outline-dark">
//                 お問い合わせ <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </CtaLink>
//             </div>
//           </FadeIn>
//         </div>
//       </section>
// 
//       {/* ===== FAQ ===== */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-[800px] mx-auto px-6 md:px-10">
//           <FadeIn>
//             <p className="font-en font-semibold text-sm text-gray-400 tracking-[0.2em] text-center mb-2">FAQ</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">よくあるご質問</h2>
//           </FadeIn>
// 
//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <FadeIn key={i} delay={i * 80}>
//                 <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
//                   <div className="flex items-start gap-4">
//                     <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-bold font-en">Q</span>
//                     <div>
//                       <h3 className="font-bold text-base mb-3">{faq.q}</h3>
//                       <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
// 
//       {/* ===== CTA — Black BG ===== */}
//       <section className="relative py-24 bg-black text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1),transparent_70%)]" />
//         <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 text-center">
//           <FadeIn>
//             <p className="font-en tracking-wide font-semibold text-sm text-white/40 mb-4">Contact Us</p>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">すべての社員に、もう一人の力を。</h2>
//             <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
//               Ascend Agent &#8212; あなた専属のAIアシスタント。
//               <br />
//               まずはお気軽にお問い合わせください。
//             </p>
//             <CtaLink href="/request-documents" variant="outline-light-invert">
//               お問い合わせ <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </CtaLink>
//             <div className="flex items-center justify-center gap-6 mt-12 text-xs text-white/30">
//               <Link href="/terms" className="hover:text-white/60 transition-colors">
//                 利用規約
//               </Link>
//               <span>|</span>
//               <Link href="/ascendai-privacy" className="hover:text-white/60 transition-colors">
//                 プライバシーポリシー
//               </Link>
//             </div>
//           </FadeIn>
//         </div>
//       </section>
//     </>
//   )
// }
