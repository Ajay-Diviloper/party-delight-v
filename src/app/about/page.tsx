import Banner from '@/components/AboutComponents/Banner'
import OurAbout from '@/components/AboutComponents/OurAbout'
import OurAboutUsTwo from '@/components/AboutComponents/OurAboutUsTwo'
//import OurTeam from '@/components/AboutComponents/OurTeam'
import OurTestimonials from '@/components/AboutComponents/OurTestimonials'
import VideoLayout from '@/components/AboutComponents/VideoLayout'
//import Partners from '@/components/HomeComponents/Partners'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner />
    <OurAbout/>
    {/* Example 1: Default props */}
    <VideoLayout />
    
    {/* Example 2: Custom text for about page */}
    {/* <VideoLayout 
      circleText="• OUR STORY • OUR STORY • OUR STORY • OUR STORY"
      circleColor="#ff3131"
      circleFontSize={16}
      circleAnimationDuration={15}
    /> */}
    
    {/* Example 3: Different styling */}
    {/* <VideoLayout 
      circleText="• DISCOVER US • DISCOVER US • DISCOVER US • DISCOVER US"
      circleColor="#fff"
      circleFontSize={20}
      circleAnimationDuration={10}
    /> */}
    <OurAboutUsTwo />
    {/* <OurTeam /> */}
    <OurTestimonials />\
    {/* <Partners /> */}
    </>
  )
}

export default page