import React from 'react';
import Link from 'next/link';

const ServicesStyleThree = () => {
    return (
        <section className="process-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">1</div>
                            <div className="image">
                                <img src="/img/process/process1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Frame the Problem</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">2</div>
                            <div className="image">
                                <img src="/img/process/process2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Collect the Raw Data</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">3</div>
                            <div className="image">
                                <img src="/img/process/process3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Process the Data</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box ">
                            <div className="number">4</div>
                            <div className="image">
                                <img src="/img/process/process4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Explore the Data</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">5</div>
                            <div className="image">
                                <img src="/img/process/process5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Perform In-depth Analysis</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">6</div>
                            <div className="image">
                                <img src="/img/process/process6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Communicate Results</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src="/img/shape/circle-shape1.png" alt="image" />
            </div>
        </section>
    )
}

export default ServicesStyleThree;