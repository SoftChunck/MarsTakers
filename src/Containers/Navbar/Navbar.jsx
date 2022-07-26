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
                        <a className="nav-link1 active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#Earnings">Earn</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#Earnings">Stake</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#swap">Swap</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#Refferals">Referral</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="https://bscscan.com/address/0x91749805F8B29016861dC174e889BC9FA6aE50c1">Contract</a>
                        </li>
                    </ul>                    
                    <button className="nav-link1 ms-5 nav-btn" href="#">Connect Wallet</button>
                    </div>
                </div>
            </nav>
    );
}
export default Navbar;