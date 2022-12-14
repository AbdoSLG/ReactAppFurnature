import { FaHistory, FaUser } from "react-icons/fa"
import Head from "../components/Head"
import Title from "../components/Title"

import "../css/blog.css"

import blogImg1 from "../images/blog-1.jpg"
import blogImg2 from "../images/blog-2.jpg"
import blogImg3 from "../images/blog-3.jpg"
import blogImg4 from "../images/blog-4.jpg"
import blogImg5 from "../images/blog-5.jpg"
import blogImg6 from "../images/blog-6.jpg"


function Blog() {

   const blogImages = [blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6]
   return (
      <div className=" element pt-3">

         <Head name="blog" />
         <Title name="blog" />

         <div className="container pt-5">
            <div className="content row justify-content-center gap-4 ">

               {
                  blogImages.map((blog, i) => {
                     return (
                        <div key={i} className="blog border p-0 ">
                           <div><img src={blog} alt="" className="w-100" /></div>
                           <div className="text p-2">
                              <h4 className="main-color">Blog Title</h4>
                              <p className="text-black-50">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                              <button className="btn">Read More</button>
                              <div className="foot pt-2 mt-3 d-flex align-items-center justify-content-between">
                                 <span>
                                    <FaHistory />
                                    <span className="text-black-50">14stDec,2022</span>
                                 </span>
                                 <span>
                                    <FaUser />
                                    <span className="text-black-50"> By Admin</span>
                                 </span>
                              </div>
                           </div>
                        </div>
                     )
                  })
               }

            </div>
         </div>

      </div>
   )
}


export default Blog