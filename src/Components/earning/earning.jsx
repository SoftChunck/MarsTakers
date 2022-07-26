import React from "react";
import './Earning.css';

const Earning = (props) =>{
    return(
        <div className=" col-lg-4 col-md-5 ps-4">
            <div className="Earning p-0">
                <div className="p-3">
                    <h4 className="pb-3">{props.data.title}</h4>
                    <p className="head-p">{props.data.headingp1}</p>
                    <p className="head-p">{props.data.headingp2}</p>
                    <p className="head-p">{props.data.headingp3}</p>
                    <div className="earning-apr mx-3 my-5">
                        <p className="d-flex flex-row justify-content-between px-4 py-2">APR <p>{props.data.apr}</p></p>
                        <p className="d-flex flex-row justify-content-between px-4 py-2">My Stake <p>{props.data.my_stake}</p></p>
                        <p className="d-flex flex-row justify-content-between px-4 py-2">Total Staked <p>{props.data.total_staked}</p></p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mars_earned">
                            <h5>MARS Earned</h5>
                            <h5>{props.data.mars_earned}</h5>
                        </div>
                        <button className="btn-earning px-5 py-3">Claim</button>
                    </div>
                    <input type="text" value="0" className=" fs-5 py-3 px-4 input-earning mt-3"/>
                    <div className="row justify-content-center">
                        {props.data.stack &&
                            <button className="btnEnd-earning px-2 py-3 my-3 mx-2 col-10">Stake</button>
                        }
                        {props.data.unstake &&
                            <button className="btnEnd-earning px-2 py-3 my-3 mx-2 col-5">UnStake</button>
                        }
                        {props.data.enable &&
                            <button className="btnEnd-earning px-2 py-3 my-3 mx-2 col-5">Enable</button>
                        }     
                    </div>       
                </div>
                <p className="d-flex p-2 flex-row justify-content-center p-buttom m-0">Wallet Balance : <p className="ps-3">{props.data.walletBallance}</p></p>
            </div>
        </div>
    );
}
export default Earning;