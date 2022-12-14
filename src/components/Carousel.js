
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import image1 from "../images/home-img-1.png"
import image2 from "../images/home-img-2.png"

import "../css/carousel.css"

export function Carousel() {


   return (
      <div id="carouselExampleControls" className="carousel slide d-flex align-items-center " data-bs-ride="carousel">
         <div className="carousel-inner container">

            

            <div className="carousel-item active ">
               <div className=" d-flex justify-content-center align-items-center">
                  <div className="left">
                     <h3 className="text-black-50">New Arrival</h3>
                     <h1>Flexable Chair</h1>
                     <p className="text-black-50">lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set </p>
                     <button className="btn">Shop Now</button>
                  </div>
                  <div className="right">
                     <img className="w-100" src={image1} alt="img" />
                  </div>
               </div>
            </div>

            <div className="carousel-item ">
               <div className=" d-flex justify-content-center align-items-center">
                  <div className="left">
                     <h3 className="text-black-50">New Arrival</h3>
                     <h1>Flexable Chair</h1>
                     <p className="text-black-50">lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set </p>
                     <button className="btn">Shop Now</button>
                  </div>
                  <div className="right">
                     <img className="w-100" src={image2} alt="img" />
                  </div>
               </div>
            </div>

         </div>
         <button className="move-left" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span> */}
            <FontAwesomeIcon className="text-dark fs-1" icon={faChevronLeft} />
            
         </button>
         <button className="move-right" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span> */}
            <FontAwesomeIcon className="text-dark fs-1" icon={faChevronRight} />
         </button>
      </div>
   )
} 