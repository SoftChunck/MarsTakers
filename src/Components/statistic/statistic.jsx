import React from "react";
import './Statistic.css';

const statistic = (props) =>{
    return(
        <div className="statistic col-xl-2 col-lg-3 col-md-4 m-3 px-5 py-2 text-center align-items-center">
            <h3>{props.data.title}</h3>
            <p className="d-flex flex-row align-items-center heading-p justify-content-center">{props.data.heading}<p className="m-0 ps-3 perc-p">{props.data.perc}</p></p>
            <p className="heading-p">{props.data.subheading}</p>
        </div>
    );
}
export default statistic;