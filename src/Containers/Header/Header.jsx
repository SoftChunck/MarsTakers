import React from "react";
import './Header.css';

const Header = () =>{
    return(
        <div className="Header row py-5 justify-content-end">
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className="display-1 header-h1 py-2">MARS STAKERS</h1>
                <h6 className="fs-5 py-2">Giving you the financial freedom you Deserve</h6>
                <p className="fs-6 ps-5 py-2 header-p">73000% APR is not a Bluff</p>
                <div className="py-4 row gap-4 justify-content-start">
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