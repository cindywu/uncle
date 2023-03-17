import React from 'react'
import Iframe from 'react-iframe'
import MuxVideo from '@mux/mux-video-react'

export default function Home() {
  return (
    <div className={'h-screen bg-black'}>
      {/* <Iframe url="https://elasticbeanstalk-us-east-2-989071256297.s3.us-east-2.amazonaws.com/Gin+Weigh+Wu.mp4"
        width="100%"
        position="absolute"
        height="100%"
      /> */}
      <MuxVideo
        style={{ height: '100%', maxWidth: '100%' }}
        playbackId="oNmujUAE1602hrlvxUlGTe00nJJVWRR4Tyv"
        metadata={{
          video_id: 'video-id-123456',
          video_title: 'gin-weigh-wu',
          viewer_user_id: 'user-id-bc-789',
        }}
        streamType="on-demand"
        controls
        autoPlay
      />
    </div>
  )
}
