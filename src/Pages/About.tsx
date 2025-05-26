import Connect from '../components_test/AboutPageComponents/Connect'
import OurGoals from '../components_test/AboutPageComponents/OurGoals'
import TheTeam from '../components_test/AboutPageComponents/TheTeam'
import WelcomeSapir from '../components_test/AboutPageComponents/WelcomeSapir'
import WhoWeAre from '../components_test/AboutPageComponents/WhoWeAre'
import BottomNav from '../components_test/BottomNav'
import Footer from '../components_test/Footer'

const About = () => {
  return (
    <div style={{ backgroundColor: 'rgba(237, 235, 228, 1)',fontFamily: "Wix Madefor Text sans-serif" }}>
      <WelcomeSapir />
      <WhoWeAre />
      <OurGoals />
      <TheTeam />
      <Connect />
      <BottomNav />
      <Footer />
      
    </div>
  )
}

export default About


// min-h-screen