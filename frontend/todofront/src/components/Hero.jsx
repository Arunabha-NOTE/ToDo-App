import AOS from "aos";
import "aos/dist/aos.css";
import SampleBg from "../assets/sample.png"

const Hero = () => {

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
            <section className="h-[35vw] items-center justify-center">
                <div
                    className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div
                        className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:mt-0 mt-8"
                        data-aos="fade-up">
                        <div>
                            <h1 className="text-5xl font-bold leading sm:text-7xl text-pracula">
                                TODO-APP
                            </h1>
                        </div>
                        <p className="lg:mt-6 mt-8 mb-2 text-lg sm:mb-12">A ToDo-App that helps boost productivity and to keep track of things you need to get done in a day
                        </p>
                        <div
                            className="flex flex-col mt-8 lg:mt-0 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" target="_noref" href="http://localhost:8080"
                               className="px-8 py-3 text-lg font-medium border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                Go TO TODO-APP
                            </a>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 overflow-hidden"
                        data-aos="fade-up">
                        <img src={SampleBg} className='h-[30vw] w-[30vw] justify-content-center'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;