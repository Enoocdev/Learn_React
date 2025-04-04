import  { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { TwiterFollowCard } from './TwiterFollowCard.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <div className='App'>
    <TwiterFollowCard userName="Vxnder" isFollowing={false}>
      VanderHart
    </TwiterFollowCard>
    <TwiterFollowCard userName="Enoocdev" name="" isFollowing>
      Enooc Dominguez Quiroga
    </TwiterFollowCard>
  </div>
)
