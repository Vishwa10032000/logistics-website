import React from 'react'
import Twiter from '../Assets/Twiiter.svg';
import Instagram from '../Assets/Instagram.svg';
import LinkedIn from '../Assets/LinkedIn.svg';
import Facebook from '../Assets/Facebook.svg';


function Footer() {
    return (
        <div style={{ background: "#D2F9FF" }}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4 col-4'>
                        <div className='d-flex gap-3'>
                           <img src={Twiter} width="12px"></img>
                           <img src={Instagram} width="12px"></img>
                           <img src={Facebook} width="12px"></img>
                           <img src={LinkedIn} width="12px"></img>
                        </div>
                    </div>
                    <div className='col-md-2 col-4 d-flex flex-column gap-3' >
                        <h6 style={{fontSize:"13px"}}><b>TOOLS</b></h6>
                        <h6 style={{fontSize:"13px"}}>Load Calculator</h6>
                        <h6 style={{fontSize:"13px"}}>Distance & Time</h6>
                        <h6 style={{fontSize:"13px"}}>Route Planner</h6>

                    </div>
                    <div className='col-md-2 col-4 d-flex flex-column gap-3' >
                        <h6 style={{fontSize:"13px"}}><b>SERVICES</b></h6>
                        <h6 style={{fontSize:"13px"}}>FCL</h6>
                        <h6 style={{fontSize:"13px"}}>LCL</h6>
                        <h6 style={{fontSize:"13px"}}>Air Freight</h6>
                        <h6 style={{fontSize:"13px"}}>Road Haulage</h6>
                        <h6 style={{fontSize:"13px"}}>Insurance</h6>
                        <h6 style={{fontSize:"13px"}}>Dangerous Cargoes</h6>
                        <h6 style={{fontSize:"13px"}}>Reefer Cargoes</h6>


                    </div><div className='col-md-2 col-4 d-flex flex-column gap-3' >
                        <h6 style={{fontSize:"13px"}}><b>COMPANY</b></h6>
                        <h6 style={{fontSize:"13px"}}>About Us</h6>
                        <h6 style={{fontSize:"13px"}}>Contact Us</h6>

                    </div><div className='col-md-2 col-4 d-flex flex-column gap-3' >
                        <h6 style={{fontSize:"13px"}}><b>RESOURCES</b></h6>
                        <h6 style={{fontSize:"13px"}}>Terms of service</h6>
                        <h6 style={{fontSize:"13px"}}>Privacy Policy</h6>
                        <h6 style={{fontSize:"13px"}}>Documents templates</h6>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer