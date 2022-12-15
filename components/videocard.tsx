import React from 'react'
import { Chat } from './chat'

export const VideoCard = () => {
  return (
    <div className='container'>
        <video autoPlay loop muted playsInline className='relative w-full h-full object-cover'>
            <source src="/assets/bg-1.mp4" type="video/mp4" />
            <source src="/assets/bg-1.webm" type="video/webm" />
        </video>
        <Chat />
    </div>
  )
}
