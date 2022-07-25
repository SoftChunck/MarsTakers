import React from "react";
import { useState } from "react";
import './Statistics.css';
import Statistic from "../../Components/Statistic/Statistic";

const Statistics = () =>{
    const [statistic_Data,setStatistic_Data] = new useState([
        {title:'MARS Price',heading:'0.00000002 BNB',perc:'(0.00%)',subheading:'$0.000004'},
        {title:'Total Supply',heading:'',perc:'',subheading:'20,000,000.00'},
        {title:'Circulating Supply',heading:'',perc:'',subheading:'11.85'},
        {title:'Available Supply',heading:'',perc:'',subheading:'19,999,988.15'},
        {title:'Total BNB Staked',heading:'0.36 BNB',perc:'',subheading:'$93.00'},
        {title:'Total MARS Stacked',heading:'0.22 MARS',perc:'',subheading:'$0.00'},
    
    ])
    return(
        <div className="justify-content-center d-flex">
            <div className="Statistics justify-content-center">
                <h1 className="text-center">Statistics</h1>
                <div className="statistic-cards py-5 row gap-4 justify-content-center ">
                    <Statistic data={statistic_Data[0]}></Statistic>
                    <Statistic data={statistic_Data[1]}></Statistic>
                    <Statistic data={statistic_Data[2]}></Statistic>
                    <Statistic data={statistic_Data[3]}></Statistic>
                    <Statistic data={statistic_Data[4]}></Statistic>
                    <Statistic data={statistic_Data[5]}></Statistic>
                </div>
            </div>
        </div>
    );
}
export default Statistics;