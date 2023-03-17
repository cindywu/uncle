import React from 'react'
import MuxVideo from '@mux/mux-video-react'

export default function Home() {
  return (
    <div className={'h-screen bg-black'}>
      <MuxVideo
        style={{ height: '100%', maxWidth: '100%' }}
        playbackId="6L021UxLzF019YGt01L8ClRtBG0200Uju7Y00z"
        metadata={{
          video_id: 'video-id-123456',
          video_title: 'gin-weigh-wu',
          viewer_user_id: 'user-id-bc-789',
        }}
        streamType="on-demand"
        controls
        autoPlay
        muted
      />
    </div>
  )
}
