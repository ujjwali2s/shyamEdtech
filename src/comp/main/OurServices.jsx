import React from 'react'
import Hero from './Hero'
import WebsiteService from "./service/WebsiteService"
import GraphicDesignServices from './service/GraphicService'
import ContentWritingAlt from './service/ContentWriting'
import SocialMediaMarketingAlt from './service/Socialmedia'
import Advertisement from './service/Advertisement'

const OurServices = () => {
  return (
    <div>
      <Hero/>
      <WebsiteService/>
      <GraphicDesignServices/>
      <ContentWritingAlt/>
      <SocialMediaMarketingAlt/>
      <Advertisement/>
      
    </div>
  )
}

export default OurServices
