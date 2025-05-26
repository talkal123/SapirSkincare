import NotAboutNow from '../components_test/HomePageComponents/NotAboutNow'
import Welcome from '../components_test/HomePageComponents/Welcome'
import Service from '../components_test/HomePageComponents/Service'
import Reviews from '../components_test/HomePageComponents/Reviews'
import WhyYou from '../components_test/HomePageComponents/WhyYou'
import Connect from '../components_test/HomePageComponents/Connect'
import AsSeenOn from '../components_test/HomePageComponents/AsSeenOn'
import BottomNav from '../components_test/BottomNav'
import Footer from '../components_test/Footer'

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
