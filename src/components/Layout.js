import { Link } from "react-router-dom"

function Layout() {

   return (
      <div className="layout d-none">

         <div className="layout-content layout-content-links">

            <Link to="/" className="link text-capitalize fw-bold fs-4 text-center" >home</Link>
            <Link to="shop" className="link text-capitalize fw-bold fs-4 text-center" >shop</Link>
            <Link to="about" className="link text-capitalize fw-bold fs-4 text-center" >about</Link>
            <Link to="team" className="link text-capitalize fw-bold fs-4 text-center" >team</Link>
            <Link to="blog" className="link text-capitalize fw-bold fs-4 text-center" >blog</Link>
            <Link to="contact" className="link text-capitalize fw-bold fs-4 text-center" >contact</Link>

         </div>

      </div>
   )


}

export default Layout