import React, { useState } from "react";
import './Earnings.css';

import Earning from "../../Components/Earning/Earning";

const Earnings = () =>{
    const [earning_data,set_earning_data] = new useState([
        {title:'STAKE BND',headingp1:'Earn M̷̷ARS by staking your BNB',headingp2:'Minimum bnb stake is 0.047 BNB',headingp3:'You cannot unstake your BNB',apr:'73000%',my_stake:'0.0000 BNB',total_staked:'0.3634 BNB',mars_earned:'0.0000',stack:'true',walletBallance:'0.0000 BNB'},
        {title:'STAKE M̷̷ARS',headingp1:'Stake M̷̷ARS to earn more M̷̷ARS',headingp2:'You can stake as many times as you want',headingp3:'You can unstake your M̷̷ARS after 7 days',apr:'2190%',my_stake:'0.0000 M̷̷ARS',total_staked:'0.2200 M̷̷ARS',mars_earned:'0.0000',unstake:'true',enable:'true',walletBallance:'0.0000 M̷̷ARS'}
    ])
    return(
        <div className="justify-content-center row my-5 contianer-fluid" id="Earnings"> 
            <div className="Earnings row col-md-10 justify-content-around gy-4">
                <Earning data={earning_data[0]}></Earning>
                <Earning data={earning_data[1]}></Earning>
                <div className="col-lg-4 col-md-5 ps-4" id="swap">
                    <div className="Earning  p-0">
                        <div className="p-3">
                            <h4 className="pb-3">SWAP NOW</h4>
                            <p className="head-p">Swap the earned tokens</p>
                            <p className="head-p">Only 8000 M̷̷ARS can be swap per day</p>
                            <p className="head-p">Earn BNB</p>
                            <div className="earning-apr mx-3 my-5">
                                <p className="d-flex flex-row justify-content-between px-4 py-2">Swap Today <p>0.0000</p></p>
                                <p className="d-flex flex-row justify-content-between px-4 py-2">Available Today <p>8,000.0000</p></p>
                                <p className="d-flex flex-row justify-content-between px-4 py-2">Reset in <p>01 : 00</p></p>
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                                <div className="mars_earned">
                                    <h5>MARS Earned</h5>
                                    <h5>0.0000</h5>
                                </div>
                            </div>
                            <input type="number" placeholder="0" className=" fs-5 py-3 px-4 input-earning mt-3"/>
                            <div className="row justify-content-center">
                                <button className="btnEnd-earning py-3 my-3 col-11">Enable</button>  
                            </div>       
                        </div>
                        <p className="d-flex p-2 flex-row justify-content-center p-buttom m-0">You will get : <p className="ps-3">0.00000 BNB</p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Earnings;