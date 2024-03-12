import React from 'react';

const HowItWork = () => {
    return (
        <section className="process-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" />
                        How It's Work
                    </span>
                    <h2>Next-Level Advantage</h2>
                    <p>3 Reasons Our Solutions Redefine Business Success</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">1</div>
                            <div className="image">
                                <img src="/img/process/process1.png" alt="image" className="imgNext" />
                            </div>
                            <h3 className="titleNext">Strategic Growth and Efficiency</h3>
                            <p className="parNext">Experience a surge in business performance as our Business Improvement solutions unlock new levels of efficiency and strategic growth.

                                Through meticulous analysis and optimization of your operations, we identify and eliminate bottlenecks, streamline processes, and provide actionable insights.

                                The result? A leaner, more agile business ready to seize opportunities and navigate challenges, setting the stage for sustainable growth
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">2</div>
                            <div className="image">
                                <img src="/img/process/process2.png" alt="image" className="imgNext" />
                            </div>
                            <h3 className="titleNext">Amplified Market Presence and Engagement</h3>
                            <p className="parNext">With our advanced Marketing Systems, enjoy a dynamic and impactful presence in the market.

                                Benefit from targeted campaigns, harnessing the latest technologies and data-driven strategies to reach your audience effectively.

                                From heightened customer acquisition to improved retention rates, our solutions ensure that your business not only attracts attention but fosters lasting connections, establishing a strong and loyal customer base.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">3</div>
                            <div className="image">
                                <img src="/img/process/process3.png" alt="image" className="imgNext" />
                            </div>
                            <h3 className="titleNext"> Memorable Brand Identity and Recognition</h3>
                            <p className="parNext">Make an indelible mark on your industry with our Branding & Design solutions. Our creative experts craft compelling visual identities that resonate with your audience, ensuring your brand stands out in a crowded market.

                                Whether it's a refreshed logo, a complete visual overhaul, or strategic brand positioning, we elevate your business aesthetics.

                                Enjoy increased brand recognition, trust, and loyalty as your business becomes synonymous with quality and distinction.
                            </p>
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

export default HowItWork;