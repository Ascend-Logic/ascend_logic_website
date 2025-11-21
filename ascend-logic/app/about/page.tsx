import { Metadata } from 'next';
import Section from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
// import { TeamMember, Award } from '../../types';

export const metadata: Metadata = {
  title: '会社概要',
  description: 'Ascend Logicの会社概要、ビジョン、ミッション、役員紹介、沿革についてご紹介します。',
};

export default function About() {
  const company = {
    name: '株式会社Ascend Logic',
    founded: '2025年12月予定',
    capital: '50万円',
    employees: '10名（業務委託含む）',
    ceo: '早乙女 琉真',
    address: '（※設立登記後に正式決定）',
    branches: [''],
    business: [
      'AIソリューション開発',
      'プロセス自動化',
      'データ分析・予測',
      'AI導入コンサルティング',
    ],
  };

  // const members: TeamMember[] = [
  //   {
  //     id: 1,
  //     name: '山田 太郎',
  //     position: '代表取締役CEO',
  //     profile: '大手IT企業でのAI研究開発責任者を経て2020年に当社を創業。スタンフォード大学コンピュータサイエンス博士。',
  //     imagePath: '/images/ceo.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: '佐藤 花子',
  //     position: 'CTO',
  //     profile: '世界的テクノロジー企業で機械学習エンジニアとして10年の経験を持つ。東京大学工学部卒業、MIT人工知能研究所修了。',
  //     imagePath: '/images/cto.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: '鈴木 一郎',
  //     position: 'COO',
  //     profile: '大手コンサルティングファームでデジタルトランスフォーメーション部門を率いた経験を持つ。慶應義塾大学経済学部卒業。',
  //     imagePath: '/images/coo.jpg',
  //   },
  // ];

  // const awards: Award[] = [
  //   {
  //     id: 1,
  //     title: '日本AI技術大賞2024',
  //     organization: '一般社団法人日本AI協会',
  //     year: '2024年',
  //   },
  //   {
  //     id: 2,
  //     title: 'イノベーティブカンパニー100',
  //     organization: '経済産業省',
  //     year: '2023年',
  //   },
  //   {
  //     id: 3,
  //     title: 'テクノロジーファストグロース50',
  //     organization: '日経ビジネス',
  //     year: '2023年',
  //   },
  // ];

  return (
    <>
      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">会社概要</h1>
          <p className="text-xl max-w-3xl">
            Ascend Logicは、最先端のAI技術で企業のデジタルトランスフォーメーションを加速する
            テクノロジーカンパニーです。
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">ビジョン</h2>
              <div className="text-xl text-gray-800 leading-relaxed">
                <p className="mb-4">
                  「AIの力で、すべての企業と個人の可能性を解き放つ」
                </p>
                <p>
                  AIは単なる技術革新ではなく、人間の創造性と可能性を拡張するツールです。
                  私たちは最先端のAI技術を活用し、企業や個人が直面する複雑な課題を解決し、
                  新たな価値創造を実現するパートナーであり続けます。
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">ミッション</h2>
              <div className="text-xl text-gray-800 leading-relaxed">
                <p className="mb-4">
                  「最先端のAI技術を、誰もが活用できるものに」
                </p>
                <p>
                  高度に専門的なAI技術を、あらゆる業種・規模の企業が簡単に導入・活用できるソリューションとして提供します。
                  私たちは技術の民主化を通じて、社会全体のデジタルトランスフォーメーションを加速します。
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">会社情報</h2>
            <Card className="max-w-3xl mx-auto">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top w-1/3">会社名</th>
                    <td className="py-3">{company.name}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top">設立</th>
                    <td className="py-3">{company.founded}</td>
                  </tr>
                  {/* <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top">資本金</th>
                    <td className="py-3">{company.capital}</td>
                  </tr> */}
                  {/* <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top">従業員数</th>
                    <td className="py-3">{company.employees}</td>
                  </tr> */}
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top">代表者</th>
                    <td className="py-3">{company.ceo}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top">本社所在地</th>
                    <td className="py-3">{company.address}</td>
                  </tr>
                  {/* <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top">事業所</th>
                    <td className="py-3">{company.branches.join('、')}</td>
                  </tr> */}
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600 align-top">事業内容</th>
                    <td className="py-3">
                      <ul className="list-disc list-inside">
                        {company.business.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          {/* <div>
            <h2 className="text-3xl font-bold mb-10 text-center">受賞歴</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award) => (
                <Card key={award.id} className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-indigo-600 mb-1">{award.organization}</p>
                  <p className="text-gray-600">{award.year}</p>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </Section>
    </>
  );
}
