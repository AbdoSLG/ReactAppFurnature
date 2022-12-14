
import "../App.css"
import "../css/navbar.css"
import "../css/about.css"
import Head from "../components/Head";
import Title from "../components/Title";

import aboutImg from "../images/about-img.jpg"

import serImg1 from "../images/serv-1.svg"
import serImg2 from "../images/serv-2.svg"
import serImg3 from "../images/serv-3.svg"

function About() {

   const services = [
      ["product selling", serImg1],
      ["product designing", serImg2],
      ["24/7 support", serImg3],
   ]

   return (
      <div className="about element pt-3">
         <Head name="about us" />

         <div className="part1 container pt-3">
            <div className=" row">
               <div className="col-lg-6 col-md-5 col-sm-12">
                  <img src={aboutImg} className="w-100" alt="" />
               </div>
               <div className="col-lg-6 col-md-7 col-sm-12">
                  <span className="text-capitalize text-black-50 fs-5">welcome to our shop</span>
                  <h4 className="text-capitalize">we make your home more astonishing</h4>
                  <p>lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore  elit sed do eiusmod tempor incididunt ut labore </p>
                  <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore </p>
                  <button className="btn btn-dark text-capitalize">read more</button>
               </div>
            </div>
         </div>

         <div className="services pt-3">
            <Title name="our services" />
            <div className="pt-4 container content flex-wrap d-flex justify-content-center align-items-center gap-3 ">
               {
                  services.map((serv,i) => {
                     return (
                        <div key={i} className="p-3 border serv d-flex  flex-column justify-content-center align-items-center ">
                           <img src={serv[1]} alt="" />
                           <h4 className="main-color mt-2 mb-2">{serv[0]}</h4>
                           <p className="text-center text-black-50">lorem ipsum dark src sjc ajxb sahca akuscbs akjscbjasb skacnjbs jsbcjbjbjcs</p>
                           <button className="btn text-capitalize">read more </button>
                        </div>
                     )
                  })
               }
            </div>

         </div>
      </div>
   )

}

export default About;