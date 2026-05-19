'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageHero from '../../components/ui/PageHero'
import FadeIn from '../../components/ui/FadeIn'

interface FormState {
  company: string
  name: string
  email: string
  phone: string
  position: string
  interests: string[]
  message: string
  consent: boolean
}

export default function RequestDocuments() {
  const [formState, setFormState] = useState<FormState>({
    company: '',
    name: '',
    email: '',
    phone: '',
    position: '',
    interests: [],
    message: '',
    consent: false,
  })

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      const { checked } = target

      if (name === 'consent') {
        setFormState((prev) => ({ ...prev, [name]: checked }))
      } else {
        setFormState((prev) => {
          const updatedInterests = [...prev.interests]
          if (checked) {
            updatedInterests.push(value)
          } else {
            const index = updatedInterests.indexOf(value)
            if (index !== -1) {
              updatedInterests.splice(index, 1)
            }
          }
          return { ...prev, interests: updatedInterests }
        })
      }
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    if (!formState.company || !formState.name || !formState.email || !formState.consent) {
      setError('必須項目を入力してください')
      setSubmitting(false)
      return
    }

    fetch('/api/request-documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then(() => {
        setSubmitting(false)
        setSubmitted(true)
      })
      .catch((error) => {
        console.error('送信エラー:', error)
        setSubmitting(false)
        setSubmitted(true)
      })
  }

  const services = [
    { id: 'ai-solutions', label: 'AIソリューション開発' },
    { id: 'process-automation', label: 'プロセス自動化' },
    { id: 'data-analysis', label: 'データ分析・予測' },
    { id: 'ai-consulting', label: 'AI導入コンサルティング' },
  ]

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm'

  return (
    <>
      <PageHero titleEn="Contact" titleJa="お問い合わせ" description="Ascend Logicへのお問い合わせはこちらから。ご興味のある分野をお選びいただき、ご入力ください。" />

      <section className="py-20">
        <div className="max-w-[700px] mx-auto px-6 md:px-10">
          {!submitted ? (
            <FadeIn>
              <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
                <h2 className="section-title-en text-sm text-gray-400 tracking-widest mb-2">Form</h2>
                <p className="text-xl font-bold mb-8">お問い合わせフォーム</p>

                {error && <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2" htmlFor="company">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="company" name="company" className={inputClass} value={formState.company} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2" htmlFor="name">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="name" name="name" className={inputClass} value={formState.name} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2" htmlFor="email">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" className={inputClass} value={formState.email} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2" htmlFor="phone">
                      電話番号
                    </label>
                    <input type="tel" id="phone" name="phone" className={inputClass} value={formState.phone} onChange={handleChange} />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2" htmlFor="position">
                      役職
                    </label>
                    <input type="text" id="position" name="position" className={inputClass} value={formState.position} onChange={handleChange} />
                  </div>

                  <div>
                    <fieldset>
                      <legend className="block text-sm text-gray-600 mb-3">ご興味のある分野（複数選択可）</legend>
                      <div className="space-y-2">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={service.id}
                              name="interests"
                              value={service.id}
                              checked={formState.interests.includes(service.id)}
                              onChange={handleChange}
                              className="mr-3 accent-gray-800"
                            />
                            <label htmlFor={service.id} className="text-sm text-gray-700">
                              {service.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2" htmlFor="message">
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={inputClass}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="ご質問・ご要望などがございましたらご記入ください"
                    />
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" id="consent" name="consent" checked={formState.consent} onChange={handleChange} className="mt-1 mr-3 accent-gray-800" required />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      <span className="text-red-500 mr-1">*</span>
                      <Link href="/privacy-policy" className="text-gray-800 underline underline-offset-2 hover:text-indigo-600 transition-colors" target="_blank" rel="noopener noreferrer">
                        プライバシーポリシー
                      </Link>
                      に同意します
                    </label>
                  </div>

                  <div className="text-center pt-4">
                    <button type="submit" disabled={submitting} className="pill-btn disabled:opacity-50 disabled:cursor-not-allowed">
                      {submitting ? '送信中...' : '送信する'}
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h2>
                <p className="text-gray-500 mb-2">お問い合わせ内容を承りました。</p>
                <p className="text-gray-500 mb-10">担当者より2営業日以内にご連絡させていただきます。</p>
                <Link href="/" className="pill-btn">
                  トップページに戻る
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="section-title-en text-sm text-gray-400 tracking-widest mb-2">FAQ</h2>
              <p className="text-xl font-bold">よくあるご質問</p>
            </div>
          </FadeIn>
          <div className="space-y-0 border-t border-gray-200">
            {[
              {
                q: 'どのような内容でも問い合わせできますか？',
                a: 'はい。サービスに関するご質問、導入のご相談、お見積りのご依頼など、どのような内容でもお気軽にお問い合わせください。',
              },
              {
                q: '回答までどのくらいかかりますか？',
                a: '通常2営業日以内にご連絡させていただきます。土日祝日をまたぐ場合は、翌営業日の対応となりますのでご了承ください。',
              },
              {
                q: 'お問い合わせ後の流れを教えてください',
                a: 'お問い合わせ内容を確認後、弊社コンサルタントよりご連絡させていただきます。具体的なご相談やお見積りをご希望の場合は、詳細をヒアリングさせていただき、最適なソリューションをご提案いたします。',
              },
            ].map((faq, index) => (
              <FadeIn key={index} delay={index * 80}>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
