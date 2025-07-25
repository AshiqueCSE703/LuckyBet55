
// React Icons 
import { FaFire } from "react-icons/fa";

// games  images 
import SuperAceImg from '../../assets/Games/SuperAce.webp'


const HotGamesSection = () => {
  return (
    <>
        <div className="flex gap-2 items-center btn btn-ghost w-[100px] rounded-r-4xl border-1 border-l-4 border-white ml-4">
            <FaFire />
            Hot
        </div>

        {/* Games  */}
        <div className="grid grid-cols-3 gap-2 m-8 ml-12 justify-between">
            <div className="w-[100px]">
                <img src={SuperAceImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Super Ace</div>
            </div>
            <div className="w-[100px]">
                <img src={SuperAceImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Super Ace</div>
            </div>
            <div className="w-[100px]">
                <img src={SuperAceImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Super Ace</div>
            </div>
            <div className="w-[100px]">
                <img src={SuperAceImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Super Ace</div>
            </div>
            <div className="w-[100px]">
                <img src={SuperAceImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Super Ace</div>
            </div>
            <div className="w-[100px]">
                <img src={SuperAceImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Super Ace</div>
            </div>
        </div>
    </>
  )
}

export default HotGamesSection
