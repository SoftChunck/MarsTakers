import React from "react";
import './Footer.css';

const Footer = () =>{
    return(
        <div className="footer align-items-center mt-5 container-fluid pt-4">
            <div className="icons justify-content-center align-items-center d-flex my-4">
                <img src="assets/images/telegram.png" className="img-footer ms-4 "/>
                <img src="assets/images/twitter.png" className="img-footer ms-4 "/>
                <img src="assets/images/bscscan.png" className="img-footer ms-4 "/>
                <img src="assets/images/dapp-logo.png" className="img-footer ms-4 "/>
            </div>
            <h3 className="text-center fs-6 pb-4">© 2022 MARSTAKERS. ALL RIGHTS RESERVED</h3>
        </div>
    );
}
export default Footer;