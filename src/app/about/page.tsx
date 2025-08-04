import Banner from '@/components/AboutComponents/Banner'
import OurAbout from '@/components/AboutComponents/OurAbout'
import OurAboutUsTwo from '@/components/AboutComponents/OurAboutUsTwo'
import OurTeam from '@/components/AboutComponents/OurTeam'
import OurTestimonials from '@/components/AboutComponents/OurTestimonials'
import VideoLayout from '@/components/AboutComponents/VideoLayout'
import Partners from '@/components/HomeComponents/Partners'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner />
    <OurAbout/>
    <VideoLayout />
    <OurAboutUsTwo />
    <OurTeam />
    <OurTestimonials />\
    <Partners />
    </>
  )
}

export default page