// Logo 
import Logo from '../../assets/logo.png'

const DownloadSection = () => {
  return (
    <>
        <div className="w-[350px] border-1 mx-auto rounded-xl my-4">
            
            <div className=''>
                {/* text  */}
                <div>
                  <h2 className="font-bold text-xl text-orange-400 m-4 mr-0">
                    BETBDT.com
                  </h2>

                  <div className='flex items-center'>
                    <p className="m-4  mr-0 w-[250px]">
                    Smooth gaming experience, professional service and great deals. This is one of the best online gaming platforms!
                    </p>
                    {/* Logo  */}
                    <div>
                      <img className='w-24 mr-4' src={Logo} alt="" />
                    </div>
                  </div>

                  <span className="ml-4">Download app, maximum reward: </span>

                  <h1 className="font-bold text-3xl text-orange-700 m-4 mr-0">
                    ৳ 588.88
                  </h1>
                </div>

                {/* Buttons  */}
                <div className='w-full grid grid-cols-2 gap-4 justify-around my-4'>
                  <button className='btn btn-primary mx-4 mr-0'>Download</button>
                  <button className='btn btn-primary mx-4 ml-0'>Download</button>
                </div>

            </div>

        </div>
    </>
  )
}

export default DownloadSection
