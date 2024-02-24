import React from 'react';
import RatesIcon from '../Assets/RatesIcon.svg';
import TrackingIcon from '../Assets/TrackingIcon.svg';
import SchedulesIcon from '../Assets/SchedulesIcon.svg';
import Globe from '../Assets/globe 10.mp4';
import { motion } from 'framer-motion';
import { ArrowOutward, CompareArrows, Search } from '@mui/icons-material';

function HeroSection() {
    return (
        <div className='container' style={{ minHeight: "500px" }}>
            <div className='py-4'>
                <h2 className='primaryTextColor'><b>GLOBAL CONNECTIVITY SIMPLIFIED</b> <i>by</i></h2>
                <h2 className='secondaryTextColor'><b>LOGISTICS SOLUTION</b></h2>
            </div>
            <div className='d-flex gap-5 py-4'>
                <div className='d-flex gap-2 shadow p-2 bg-white rounded-pill'>
                    <button className='primaryBtn '><img src={RatesIcon} width="12px" alt="Rates Icon" />RATES</button>
                    <button className='primaryBtn '><img src={TrackingIcon} width="12px" alt="Tracking Icon" />TRACKING</button>
                    <button className='primaryBtn '><img src={SchedulesIcon} width="12px" alt="Schedules Icon" />SCHEDULES</button>
                </div>
                <button className='RequestAQuoteBtn'>REQUEST A QUOTE <ArrowOutward /></button>
            </div>

            <div  className='d-flex gap-5 py-4'>
                <div
                className='row d-flex shadow p-2 bg-white rounded-pill'>
                    <div className='col-md-5 d-flex align-items-center'>
                        <input type='text' className='primaryInput' placeholder='SELECT LOCATION' />&nbsp;<CompareArrows />&nbsp;
                        <input type='text' className='primaryInput' placeholder='SELECT LOCATION' />&nbsp;&nbsp;|&nbsp;
                    </div>
                    <div className='col-md-7 d-flex align-items-center justify-content-around'>
                        <input type='date' className='primaryInput' />&nbsp;|&nbsp;
                        <button className='primaryInput'>LTL, 1mt/1m</button>
                        <button className='searchBtn'><Search /></button>
                    </div>
                </div>
            </div>
            <motion.div
                className='col-md-6'
                style={{ position: "absolute", overflow: "hidden", top: "0", left: "50%", zIndex: -1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    loop: Infinity
                }}
            >
                <video width="100%" height="600px" autoPlay loop muted className='video-bg'>
                    <source src={Globe} type='video/mp4' />
                </video>
            </motion.div>
        </div>
    )
}

export default HeroSection;
