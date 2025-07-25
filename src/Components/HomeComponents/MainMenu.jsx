// React icons 
import { TbHomeCog } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

// Custom image 
import JackpotImage from '../../assets/jackpot.png'

const MainMenu = () => {
  return (
   <>
        <div>
            {/* Main Menu Content  */}
            <div className="grid grid-flow-row grid-cols-4 items-center my-8 ">
                <div className="text-center hover:text-blue-500 cursor-pointer">
                <TbHomeCog className="w-8 mx-auto" />
                Home
                </div>
                <div className="text-center hover:text-blue-500 cursor-pointer">
                    <FaFire className="w-8 mx-auto" />
                    Hot Games
                </div>
                <div className="text-center hover:text-blue-500 cursor-pointer">
                    <img className="w-4 mx-auto" src="https://www.betbdt.vip/m/nav-rng.aab3c1e2.png" alt="slotImage" />
                    Slots
                </div>
                <div className="text-center hover:text-blue-500 cursor-pointer">
                    <MdOutlineFavorite className="w-8 mx-auto" />
                    Favourites
                </div>
            </div>

            {/* Jackpot image  */}
            <img className="w-full" src={JackpotImage}  />
        </div>
   </>
  )
}

export default MainMenu
