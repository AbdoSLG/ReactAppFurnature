import "../App.css"
import "../css/shop.css"
import "../css/navbar.css"
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "../components/Head";
import Title from "../components/Title";


import catImage1 from "../images/icon-1.png";
import catImage2 from "../images/icon-2.png";
import catImage3 from "../images/icon-3.png";
import catImage4 from "../images/icon-4.png";
import catImage5 from "../images/icon-5.png";

import productImg1 from "../images/product-1.jpg";
import productImg2 from "../images/product-2.jpg";
import productImg3 from "../images/product-3.jpg";
import productImg4 from "../images/product-4.jpg";
import productImg5 from "../images/product-5.jpg";
import productImg6 from "../images/product-6.jpg";
import productImg7 from "../images/product-7.jpg";
import productImg8 from "../images/product-8.jpg";

function Shop() {

   const categories = [[catImage1, "house sofa"], [catImage2, "working table"], [catImage3, "corner table"], [catImage4, "office chair"], [catImage5, "new wardrobe"]]
   const productImgs = [productImg1,productImg2,productImg3,productImg4,productImg5,productImg6,productImg7,productImg8]
   return (
      <div className="element pt-3  ">
         <Head name="shop" />


         <div className="category">
            <Title name="our categories" />
            <div className="d-flex pt-4 pb-4 flex-wrap gap-2 justify-content-center container">
               {categories.map((cat,i) => {
                  return (<div key={i} className="box border border-success p-3 d-flex  flex-column justify-content-center align-items-center gap-2">
                     <img src={cat[0]} alt=""/>
                     <p className="text fw-bold text-capitalize">{cat[1]}</p>
                  </div>)
               })}
            </div>
         </div>

         <div className="products">
            <Title name="our products" />
            <div className="d-flex pt-4 pb-4 flex-wrap gap-2 justify-content-center container">
               {productImgs.map((product,i) => {
                  return (<div key={i} className="product p-3 d-flex  flex-column justify-content-center align-items-center gap-2">
                     <img src={product} alt=""/>
                     <div className="text ">
                        <p className="text-black-50 m-0">$140</p>
                        <h5 className="text-capitalize">modern furnature</h5>
                        <div className="d-flex justify-content-start align-items-center ">
                           <FontAwesomeIcon className="text-warning" icon={faStar} />
                           <FontAwesomeIcon className="text-warning" icon={faStar} />
                           <FontAwesomeIcon className="text-warning" icon={faStar} />
                           <FontAwesomeIcon className="text-warning" icon={faStar} />
                           <FontAwesomeIcon className="text-warning" icon={faStarHalfStroke} />
                           (50)
                        </div>
                     </div>
                  </div>)
               })}
            </div>
         </div>

      </div>
   )
}

export default Shop;