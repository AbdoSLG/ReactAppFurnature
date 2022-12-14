/* eslint-disable react/jsx-no-target-blank */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFireFlameSimple } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "../css/footer.css"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";


function AppFooter() {
   return (
      <footer className="text-center text-lg-start bg-light pt-1 mt-5 text-muted">

         <section className="">
            <div className="container text-center text-md-start mt-5">
               <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                     <h6 className="text-uppercase fw-bold mb-4">
                        <FontAwesomeIcon icon={faFireFlameSimple} />Furni
                     </h6>
                     <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                     </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                     <h6 className="text-uppercase fw-bold mb-4">
                        Links
                     </h6>
                     <p>
                        <Link to="/" className="text-reset text-capitalize">home</Link>
                     </p>
                     <p>
                        <Link to="shop" className="text-reset text-capitalize">shop</Link>
                     </p>
                     <p>
                        <Link to="about" className="text-reset text-capitalize">about</Link>
                     </p>
                     <p>
                        <Link to="team" className="text-reset text-capitalize">team</Link>
                     </p>
                     <p>
                        <Link to="blog" className="text-reset text-capitalize">blog</Link>
                     </p>
                     <p>
                        <Link to="contact" className="text-reset text-capitalize">contact</Link>
                     </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                     <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                     </h6>
                     <p>
                        <FaFacebook className="fs-4 me-1" />
                        <a href="#!" className="text-reset text-capitalize">facebook</a>
                     </p>
                     <p>
                        <FaLinkedin className="fs-4 me-1" />
                        <a href="#!" className="text-reset text-capitalize">linkedin</a>
                     </p>
                     <p>
                        <FaInstagram className="fs-4 me-1" />
                        <a href="#!" className="text-reset text-capitalize">instagram</a>
                     </p>
                     <p>
                        <FaTwitter className="fs-4 me-1" />
                        <a href="#!" className="text-reset text-capitalize">twitter</a>
                     </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                     <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                     <p>
                        <FaGithub className="fs-4 me-1"/>
                        <a className="github-link" href="https://www.github.com/abdoslg" target="_blank">
                           My GitHub
                        </a>
                     </p>

                     <p><FaPhone /> + 20 1556577857</p>
                     <p><FaPhone /> + 20 1003982268</p>
                  </div>
               </div>
            </div>
         </section>
         <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
            © 2022 Copyright:
            <a className="text-reset fw-bold" target="_blank" href="https://www.github.com/abdoslg">ABDELRAHMAN SAMEEH</a>
         </div>

      </footer>

   )
}
export default AppFooter;