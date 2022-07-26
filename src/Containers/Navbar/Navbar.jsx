import React from "react";
import {FaBars} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () =>{
    React.useEffect(()=>{
        var navbtn = document.querySelector('.navbar-toggler');
        var navlist = document.querySelector('.navbar-collapse')
        let show = false;
        navbtn.addEventListener('click',()=>{
            if(!show)
            {
                show = true;
                navlist.classList.add('show');
            }
            else
            {
                show = false;
                navlist.classList.remove('show');
            }
        })
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-light container-fluid">
            <div className="container">
                    <img src="assets/images/Logo.png" className="navbar-brand col-1"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav  text-start ps-5">
                        <li className="nav-item">
                        <a className="nav-link1 active" aria-current="page" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Earn</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Stake</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Swap</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Referral</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Contract</a>
                        </li>
                    </ul>                    
                    <button className="nav-link1 ms-5 nav-btn" href="#">Connect Wallet</button>
                    </div>
                </div>
            </nav>
    );
}
export default Navbar;