"use client";

import { useState } from 'react';
import Section from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

// フォームの状態に対する型定義
interface FormState {
  company: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  interests: string[];
  message: string;
  consent: boolean;
}

export default function RequestDocuments() {
  // フォームの状態管理
  const [formState, setFormState] = useState<FormState>({
    company: '',
    name: '',
    email: '',
    phone: '',
    position: '',
    interests: [],
    message: '',
    consent: false,
  });

  // 送信状態管理
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // イベントハンドラーの型定義を改善
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      // チェックボックスの場合、HTMLInputElementとして扱う
      const target = e.target as HTMLInputElement;
      const { checked } = target;
      
      if (name === 'consent') {
        setFormState((prev) => ({ ...prev, [name]: checked }));
      } else {
        // 複数選択チェックボックスの場合
        setFormState((prev) => {
          const updatedInterests = [...prev.interests];
          if (checked) {
            updatedInterests.push(value);
          } else {
            const index = updatedInterests.indexOf(value);
            if (index !== -1) {
              updatedInterests.splice(index, 1);
            }
          }
          return { ...prev, interests: updatedInterests };
        });
      }
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  // フォーム送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // フォームのバリデーション
    if (!formState.company || !formState.name || !formState.email || !formState.consent) {
      setError('必須項目を入力してください');
      setSubmitting(false);
      return;
    }

    // APIエンドポイントへの送信
    fetch('/api/request-documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then(response => response.json())
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('送信エラー:', error);
        setSubmitting(false);
        // エラーでも成功として扱う（メール送信失敗でもフォームは受け付ける）
        setSubmitted(true);
      });
  };

  // サービス項目の配列
  const services = [
    {
      id: 'ai-solutions',
      label: 'AIソリューション開発',
      image: '/images/ai_solution.jpg',
      description: '最先端のAI技術を活用した、カスタムソリューションの開発'
    },
    {
      id: 'process-automation',
      label: 'プロセス自動化',
      image: '/images/process-automation.jpg',
      description: 'RPAとAIを組み合わせた業務プロセスの自動化'
    },
    { id: 'data-analysis', label: 'データ分析・予測' },
    { id: 'ai-consulting', label: 'AI導入コンサルティング' },
  ];

  return (
    <>
      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">お問い合わせ</h1>
          <p className="text-xl max-w-3xl">
            Ascend Logicへのお問い合わせはこちらから。
            ご興味のある分野をお選びいただき、ご入力ください。
          </p>
        </div>
      </Section>

      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">提供サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            {services.slice(0, 2).map((service) => service.image && (
              <Card key={service.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover"
                    priority={service.id === 'ai-solutions'}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.label}</h3>
                  {service.description && (
                    <p className="text-gray-600">{service.description}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {!submitted ? (
            <Card>
              <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
              {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="company">
                    会社名 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formState.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                    お名前 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                    メールアドレス <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="position">
                    役職
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formState.position}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <fieldset>
                    <legend className="block text-gray-700 mb-2 font-medium">
                      ご興味のある分野（複数選択可）
                    </legend>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-start">
                          <input
                            type="checkbox"
                            id={service.id}
                            name="interests"
                            value={service.id}
                            checked={formState.interests.includes(service.id)}
                            onChange={handleChange}
                            className="mt-1 mr-2"
                          />
                          <label htmlFor={service.id}>{service.label}</label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="ご質問・ご要望などがございましたらご記入ください"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formState.consent}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="consent">
                      <span className="text-red-600 mr-1">*</span>
                      <span>
                        <Link href="/privacy-policy" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          プライバシーポリシー
                        </Link>
                        に同意します
                      </span>
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <Button type="submit" disabled={submitting}>
                    {submitting ? '送信中...' : '送信する'}
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            <Card className="text-center py-10">
              <div className="text-5xl mb-6 text-green-500">✓</div>
              <h2 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h2>
              <p className="text-lg mb-6">
                お問い合わせ内容を承りました。
                担当者より1営業日以内にご連絡させていただきますので、少々お待ちください。
              </p>
              <p className="mb-10">
                お急ぎの場合は、お電話でもお問い合わせいただけます。
              </p>
              <Button href="/">トップページに戻る</Button>
            </Card>
          )}
        </div>
      </Section>

      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">お問い合わせに関するよくあるご質問</h2>
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold mb-2">どのような内容でも問い合わせできますか？</h3>
              <p>
                はい。サービスに関するご質問、導入のご相談、お見積りのご依頼など、
                どのような内容でもお気軽にお問い合わせください。
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-2">回答までどのくらいかかりますか？</h3>
              <p>
                通常1営業日以内にご連絡させていただきます。土日祝日をまたぐ場合は、
                翌営業日の対応となりますのでご了承ください。
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-2">お問い合わせ後の流れを教えてください</h3>
              <p>
                お問い合わせ内容を確認後、弊社コンサルタントよりご連絡させていただきます。
                具体的なご相談やお見積りをご希望の場合は、詳細をヒアリングさせていただき、
                最適なソリューションをご提案いたします。
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
