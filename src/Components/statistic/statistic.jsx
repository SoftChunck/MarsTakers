import React from "react";
import './Statistic.css';

const statistic = (props) =>{
    return(
       <div className=" col-xl-3 col-lg-3 col-md-4 px-3">
         <div className="statistic px-5 py-2 text-center align-items-center">
            <h3>{props.data.title}</h3>
            <p className="d-flex flex-row align-items-center heading-p p-0 justify-content-center">{props.data.heading}<p className="m-0 ps-3 perc-p">{props.data.perc}</p></p>
            <p className="heading-p">{props.data.subheading}</p>
          </div>
       </div>
    );
}
export default statistic;