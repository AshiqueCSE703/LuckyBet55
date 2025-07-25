// importing Carousel Banner images
import Carousel1 from '../../assets/Banners/Banner-1.png'
import Carousel2 from '../../assets/Banners/Banner-2.png'
import Carousel3 from '../../assets/Banners/Banner-3.png'
import Carousel4 from '../../assets/Banners/Banner-4.png'

const Carousel = () => {
  return (
    <>
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                    src={Carousel1}
                    className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                    src={Carousel2}
                    className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                    src={Carousel3}
                    className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                    src={Carousel4}
                    className="w-full" />
                </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                </div>
        </div>
    </>
  )
}

export default Carousel
