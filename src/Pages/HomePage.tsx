import React from 'react'
import NotAboutNow from '../Components/HomePageComponents/NotAboutNow.tsx'
import Welcome from '../Components/HomePageComponents/Welcome.tsx'
import Service from '../Components/HomePageComponents/Service.tsx'
import Reviews from '../Components/HomePageComponents/Reviews.tsx'
import WhyYou from '../Components/HomePageComponents/WhyYou.tsx'
import Connect from '../Components/HomePageComponents/Connect.tsx'
import AsSeenOn from '../Components/HomePageComponents/AsSeenOn.tsx'
import BottomNav from '../Components/BottomNav.tsx'
import Footer from '../Components/Footer.tsx'

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'rgba(237, 235, 228, 1)',fontFamily: "Wix Madefor Text sans-serif" }}>
      <NotAboutNow />
      <Welcome />
      <Service />
      <Reviews />
      <WhyYou />
      <Connect />
      <AsSeenOn />
      <BottomNav />
      <Footer />
    </div>
  )
}

export default HomePage
