import Connect from '../Components/ContactPageComponents/Connect'
import BottomNav from '../Components/BottomNav'
import Footer from '../Components/Footer'
import ConnectDesktop from '../Components/ContactPageComponents/ConnectDesktop'
import Details from '../Components/ContactPageComponents/Details'

const Contact = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)" }}>
      <Connect />
      <ConnectDesktop />
      <Details />
      <BottomNav />
      <Footer />
    </div>
  )
}

export default Contact
