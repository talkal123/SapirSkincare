import Connect from '../Components/AboutPageComponents/Connect'
import OurGoals from '../Components/AboutPageComponents/OurGoals'
import TheTeam from '../Components/AboutPageComponents/TheTeam'
import WelcomeSapir from '../Components/AboutPageComponents/WelcomeSapir'
import WhoWeAre from '../Components/AboutPageComponents/WhoWeAre'
import BottomNav from '../Components/BottomNav'
import Footer from '../Components/Footer'

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