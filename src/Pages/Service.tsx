import ItsNotAbout from '../components_test/ServicePageComponents/ItsNotAbout'
import ClinicalFacial from '../components_test/ServicePageComponents/ClinicalFacial'
import PackagesAreComing from '../components_test/ServicePageComponents/PackagesAreComing'
import Process from '../components_test/ServicePageComponents/Process'
import BottomNav from '../components_test/BottomNav'
import Footer from '../components_test/Footer'
import UnlockYourBestSkin from '../components_test/ServicePageComponents/UnlockYourBestSkin'
import Cheker from '../components_test/ServicePageComponents/Cheker'

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
