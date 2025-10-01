import { Card } from '../ui/Card';
import { Service } from '../../types';

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'AIソリューション開発',
      description: '業務課題に最適化されたカスタムAIソリューションを開発します。データ分析から実装、運用まで一括サポート。',
      icon: '💡',
    },
    {
      id: 2,
      title: 'プロセス自動化',
      description: '反復的な業務プロセスをAIで自動化し、業務効率化とコスト削減を実現します。',
      icon: '⚙️',
    },
    {
      id: 3,
      title: 'データ分析・予測',
      description: '蓄積されたデータから価値ある洞察を抽出し、将来予測と意思決定をサポートします。',
      icon: '📊',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card key={service.id}>
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </Card>
      ))}
    </div>
  );
}
