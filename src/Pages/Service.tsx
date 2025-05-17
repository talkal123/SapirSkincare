import ItsNotAbout from '../Components/ServicePageComponents/ItsNotAbout'
import ClinicalFacial from '../Components/ServicePageComponents/ClinicalFacial'
import PackagesAreComing from '../Components/ServicePageComponents/PackagesAreComing'
import Process from '../Components/ServicePageComponents/Process'
import BottomNav from '../Components/BottomNav'
import Footer from '../Components/Footer'
import UnlockYourBestSkin from '../Components/ServicePageComponents/UnlockYourBestSkin'
import Cheker from '../Components/ServicePageComponents/Cheker'

const Service = () => {
  return (
    <div style={{ backgroundColor: 'rgba(237, 235, 228, 1)', fontFamily: "Wix Madefor Text sans-serif"}}>
      <ItsNotAbout />
      <ClinicalFacial />
      <PackagesAreComing />
      <Process />
      <UnlockYourBestSkin />
      <Cheker />
      <BottomNav />
      <Footer />
      
    </div>
  )
}

export default Service
