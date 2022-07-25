import React from "react";
import './Refferals.css';

const Refferals = () =>{
    return(
        <div className="row justify-content-center">
            <div className="Refferals col-md-10">
                <h1 className="h3 text-center mb-5 pb-5">Refferal Link</h1>
                <div className="row justify-content-around align-items-center">
                    <div className="get-link col-md-5">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <p className="text-center px-5">You will get your ref link after investing</p>
                            <button className="btn-refferal px-5 py-3">Copy</button>
                        </div>
                        <p className="d-flex justify-content-between flex-row px-5 my-3">Referral Earned Available <p>0.0000</p></p>
                        <p className="d-flex justify-content-between flex-row px-5 my-3">Total Referral Earned <p>0.0000</p></p>
                        <p className="d-flex justify-content-between flex-row px-5 my-3">Total Referral Withdrawn <p>0.0000</p></p>
                        <p className="d-flex justify-content-between flex-row px-5 my-3">Total Referrals <p>0</p></p>
                        <button className="btn-refferal px-5 py-3 width-full mb-3 fs-5">With Draw Refferal Earnings</button>
                    </div>
                    <div className="col-md-5 inviting-people justify-content-center p-5">
                        <h2 className="fs-5">Earn BNB by inviting people to Marstakers</h2>
                        <h6>You will receive:</h6>
                        <p>10% from each level 1 referral deposits</p>
                        <p>5% from each level 2 referral deposits</p>
                        <p>1% from each level 3 referral deposits</p>
                        <p>1% from each level 4 referral deposits</p>
                        <p>1% from each level 5 referral deposits</p>
                        <h2 className="fs-5">Deposit atleast once to activate Referral Rewards</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Refferals;