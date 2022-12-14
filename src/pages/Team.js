import Head from "../components/Head";
import Title from "../components/Title";

import { FaFacebook,FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


import "../css/team.css"

import member1 from "../images/team-1.jpg"
import member2 from "../images/team-2.jpg"
import member3 from "../images/team-3.jpg"
import member4 from "../images/team-4.jpg"
import member5 from "../images/team-5.jpg"
import member6 from "../images/team-6.jpg"

function Team() {

   const members = [member1, member2, member3, member4, member5, member6]

   return (
      <div className="element pt-3  ">
         <Head name="team" />
         <Title name="team" />

         <div className="team  pt-5 container d-flex justify-content-center align-items-center gap-3">
            {
               members.map((member, i) => {
                  return (
                     <div key={i} className="member position-relative">
                        <img className="w-100" src={member} alt="" />
                        <p className="d-flex justify-content-between">
                           <span className="text-capitalize fs-5 fw-bold">john deo</span>
                           <span className="text-capitalize text-black-50">Desiner</span>
                        </p>

                        <div className="position-absolute social d-flex flex-column justify-content-center align-items-center gap-3 ">
                           <FaFacebook className="text-light fs-1 border p-1" />
                           <FaInstagram className="text-light fs-1 border p-1" />
                           <FaLinkedin className="text-light fs-1 border p-1" />
                           <FaTwitter className="text-light fs-1 border p-1" />
                        </div>   

                     </div>
                  )
               })
            }

         </div>

      </div>
   )

}

export default Team;