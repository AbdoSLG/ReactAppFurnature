/* eslint-disable jsx-a11y/iframe-has-title */
import Head from "../components/Head"
import Title from "../components/Title"

function Contact() {

   return (
      <div className="contact element pt-5">
         <Head name="contact us" />
         <Title name="contact us" />

         <div className="content container pt-5">
            <div className=" row justify-content-center gap-3">
               <div className="col-md-5 col-sm-10">
                  <form>
                     <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                     </div>
                     <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
               </div>
               <div className="col-md-5 col-sm-10">
                  <iframe className="map w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1633968347413!5m2!1sen!2sin"  allowFullScreen="" loading="lazy"></iframe>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Contact