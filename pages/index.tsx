import React from 'react'
import Iframe from 'react-iframe'

export default function Home() {
  return (
    <div className={'h-screen bg-black'}>
      hello
      <Iframe url="https://elasticbeanstalk-us-east-2-989071256297.s3.us-east-2.amazonaws.com/Gin+Weigh+Wu.mp4"
        id=""
        className={'w-screen h-screen'}
        display="block"
        position="relative"
      />
    </div>
  )
}
