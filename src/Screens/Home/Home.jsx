import HeaderDownload from "../../Components/Header/HeaderDownload"
import HeaderNavBar from "../../Components/Header/HeaderNavBar"
import Carousel from "../../Components/HomeComponents/Carousel"
import NoticeBar from "../../Components/HomeComponents/NoticeBar"
import MainMenu from "../../Components/HomeComponents/MainMenu"
import HotGamesSection from "../../Components/HomeComponents/HotGamesSection"
import LatestWinner from "../../Components/HomeComponents/LatestWinner"
import DownloadSection from "../../Components/HomeComponents/DownloadSection"


const Home = () => {
  return (
    <>
      <div>
      
        {/* Header Download Tab */}
        <HeaderDownload />

        {/* Header NavBar  */}
        <HeaderNavBar />

        {/* Carousel  */}
        <Carousel />

        {/* Notice Bar  */}
        <NoticeBar />

        {/* Main Menu  */}
        <MainMenu />

        {/* Hot Games Section  */}
        <HotGamesSection />

        {/* Latest winner section  */}
        <LatestWinner />

        {/* Download Section  */}
        <DownloadSection />
      </div>
    </>
  )
}

export default Home
