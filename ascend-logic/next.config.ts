import type { NextConfig } from 'next'
import { codeInspectorPlugin } from 'code-inspector-plugin'

const nextConfig: NextConfig = {
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: 'turbopack',
      hotKeys: ['metaKey'],
      // next/og の ImageResponse 用ファイルは server-only で実行されるため、
      // クライアント側 helper が混入する code-inspector の変換から除外する
      // (turbopack の rules はオプションを直列化するため RegExp は使えず、string 部分一致で指定する)
      exclude: ['/app/apple-icon.', '/app/icon.', '/app/opengraph-image.', '/app/twitter-image.'],
    }),
  },
}

export default nextConfig
