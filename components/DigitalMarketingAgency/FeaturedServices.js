import React from 'react';
import Link from 'next/link';

const FeaturedServices = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        Our Services
                    </span>
                    <h2>Our Featured Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src="/img/services/service-icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Marketing Analysis</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More 
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src="/img/services/service-icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Email Marketing</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More 
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src="/img/services/service-icon3.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Website Optimization</a>
                                </Link>
                            </h3>
 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More 
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedServices;