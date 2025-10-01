import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '資料請求',
  description: 'Ascend Logicのサービス資料をご請求いただけます。AI導入に関する最新情報や事例をお届けします。',
};

export default function RequestDocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
