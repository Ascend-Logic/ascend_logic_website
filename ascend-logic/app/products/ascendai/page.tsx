import { Metadata } from 'next';
import Link from 'next/link';
import Section from '../../../components/ui/Section';

export const metadata: Metadata = {
  title: 'Ascend Agent',
  description: 'Google Calendarと連携し、AIボットを自動起動。会議の録画・文字起こし・議事録生成を完全自動化します。',
  keywords: 'AI議事録, 自動議事録作成, Google Calendar連携, ビデオ会議文字起こし, 会議自動録画, リモートワーク議事録, 議事録自動化, AI会議アシスタント',
  openGraph: {
    title: 'Ascend Agent - AI自動議事録作成サービス',
    description: 'Google Calendarと連携し、AIボットを自動起動。会議の録画・文字起こし・議事録生成を完全自動化します。',
    type: 'website',
  },
};

export default function AscendAgentProductPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <Section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AIが議事録作成を自動化。<br />会議に集中できる環境を。
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Google Calendarと連携し、AIボットが自動で会議に参加。<br />
              録画・文字起こし・議事録生成まで、すべて自動で完了します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#features"
                className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 transition-colors"
              >
                機能を見る
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 主要機能セクション */}
      <Section id="features" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            主要機能
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-indigo-600">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">自動ボット起動</h3>
              <p className="text-gray-700 leading-relaxed">
                カレンダーに登録された会議の15分前に、自動的にAIボットが参加。手動操作は一切不要です。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">AI議事録生成</h3>
              <p className="text-gray-700 leading-relaxed">
                会議の録画・音声・文字起こしを自動生成。重要なポイントを見逃しません。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-600">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">エンタープライズセキュリティ</h3>
              <p className="text-gray-700 leading-relaxed">
                テナント隔離、APIキー暗号化、監査ログ完備。安心してご利用いただけます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-4">シームレスな連携</h3>
              <p className="text-gray-700 leading-relaxed">
                Google Workspace、Google Calendarと完全連携。既存のワークフローをそのまま活用できます。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 使い方セクション */}
      <Section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            3ステップで始められます
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Google Workspaceと連携</h3>
              <p className="text-gray-700">
                お使いのGoogleアカウントで簡単に連携できます。
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">APIキーを設定</h3>
              <p className="text-gray-700">
                管理画面から数クリックで設定完了。
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">あとは自動で動きます</h3>
              <p className="text-gray-700">
                カレンダーに会議を登録するだけで、自動的にボットが参加します。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* セキュリティ・プライバシーセクション */}
      <Section id="security" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            エンタープライズグレードのセキュリティ
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            大企業でも安心してご利用いただける、堅牢なセキュリティ設計
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="text-green-600 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">完全なテナント隔離</h3>
                  <p className="text-gray-700">
                    各組織のデータは完全に分離され、他のテナントからアクセスできません。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="text-green-600 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">APIキー暗号化保存</h3>
                  <p className="text-gray-700">
                    Fernet暗号化（AES 128 CBC + HMAC SHA256）で安全に保管。データベースには暗号化された状態でのみ保存されます。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="text-green-600 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">監査ログ完備</h3>
                  <p className="text-gray-700">
                    すべてのボット起動履歴を記録。いつ、誰が、何をしたか追跡可能です。
                    セキュリティインシデント発生時のトレーサビリティを確保します。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="text-green-600 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">GDPR/SOC2準拠設計</h3>
                  <p className="text-gray-700">
                    データ保護規制に準拠した設計で、個人情報を安全に管理します。
                    エンタープライズ企業でも安心してご利用いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ascendai-privacy"
              className="text-indigo-600 hover:text-indigo-800 font-semibold underline"
            >
              プライバシーポリシーを確認 →
            </Link>
          </div>
        </div>
      </Section>

      {/* ユースケースセクション */}
      <Section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            こんな課題を解決します
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-600">議事録作成の負担軽減</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">問題</p>
                  <p className="text-gray-700">会議に参加しながら議事録を取るのは大変</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">解決</p>
                  <p className="text-gray-700">AIが自動で録画・文字起こし・要約を生成。会議に集中できます。</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-600">重要な会議の記録漏れ防止</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">問題</p>
                  <p className="text-gray-700">重要な会議の内容を記録し忘れてしまう</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">解決</p>
                  <p className="text-gray-700">カレンダーに登録するだけで自動的にボットが参加。記録漏れゼロ。</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-600">リモートワークでの情報共有</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">問題</p>
                  <p className="text-gray-700">参加できなかった会議の内容を後から確認したい</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">解決</p>
                  <p className="text-gray-700">録画・文字起こしが自動保存され、いつでも振り返りが可能。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQセクション */}
      <Section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            よくある質問
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-3">どのビデオ会議サービスに対応していますか？</h3>
              <p className="text-gray-700">
                Google Meet、Zoom、Microsoft Teamsなど、主要なビデオ会議サービスに対応しています。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-3">データはどこに保存されますか？</h3>
              <p className="text-gray-700">
                すべてのデータは暗号化され、安全なクラウドストレージに保存されます。
                GDPR/SOC2に準拠したデータ管理を行っています。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-3">既存のGoogle Workspaceアカウントで使えますか？</h3>
              <p className="text-gray-700">
                はい、お使いのGoogle Workspaceアカウントで簡単に連携できます。
                新しいアカウントを作成する必要はありません。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Google API情報セクション */}
      <Section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Google Workspace連携について
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Google API Services ユーザーデータポリシー遵守</h3>
            <p className="text-gray-700 mb-4">
              Ascend Agentは、Google API Services のユーザーデータポリシー（限定的な使用要件を含む）を完全に遵守しています。
              お客様のGoogleアカウント情報は、サービス提供に必要な範囲でのみ使用され、第三者への共有や広告目的での使用は一切行いません。
            </p>
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 font-semibold underline"
            >
              Google API Services User Data Policy を確認 →
            </Link>

            <h3 className="text-xl font-bold mt-8 mb-4">使用するAPIスコープ</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <code className="text-sm bg-white px-2 py-1 rounded block mb-2">
                  https://www.googleapis.com/auth/calendar.readonly
                </code>
                <p className="text-sm text-gray-600">
                  カレンダーイベントの読み取り専用アクセス（書き込みは行いません）
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <code className="text-sm bg-white px-2 py-1 rounded block mb-2">
                  https://www.googleapis.com/auth/userinfo.email
                </code>
                <p className="text-sm text-gray-600">
                  メールアドレスの取得（アカウント識別用）
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <code className="text-sm bg-white px-2 py-1 rounded block mb-2">
                  https://www.googleapis.com/auth/userinfo.profile
                </code>
                <p className="text-sm text-gray-600">
                  基本プロフィール情報の取得（表示名用）
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA（再訴求） */}
      <Section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ始めて、会議を効率化しましょう
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            アカウントを作成して、すぐに使い始められます
          </p>
        </div>
      </Section>

      {/* フッター情報 */}
      <Section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Ascend Agent</h3>
              <p className="text-gray-400 mb-4">
                AI自動議事録作成サービス
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">サポート</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/request-documents" className="hover:text-white">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-white">
                    機能
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="hover:text-white">
                    セキュリティ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">法的情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/ascendai-privacy" className="hover:text-white">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Ascend Agent. All rights reserved.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
