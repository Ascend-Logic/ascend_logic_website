import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="160" height="160">
          <g>
            <polygon points="10,50 28,62 28,86 10,74" fill="#0a1628" />
            <polygon points="46,50 28,62 28,86 46,74" fill="#1f2a3f" />
            <polygon points="28,38 46,50 28,62 10,50" fill="#5a6a82" />
          </g>
          <g>
            <polygon points="32,34 50,46 50,70 32,58" fill="#0a1628" />
            <polygon points="68,34 50,46 50,70 68,58" fill="#1f2a3f" />
            <polygon points="50,22 68,34 50,46 32,34" fill="#5a6a82" />
          </g>
          <g>
            <polygon points="54,18 72,30 72,54 54,42" fill="#5b34c4" />
            <polygon points="90,18 72,30 72,54 90,42" fill="#3f1f9e" />
            <polygon points="72,6 90,18 72,30 54,18" fill="#8e6fe8" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  )
}
