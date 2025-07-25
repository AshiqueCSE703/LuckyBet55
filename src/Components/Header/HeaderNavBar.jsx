// react icons 
import { TfiMenu } from "react-icons/tfi";
import { FaGift } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { BiSolidDonateBlood } from "react-icons/bi";
import { TbVip } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaMobileAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaEarthAmericas } from "react-icons/fa6";

// Custom Logo 
import Logo from "../../assets/logo.png"
import Deposit from "../../assets/deposit.png"
import Withdraw from "../../assets/withdraw.png"
import Rebate from "../../assets/rebate.png"


const HeaderNavBar = () => {
  return (
    <>
        <div>
            <div className="bg-gray-700 flex justify-around items-center">
                {/* menu btn  */}
                <div className="flex items-center">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="mx-8">

                                <TfiMenu />

                            </label>
                        </div>
                        <div className="drawer-side mt-30 ">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-65 p-4">
                            
                            {/* Sidebar content here */}
                                <div className="text-sm">
                                    <div className="flex p-4 justify-around items-center bg-gray-800 my-4 ">
                                        <div>
                                                <img className="w-8 mx-auto" src={Deposit} alt="" />
                                                <p className="font-bold">Deposit</p>
                                        </div>
                                        <div>
                                                <img className="w-8 mx-auto" src={Withdraw} alt="" />
                                                <p className='font-bold'>Withdraw</p>
                                        </div>
                                        <div>
                                                <img className="w-8 mx-auto" src={Rebate} alt="" />
                                                <p className='font-bold'>Rebate</p>
                                        </div>
                                    </div>
                                        {/* More options  */}
                                        <div className="grid gap-4 ">
                                            <button className="btn btn-primary w-full flex gap-2 text-sm">
                                                <FaGift className="w-12" /> 
                                                <p >Promotion</p>
                                            </button>
                                            <button className="btn btn-primary w-full flex gap-2 text-sm">
                                                <FaTrophy className="w-12" /> 
                                                <p >Missions</p>
                                            </button>
                                            <button className="btn btn-primary w-full flex gap-2 text-sm">
                                                <TbFidgetSpinner className="w-12" /> 
                                                <p >Free Spins</p>
                                            </button>
                                            <button className="btn btn-primary w-full flex gap-2 text-sm">
                                                <BiSolidDonateBlood className="w-12" /> 
                                                <p >Red Envelope</p>
                                            </button>
                                            <button className="btn btn-primary w-full flex gap-2 text-sm">
                                                <TbVip className="w-12" /> 
                                                <p >Vip Bonus</p>
                                            </button>
                                            <button className="btn btn-primary w-full flex gap-2 text-sm">
                                                <FaUserFriends className="w-12" />
                                                <p >Invite Friends</p>
                                            </button>
                                            <button className="btn bg-gray-500 w-full flex gap-2 text-sm">
                                                <RxAvatar className="w-12" />
                                                <p >My Account</p>
                                            </button>
                                            <button className="btn bg-gray-500 w-full flex gap-2 text-sm">
                                                <FaMobileAlt className="w-12" />
                                                <p >App Download</p> 
                                            </button>
                                            <button className="btn bg-gray-500 w-full flex gap-2 text-sm">
                                                <RiCustomerService2Fill className="w-12" />
                                                <p >Customer Service</p>
                                            </button>
                                            <button className="btn bg-gray-500 w-full flex gap-2 text-sm">
                                                <FaEarthAmericas className="w-12" />
                                                <p >Language</p>
                                            </button>
                                            <button className="text-sm btn bg-violet-500 rounded-2xl w-full flex gap-2 my-4">
                                                {/* <FaEarthAmericas className="w-12" /> */}
                                                <p >Logout</p>
                                            </button>
                                        </div>
                                    <div>

                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                    <img className="w-8 h-8" src={Logo} alt="" />
                </div>

                {/* logo  */}
                <div className="">
                    LuckyBet55
                </div>

                {/* Signup & signin  */}
                <div className="px-2">
                    <button className="btn rounded-2xl">
                        Signup 
                    </button>
                    <button className="btn btn-primary ml-4 rounded-2xl">
                        Signin
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderNavBar
