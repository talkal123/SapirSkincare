import NotAboutNow from '../Components/HomePageComponents/NotAboutNow'
import Welcome from '../Components/HomePageComponents/Welcome'
import Service from '../Components/HomePageComponents/Service'
import Reviews from '../Components/HomePageComponents/Reviews'
import WhyYou from '../Components/HomePageComponents/WhyYou'
import Connect from '../Components/HomePageComponents/Connect'
import AsSeenOn from '../Components/HomePageComponents/AsSeenOn'
import BottomNav from '../Components/BottomNav'
import Footer from '../Components/Footer'

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
