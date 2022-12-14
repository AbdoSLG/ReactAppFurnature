import "../css/title.css"

function Title(props){
   return (
      <div >
         <div className="title pt-3 container d-flex justify-content-between align-items-center">

            <h4 className="text-capitalize">{props.name}</h4>
            <span className="fw-bold ">View All{`>>`} </span>

         </div>
      </div>
   )
}

export default Title