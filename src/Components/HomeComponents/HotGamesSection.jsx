
// React Icons 
import { FaFire } from "react-icons/fa";

// games  images 
import SuperAceImg from '../../assets/Games/SuperAce.png'
import BoxingKingImg from '../../assets/Games/BoxingKing.png'
import GoldenEmpireImg from '../../assets/Games/GoldenEmpire.png'
import FortuneGemsImg from '../../assets/Games/FortuneGems.png'
import WildBountyShowdown from '../../assets/Games/WildBountyShowdown.png'
import Triple7ClassicStyle from '../../assets/Games/777ClassicStyle.png'
import KAGamingImg from '../../assets/Games/KAGaming.png'
import MoneyComingImg from '../../assets/Games/MoneyComing.png'
import GoldenBank from '../../assets/Games/GoldenBank.png'
import AviatorImg from '../../assets/Games/Aviator.png'
import FortuneJames3Img from '../../assets/Games/FortuneJames3.png'
import HappyFishingImg from '../../assets/Games/HappyFishing.png'
import HappyFishing2Img from '../../assets/Games/HappyFishing2.png'
import SuperAceDeluxeImg from '../../assets/Games/SuperAceDeluxe.png'
import CrazyTimeImg from '../../assets/Games/CrazyTime.png'
import PartyStarImg from '../../assets/Games/PartyStar.png'
import FortuneKingJackpotImg from '../../assets/Games/FortuneKingJackpot.png'
import DominoGoImg from '../../assets/Games/DominoGo.png'
import UltimateTexasHoldImg from '../../assets/Games/UltimateTexasHoldem.png'
import up7downImg from '../../assets/Games/7up7down.png'
import wicketsImg from '../../assets/Games/wicketsImg.png'
import LuckySportsImg from '../../assets/Games/LuckySports.png'
import BTiImg from '../../assets/Games/BTi.png'
import TFImg from '../../assets/Games/TFImg.png'
import IAImg from '../../assets/Games/IAimg.png'
import SportsBettingBannerImg from '../../assets/Games/SportsBettingBanner.png'

// Live Games 
import SpanishBlackjack3Img from '../../assets/Games/SpanishBlackjack3.png'
import SpanishBlackjack2Img from '../../assets/Games/SpanishBlackjack2.png'
import SpanishBlackjack1Img from '../../assets/Games/SpanishBlackjack1.png'

const HotGamesSection = () => {
  return (
    <>
        <div>

            {/* Hot Games Tag  */}
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
                <img src={MoneyComingImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Money Comi</div>
            </div>
            <div className="w-[100px]">
                <img src={GoldenBank} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Golden Bank</div>
            </div>
            <div className="w-[100px]">
                <img src={FortuneGemsImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Fortune Gems</div>
            </div>
            <div className="w-[100px]">
                <img src={BoxingKingImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Boxing King</div>
            </div>
            <div className="w-[100px] text-sm">
                <img src={GoldenEmpireImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center py-[2px]">Boxing Empire</div>
            </div>
            <div className="w-[100px]">
                <img src={KAGamingImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">KA Gaming</div>
            </div>
            <div className="w-[100px]">
                <img src={WildBountyShowdown} alt="" />
                <div className="bg-blue-500 w-[100px] text-center overflow-x-hidden">Wild Bount..</div>
            </div>
            <div className="w-[100px]">
                <img src={Triple7ClassicStyle} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">777-Classic ...</div>
            </div>
            <div className="w-[100px]">
                <img src={AviatorImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Aviator</div>
            </div>
            <div className="w-[100px]">
                <img src={FortuneJames3Img} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Fortu.. James3</div>
            </div>
            <div className="w-[100px]">
                <img src={HappyFishingImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Happy Fish..</div>
            </div>
            <div className="w-[100px]">
                <img src={SuperAceDeluxeImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">SuperAce De..</div>
            </div>
            
            <div className="w-[100px]">
                <img src={CrazyTimeImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Crazy Time</div>
            </div>
            <div className="w-[100px]">
                <img src={PartyStarImg} alt="" />
                <div className="bg-blue-500 w-[100px] text-center">Party Star</div>
            </div>

        </div>

        </div>

        <div>
            {/* Live Games Tag  */}
            <div className="flex gap-2 items-center btn btn-ghost w-[100px] rounded-r-4xl border-1 border-l-4 border-white ml-4">
                <FaFire />
                Live
            </div>

            {/* Games  */}
            <div className="grid grid-cols-3 gap-2 m-8 ml-12 justify-between">
                <div className="w-[100px]">
                    <img src={SpanishBlackjack3Img} alt="" />
                    <div className="bg-blue-500 w-[100px] text-center">Spanish Blackjack 3</div>
                </div>
                <div className="w-[100px]">
                    <img src={SpanishBlackjack2Img} alt="" />
                    <div className="bg-blue-500 w-[100px] text-center">Spanish Blackjack 2</div>
                </div>
                <div className="w-[100px]">
                    <img src={SpanishBlackjack1Img} alt="" />
                    <div className="bg-blue-500 w-[100px] text-center">Spanish Blackjack 1</div>
                </div>
            </div>
        </div>



        <div>
            {/* Fishing games  */}
            <div>
                {/* Live Games Tag  */}
                <div className="flex gap-2 items-center btn btn-ghost w-[100px] rounded-r-4xl border-1 border-l-4 border-white ml-4">
                    <FaFire />
                    Slots
                </div>

                {/* Games  */}
                <div className="grid grid-cols-3 gap-2 m-8 ml-12 justify-between">
                    <div className="w-[100px]">
                        <img src={SuperAceImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">Super Ace</div>
                    </div>
                    <div className="w-[100px]">
                        <img src={BoxingKingImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">Boxing King</div>
                    </div>
                    <div className="w-[100px]">
                        <img src={FortuneGemsImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">Fortune Gems</div>
                    </div>
                </div>
            </div>
        </div>



        
        <div>
            {/* Fishing Games Tag  */}
            <div className="flex gap-2 items-center btn btn-ghost w-[100px] rounded-r-4xl border-1 border-l-4 border-white ml-4">
                <FaFire />
                Fishing
            </div>

            {/* Games  */}
            <div className="grid grid-cols-3 gap-2 m-8 ml-12 justify-between">
                <div className="w-[100px]">
                    <img src={FortuneKingJackpotImg} alt="" />
                    <div className="bg-blue-500 w-[100px] text-center ">Fortune King </div>
                </div>
                <div className="w-[100px]">
                    <img src={HappyFishingImg} alt="" />
                    <div className="bg-blue-500 w-[100px] text-center">Happy Fish..</div>
                </div>
                <div className="w-[100px]">
                    <img src={HappyFishing2Img} alt="" />
                    <div className="bg-blue-500 w-[100px] text-center">Happy Fish..</div>
                </div>
                
            </div>
        </div>
        
        
        <div>
            {/* Poker games  */}
            <div>
                {/* Live Games Tag  */}
                <div className="flex gap-2 items-center btn btn-ghost w-[100px] rounded-r-4xl border-1 border-l-4 border-white ml-4">
                    <FaFire />
                    Poker
                </div>

                {/* Games  */}
                <div className="grid grid-cols-3 gap-2 m-8 ml-12 justify-between">
                    <div className="w-[100px]">
                        <img src={DominoGoImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center ">Domino Go</div>
                    </div>
                    <div className="w-[100px]">
                        <img src={UltimateTexasHoldImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">Ultimate Tex..</div>
                    </div>
                    <div className="w-[100px]">
                        <img src={up7downImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">7up7down</div>
                    </div>
                    
                </div>
            </div>

        </div>



        <div>
            {/* Sports games  */}
            <div>
                {/* Live Games Tag  */}
                <div className="flex gap-2 items-center btn btn-ghost w-[100px] rounded-r-4xl border-1 border-l-4 border-white ml-4">
                    <FaFire />
                    Sports
                </div>

                {/* Games  */}
                <div className="grid grid-cols-3 gap-2 m-8 ml-12 justify-between">
                    <div className="w-[100px]">
                        <img src={wicketsImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center ">9wickets</div>
                    </div>
                    <div className="w-[100px]">
                        <img src={LuckySportsImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">LuckySports</div>
                    </div>
                    <div className="w-[100px]">
                        <img src={BTiImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">BTi</div>
                    </div>
                    
                </div>
            </div>

        </div>



        <div>
            {/* E-sports games  */}
            <div>
                {/* Live Games Tag  */}
                <div className="flex gap-2 items-center btn btn-ghost w-[120px] rounded-r-4xl border-1 border-l-4 border-white ml-4">
                    <FaFire />
                    E-sports
                </div>

                {/* Games  */}
                <div className="grid grid-cols-3 gap-2 m-8 ml-12 justify-between">
                    <div className="w-[100px]">
                        <img src={TFImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center ">TF</div>
                    </div>
                    <div className="w-[100px]">
                        <img src={IAImg} alt="" />
                        <div className="bg-blue-500 w-[100px] text-center">IA</div>
                    </div>
                    
                </div>
            </div>

        </div>
            


        <div>
            {/* Sports Beting Banner  */}
            <div className="my-12">
                <img src={SportsBettingBannerImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default HotGamesSection
