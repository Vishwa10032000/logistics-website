import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../Components/HeroSection';
import Expertise1 from '../Assets/01.jpg';
import Expertise2 from '../Assets/02.jpg';
import Expertise3 from '../Assets/03.jpg';
import WhyChooseAS from '../Assets/WhyChooseAs.mp4';
import Flight from '../Assets/Flight.jpg';
import Testimonial1 from '../Assets/Testimonial1.jpg';
import Testimonial2 from '../Assets/Testimonial2.jpg';
import Testimonial3 from '../Assets/Testimonial3.jpg';
import Shipments from '../Assets/Shipments.jpg';
import Tracks from '../Assets/Tracks.jpg';
import FlightCroped from '../Assets/FlightCroped.jpg';
import ShipCroped from '../Assets/ShipCroped.jpg';
import { PlayCircleFilledWhite } from '@mui/icons-material';

function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            video.play();
            setIsPlaying(true);
        }
    };

    const hidePlayButton = () => {
        setIsPlaying(true);
    };
    return (
        <div >
            <HeroSection />
            <div style={{ background: "linear-gradient(to bottom, #FFFFFF, #D2F9FF)" }}>
                <div className='container' >
                    <h2 className='secondaryTextColor py-4'><b>OUR EXPERTISE</b></h2>
                    <div className='row' style={{ position: "relative", overflow: "hidden" }}>
                        <div className='col-md-4 py-3 col-6 expertise-container'>
                            <motion.div
                                initial={{ x: 200 }}
                                whileInView={{
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 2
                                    }
                                }}
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                                className='expertise-image-container'


                            >
                                <img src={Expertise1} className='expertiseImage' alt="Expertise 1" />
                            </motion.div>
                            <h2 className="expertiseText">SEA</h2>
                        </div>
                        <div style={{ position: "relative", overflow: "hidden" }} className='col-md-4 py-3 col-6 expertise-container'>
                            <motion.div
                                initial={{ y: -200 }}
                                whileInView={{
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 2
                                    }
                                }}
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                                className='expertise-image-container'
                            >
                                <img src={Expertise2} className='expertiseImage' alt="Expertise 2" />
                            </motion.div>
                            <h2 className="expertiseText">AIR</h2>
                        </div>
                        <div className='col-md-4 py-3 col-12 expertise-container'>
                            <motion.div
                                initial={{ x: -200 }}
                                whileInView={{
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 2
                                    }
                                }}
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                                className='expertise-image-container'
                            >
                                <img src={Expertise3} className='expertiseImage' alt="Expertise 3" />
                            </motion.div>
                            <h2 className="expertiseText">LAND</h2>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div style={{ background: "#00CCFF1A", borderRadius: "30px" }}>
                            <div className='p-5'>
                                <h2 className='secondaryTextColor'><b>WHY CHOOSE US</b></h2>
                                <div className='row p-3'>
                                    <div className='col-md-7 d-flex align-items-center' style={{ position: 'relative', overflow: "hidden" }}>
                                        <motion.video
                                            initial={{ x: -200 }}
                                            whileInView={{
                                                x: 0,
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 2
                                                }
                                            }}
                                            ref={videoRef}
                                            style={{ border: "1px solid gray", borderRadius: "30px" }}
                                            width="100%"
                                            controls={false}
                                            onTap={handleVideoClick}
                                            onPlay={hidePlayButton}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <source src={WhyChooseAS} type="video/mp4" />
                                        </motion.video>
                                        {!isPlaying && (
                                            <motion.b
                                                initial={{ opacity: 0, x: 0 }}
                                                whileInView={{
                                                    opacity: 1, x: 0,
                                                    transition: {
                                                        duration: 2
                                                    }

                                                }}
                                                className="play-button"
                                                style={{
                                                    position: 'absolute',
                                                    top: '40%',
                                                    left: '42%',
                                                    transform: 'translate(-50%, -50%)',
                                                    zIndex: 1,
                                                    color: "white"
                                                }}
                                                onClick={handleVideoClick}
                                            >
                                                <PlayCircleFilledWhite sx={{ fontSize: 80 }} />
                                            </motion.b>
                                        )}
                                    </div>

                                    <div className='col-md-5 py-3 d-flex flex-column align-items-center justify-content-center'>
                                        <div
                                            style={{position:"relative",overflow:"hidden"}}
                                            >
                                                <motion.div initial={{ x: 200 }}
                                            whileInView={{
                                                x: 0,
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 2
                                                }
                                            }}>
                                            <h6 className='secondaryTextColor'>
                                                <b> - Explore the heart of our logistics excellence in our 'Why Choose Us' video.</b>
                                            </h6>
                                            <h6 className='secondaryTextColor'><b>- Discover why businesses trust [-----------] for their shipping needs.</b></h6>

                                            <h6 className='secondaryTextColor'>
                                                <b> - From our unwavering commitment to on-time deliveries to our global reach, this video showcases the key reasons we stand out in the logistics industry.</b>
                                            </h6>

                                            <h6 className='secondaryTextColor'>
                                                <b> - Join us on a journey of reliability, transparency, and unparalleled service.</b>
                                            </h6>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className='shadow' style={{ background: "white", borderRadius: "30px" }}>
                            <div className='p-5'>
                                <h2 className='secondaryTextColor'><b>HOW WE DO</b></h2>
                                <div className='row p-3'>
                                    <div style={{ position: 'relative', overflow: "hidden" }} className='col-md-7 d-flex align-items-center'>
                                        <motion.img
                                            initial={{ x: -200 }}
                                            whileInView={{
                                                x: 0,
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 2
                                                }
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                            style={{ border: "1px solid gray", borderRadius: "30px" }} src={Flight} width="100%" />
                                    </div>
                                    <div style={{position:"relative",overflow:"hidden"}}
                                        className='col-md-5 py-3 d-flex flex-column align-items-center justify-content-center'
                                    >
                                        <motion.div
                                            initial={{ x: 200 }}
                                            whileInView={{
                                                x: 0,
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 2
                                                }
                                            }}>
                                            <h6 className='secondaryTextColor'>
                                                <b> -Step behind the scenes with our 'How We Do' video and witness the intricacies of our logistics process.</b> </h6>
                                            <h6 className='secondaryTextColor'><br></br>
                                                <b> -From strategic planning to cutting-edgetechnology, this video offers an inside look at the meticulous steps we take to ensure your shipments reach their destination seamlessly.</b></h6>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className='shadow' style={{ background: "#D7F8FF", borderRadius: "30px" }}>
                            <div className='p-5'>
                                <h2 className='secondaryTextColor'><b>TESTIMONIALS</b></h2>
                                <div style={{ position: 'relative', overflow: "hidden" }} className='row p-3 d-flex justify-content-around align-items-end'>
                                    <motion.div
                                        initial={{ x: -100 }}
                                        whileInView={{
                                            x: 0,
                                            transition: {
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 2
                                            }
                                        }}
                                        className='col-md-3 col-12'>
                                        <motion.img style={{ borderRadius: "30px" }} whileHover={{ scale: 1.05 }} src={Testimonial1} width="100%" />
                                        <h6 className='secondaryTextColor text-center py-3' style={{ fontSize: "12px" }}>
                                            <b>Steeve, Co-YT</b><br></br><br></br>
                                            In a fast-paced industry, [--------------] stands out for its reliability and transparency. We trust them with our shipments, and they consistently deliver exceptional service.
                                        </h6>
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: 200 }}
                                        whileInView={{
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 2
                                            }
                                        }} className='col-md-4 col-6'>
                                        <motion.img style={{ borderRadius: "30px" }} whileHover={{ scale: 1.05 }} src={Testimonial2} width="100%" />
                                        <h6 className='secondaryTextColor text-center py-3' style={{ fontSize: "12px" }}>
                                            <b>Jhon, UBS Pvt Ltd</b><br></br><br></br>
                                            The personalized approach and attention to detail set [-----------] apart. They understand our unique needs and consistently exceed our expectations.
                                        </h6>
                                    </motion.div> <motion.div
                                        initial={{ x: 100 }}
                                        whileInView={{
                                            x: 0,
                                            transition: {
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 2
                                            }
                                        }} className='col-md-3 col-6'>
                                        <motion.img style={{ borderRadius: "30px" }} whileHover={{ scale: 1.05 }} src={Testimonial3} width="100%" />
                                        <h6 className='secondaryTextColor text-center py-3' style={{ fontSize: "12px" }}>
                                            <b>Yalyne, STOOK Pvt Ltd</b><br></br><br></br>
                                            In a fast-paced industry, [--------------] stands out for its reliability and transparency. We trust them with our shipments, and they consistently deliver exceptional service.
                                        </h6>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <h2 className='secondaryTextColor'><b>NEWS UPDATES</b></h2>
                        <h6 className='py-3' style={{ fontSize: "12px" }}>Stay updated with the latest developments, trends, and news in the logistics industry. Explore our news section for informative articles, industry insights, and updates on [------------]'s achievements and innovations. </h6>
                        <div className='row' style={{ position: 'relative', overflow: "hidden" }} >
                            <div className='col-md-7'>
                                <div className='row d-flex gap-3'>
                                    <motion.div
                                        initial={{ x: -200 }}
                                        whileInView={{
                                            x: 0,
                                            transition: {
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 2
                                            }
                                        }} className='col-md-12' >
                                        <motion.img style={{ borderRadius: "30px" }} whileHover={{ scale: 1.05 }} width="100%" height="100px" src={ShipCroped} />
                                    </motion.div>
                                    <div className='col-md-12 pb-3 ' >
                                        <div className='row' style={{ position: 'relative', overflow: "hidden" }}>
                                            <motion.div
                                                initial={{ y: 200 }}
                                                whileInView={{
                                                    y: 0,
                                                    transition: {
                                                        type: "spring",
                                                        bounce: 0.2,
                                                        duration: 2
                                                    }
                                                }} className='col-md-8 col-8'>
                                                <motion.img style={{ borderRadius: "30px" }} whileHover={{ scale: 1.05 }} width="100%" height="200px" src={FlightCroped} />

                                            </motion.div><motion.div
                                                initial={{ x: 100 }}
                                                whileInView={{
                                                    x: 0,
                                                    transition: {
                                                        type: "spring",
                                                        bounce: 0.2,
                                                        duration: 2
                                                    }
                                                }} className='col-md-4 col-4'>

                                                <motion.img style={{ borderRadius: "30px" }} whileHover={{ scale: 1.05 }} width="100%" height="200px" src={Tracks} />

                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ y: -200 }}
                                whileInView={{
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 2
                                    }
                                }} className='col-md-5'>
                                <motion.img style={{ borderRadius: "30px" }} whileHover={{ scale: 1.05 }} width="100%" height="320px" src={Shipments} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
