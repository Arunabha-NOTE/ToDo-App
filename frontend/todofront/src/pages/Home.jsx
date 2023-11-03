import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import globalBG from "../assets/hero-bg.png";
import AOS from "aos";

const Home = () => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 200,
        duration: 800,
        easing: 'ease',
        anchorPlacement: 'top-bottom',

    });
    return (
        <>
            <div>
                <div className='font-mono text-dracxt bg-dracula'>
                    <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
                        <div className='bg-pracula'>
                            <Navbar />
                        </div>
                        <div style={{backgroundImage: `url(${globalBG})`}} className='h-[37vw] lg:bg-fixed bg-cover bg-no-repeat'>
                            <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center align-middle mx-[5vw] pt-[5vh] lg:pt-[10vh]'>
                                <Hero />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;