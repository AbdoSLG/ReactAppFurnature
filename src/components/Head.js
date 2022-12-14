import { Link } from "react-router-dom";
import "../css/head.css"


function Head(props) {
   return(
      <div className=" head">
         <div className="container d-flex justify-content-between align-items-center pt-4 pb-4"> 

            <span className="text-capitalize text-light fs-2 fw-bold">{props.name}</span>

            <div className="fs-5">
               <Link className="text-light" to="/">Home</Link>
               <span className="text-light">/</span>
               <Link className="text-warning" > {props.name}</Link>
            </div>

         </div>
      </div>
   )
}

export default Head;