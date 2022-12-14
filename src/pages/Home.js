import "../App.css"
import "../css/navbar.css"
import "../css/home.css"

import { Carousel } from "../components/Carousel"
import banar1 from "../images/banner-1.jpg"
import banar2 from "../images/banner-2.jpg"
import banar3 from "../images/banner-3.jpg"

export function Home() {

   return (
      <div className="element home pt-5 ">
         <Carousel />
         <div className="d-flex pt-2 flex-wrap justify-content-center gap-2 align-items-center container sale">

            <div className="banar position-relative d-flex align-items-center">
               <div className="text position-absolute">
                  <h5 className="text-capitalize text-black-50">limited offer </h5>
                  <h4 className="text-capitalize">up to 50% off</h4>
                  <button className="btn text-capitalize">shop now</button>
               </div>
               <img className="w-100 " src={banar1} alt="img" />
            </div>

            <div className="banar position-relative d-flex align-items-center">
               <div className="text position-absolute">
                  <h5 className="text-capitalize text-black-50">limited offer </h5>
                  <h4 className="text-capitalize">up to 50% off</h4>
                  <button className="btn text-capitalize">shop now</button>
               </div>
               <img className="w-100 " src={banar2} alt="img" />
            </div>

            <div className="banar position-relative d-flex align-items-center">
               <div className="text position-absolute">
                  <h5 className="text-capitalize text-black-50">limited offer </h5>
                  <h4 className="text-capitalize">up to 50% off</h4>
                  <button className="btn text-capitalize">shop now</button>
               </div>
               <img className="w-100 " src={banar3} alt="img" />
            </div>
         </div>
      </div>
   )

}

