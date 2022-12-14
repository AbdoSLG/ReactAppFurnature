
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faFireFlameSimple, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

import image1 from "../images/cart-img-1.jpg"
import image2 from "../images/cart-img-2.jpg"
import image3 from "../images/cart-img-3.jpg"
import image4 from "../images/cart-img-4.jpg"

import "../App.css"
import "../css/navbar.css"

function AppNavbar() {

   return (

      <div className="nav navbar position-fixed m-auto w-100 d-flex justify-content-between align-items-center pt-2 pb-2">
         <div className=" navbar container">
            <div className="logo d-flex justify-content-center align-items-center ">
               <FontAwesomeIcon icon={faFireFlameSimple} />
               <h3 className="m-0">Furni</h3>
            </div>

            <div className="search-bar d-flex justify-content-center align-items-center">
               <div id="search-autocomplete" className="d-flex align-items-center form-outline">
                  <label className="form-label" htmlFor="form1">Search</label>
                  <input type="search" id="form1" className="form-control" />
               </div>
               <button type="button" className="btn btn-primary">
                  <FontAwesomeIcon className="text-light" icon={faSearch} />
               </button>
            </div>

            <div className="icons d-flex justify-content-cente align-items-center">
               <span onClick={(e) => {
                  // let app = e.target.parentNode.parentNode.parentNode.parentNode;

                  // // create layout
                  // let layout = document.createElement("div");
                  // // remove layout after click on it 
                  // layout.className = "layout";
                  // window.addEventListener("click", (e) => {
                  //    if (e.target === layout) {
                  //       layout.remove()
                  //    }
                  // })

                  // // create container have content 
                  // let layoutContent = document.createElement("div")
                  // layoutContent.className = "layout-content";
                  // layoutContent.classList.add("layout-content-links");

                  // let links = ["home", "shop", "about", "team", "blog", "contact"]

                  // for (let i = 0; i < links.length; i++) {
                  //    let link = document.createElement("a");
                  //    link.className = links[i];
                  //    link.classList.add("text-capitalize", "fw-bold", "fs-4","text-center")
                  //    link.innerHTML = links[i];
                  //    layoutContent.appendChild(link);
                  //    if (links[i] === "home") {
                  //       link.setAttribute("href", `/`)
                  //    } else {
                  //       link.setAttribute("href", `/${links[i]}`)
                  //    }
                  // }

                  // layout.appendChild(layoutContent);
                  // app.appendChild(layout);


                  let layout = document.querySelector(".layout")
                  layout.classList.remove("d-none")
                  window.addEventListener("click", (e) => {
                     if (e.target === layout) {
                        layout.classList.add("d-none")
                     }
                  })

                  let links = document.querySelectorAll(".link")

                  links.forEach(link=>{
                     link.addEventListener("click" ,(e)=>{
                        e.target.parentNode.parentNode.classList.add("d-none")
                        document.documentElement.scrollTop = 0
                     })
                  })

               }}>


                  <FontAwesomeIcon className="fs-4 me-2" icon={faBars} />
               </span>
               <span onClick={(e) => {
                  let app = e.target.parentNode.parentNode.parentNode.parentNode;

                  // create layout
                  let layout = document.createElement("div");
                  // remove layout after click on it 
                  layout.className = "layout";
                  window.addEventListener("click", (e) => {
                     if (e.target === layout) {
                        layout.remove()
                     }
                  })

                  // create container have content 
                  let layoutContent = document.createElement("div")
                  layoutContent.className = "layout-content";
                  layoutContent.classList.add("layout-content-carts");

                  let imageSrc = [image1, image2, image3, image4]
                  for (let i = 0; i < imageSrc.length; i++) {
                     let cart = document.createElement("div")
                     cart.classList.add("cart", "d-flex", "justify-content-center", "align-items-center", "gap-3")

                     // create and add image 
                     let image = document.createElement("img")
                     image.setAttribute("src", imageSrc[i])

                     // create and add text
                     let text = document.createElement("span")
                     text.classList.add("d-flex", "flex-column")
                     let textContent1 = document.createElement("span")
                     textContent1.innerText = "Modern Furniture"
                     textContent1.classList.add("main-color", "fw-bold", "main-color")
                     let textContent2 = document.createElement("span")
                     textContent2.innerText = "1x$140.00"
                     textContent2.classList.add("text-black-50")

                     text.appendChild(textContent1)
                     text.appendChild(textContent2)


                     // create and add close
                     let close = document.createElement("div")
                     close.innerText = "x"
                     close.classList.add("fw-bold", "fs-4", "text-black-50")


                     cart.appendChild(image)
                     cart.appendChild(text)
                     cart.appendChild(close)

                     layoutContent.appendChild(cart)
                  }



                  layout.appendChild(layoutContent);
                  app.appendChild(layout);

               }}>
                  <FontAwesomeIcon className="fs-4 me-2" icon={faBagShopping} />
               </span>
               <span onClick={(e) => {
                  let app = e.target.parentNode.parentNode.parentNode.parentNode;

                  // create layout
                  let layout = document.createElement("div");
                  // remove layout after click on it 
                  layout.className = "layout";
                  window.addEventListener("click", (e) => {
                     if (e.target === layout) {
                        layout.remove()
                     }
                  })

                  // create container have content 
                  let layoutContent = document.createElement("div")
                  layoutContent.className = "layout-content";
                  layoutContent.classList.add("layout-content-form");

                  let form = `<form>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Email address</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">Password</label>
                     <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="mb-3 form-check">
                     <input type="checkbox" class="form-check-input" id="exampleCheck1">
                     <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
               </form>`

                  layoutContent.innerHTML += form


                  layout.appendChild(layoutContent);
                  app.appendChild(layout);

               }}>
                  <FontAwesomeIcon className="fs-4 me-2" icon={faUser} />
               </span>
            </div>
         </div>
      </div>
   )

}


export default AppNavbar;