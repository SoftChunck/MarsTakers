import React from "react";
import './Footer.css';

const Footer = () =>{
    return(
        <div className="footer align-items-center mt-5">
            <div className="icons row justify-content-center align-items-center m-0 gap-4">
                <img src="assets/images/telegram.png" className="col-3 col-md-1 p-4"/>
                <img src="assets/images/twitter.png" className="col-3 col-md-1 p-4"/>
                <img src="assets/images/bscscan.png" className="col-3 col-md-1 p-4"/>
                <img src="assets/images/dapp-logo.png" className="col-3 col-md-1 p-4"/>
            </div>
            <h3 className="text-center fs-6 pb-4">© 2022 MARSTAKERS. ALL RIGHTS RESERVED</h3>
        </div>
    );
}
export default Footer;