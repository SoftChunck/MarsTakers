import React from "react";
import './Header.css';

const Header = () =>{
    return(
        <div className="Header row py-5 px-0 mx-0 mb-5 justify-content-center align-items-center container-fluid" id="home">
            <div className="col-md-8 justify-content-center row">
                <h1 className="header-h1 py-2 col-md-10 col-xl-8 m-0 col-10">MARS STAKERS</h1>
                <h6 className="fs-5 py-2  col-md-10 col-xl-8 col-10">Giving you the financial freedom you Deserve</h6>
                <p className="fs-6 ps-5 col-md-10 col-xl-8 col-10 py-2 header-p">73000% APR is not a Bluff</p>
                <div className="py-4 row gap-4 justify-content-start  col-md-10 col-xl-8 col-10">
                    <button className="tlg-btn  py-3 col-md-4 col-lg-3 col-xl-2">Telegram</button>
                    <button className="white-btn py-3 col-md-4 col-lg-3  col-xl-2">WhitePaper</button>
                </div>
            </div>
            <div className="col-md-4">
                <img src="assets/images/welcome-img.gif" className="header-img"/>
            </div>
        </div>
    );
}
export default Header;