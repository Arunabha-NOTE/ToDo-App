import React, {Component} from 'react';
import NavLogo from "../assets/Microsoft_To-Do_icon.svg.png";

class Footer extends Component {
    render() {
        return (
            <>
                <div>
                    <footer className="">
                        <div className="w-full mx-auto md:py-8">
                            <div className="sm:flex sm:items-center md:pt-0 pt-[2.5vh] sm:justify-between">

                                <a href="/" className="flex items-center align-middle text-center justify-center mb-4 sm:mb-0">
                                    <img src={NavLogo} alt="IC HACK 2.0" className='w-10 lg:w-10'/>

                                </a>
                                <ul className="flex flex-wrap items-center mb-6 text-sm text-center justify-center font-medium text-dracxt sm:mb-0">
                                    <li className='hover:text-pracula'>
                                        <a href="mailto:arunabham2017@gmail.com" className="mr-4 hover:underline md:mr-6 ">E-MAIL</a>
                                    </li>
                                    <li className='hover:text-pracula'>
                                        <a href="https://www.instagram.com/arunabha_mukhopadhyay/" className="mr-4 hover:underline md:mr-6 ">INSTAGRAM</a>
                                    </li>
                                    <li className='hover:text-pracula'>
                                        <a href="https://www.linkedin.com/arunabha_mukhopadhyay" className="mr-4 hover:underline md:mr-6">LINKEDIN</a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="my-6 border-pracula sm:mx-auto lg:my-2" />
                            <span className="block text-sm text-dracxt font-light mt-6 sm:text-center text-center md:pb-0">© 2023 <a href="/" className="hover:underline text-pracula">ToDO-APP</a></span>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;