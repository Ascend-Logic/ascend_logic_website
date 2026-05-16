import { NewsItem } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: 3,
    title: 'メディア「nozokuru」にインタビュー記事が掲載されました',
    date: '2026年4月23日',
    category: 'メディア掲載',
    excerpt:
      'ビジネスメディア「nozokuru」のインタビューを受けました。「現場ヒアリングなき開発は失敗する」をテーマに、起業の経緯やAscend Logicが掲げる現場主義のAI開発についてお話ししています。',
    url: 'https://nozokuru.jp/ascend-logic-saotome/',
  },
  {
    id: 2,
    title: '会社設立登記完了のお知らせ',
    date: '2025年12月26日',
    category: 'お知らせ',
    excerpt:
      '株式会社Ascend Logicは、2025年12月26日をもちまして、会社設立の登記が完了いたしました。今後ともよろしくお願い申し上げます。',
    url: '/news/2',
  },
];
