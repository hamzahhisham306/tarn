import React from 'react';
import Link from 'next/link';

const ServiceSidebar = ({ dataReated }) => {
    return (
        <div className="services-details-info">
            <ul className="services-list">
                {dataReated?.map((item) => {
                    return <li>
                        <Link href={`/show-service/${item?.slug}`}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                })}

            </ul>
            <div className="services-contact-info">
                <h3>Contact Info</h3>

                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Phone:</span>
                        <a href="tel:+21453545413" target="_blank">+2145 354 5413</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Location:</span>
                        New York, USA
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-envelope'></i>
                        </div>
                        <span>Email:</span>
                        <a href="mailto:hello@tarn.com">hello@tarn.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceSidebar;