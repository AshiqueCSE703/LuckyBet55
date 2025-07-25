// react icons 
import { RxCross2 } from "react-icons/rx";

// Custom logo 
import Logo from '../../assets/logo.png'

const HeaderDownload = () => {
  return (
    <>
        <div className="bg-blue-900">
            <div className="flex justify-between">
                <div className="m-4"><RxCross2 /></div>
                <div className="flex justify-between items-center"> 
                    <img className="w-8 mx-4" src={Logo} alt="" />
                    <p>APP ডাউনলোড করুন</p>
                </div>
                <div>
                  <button className="btn btn-primary my-1">
                    Download
                  </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderDownload
