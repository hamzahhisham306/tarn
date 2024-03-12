import React from 'react';
import Link from 'next/link';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src="/img/logo.png" alt="logo" />
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                            <ul className="social-link">
                                <li>
                                    <Link href="https://www.facebook.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.twitter.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                    <li>
                                    <Link href="/about-us">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies-2-columns">
                                        <a>Case Studies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a>Our Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a href="contact.html">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Resources</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/team">
                                        <a>Our Scientists</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a>Our Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonials">
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a>SaaS Solutions</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies-2-columns">
                                        <a>Case Studies</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    175 5th Ave, New York, NY 10010, <br /> United States
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">+1 (123) 456 7890</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hello@tarn.com">hello@tarn.com</a>
                                </li>
                                <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">+55 785 4578964</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright &copy;{currentYear} <strong>Tarn</strong> All rights reserved <a target="_blank" href="https://envytheme.com/">EnvyTheme</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src="/img/footer-map.png" alt="image" />
            </div>
        </footer>
    );
}

export default Footer;