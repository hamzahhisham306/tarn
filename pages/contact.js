import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';
import axios from 'axios';

const Contact = (props) => {
    return (
        <>
            <Navbar data={props}/>

            <PageBanner
                pageTitle="Contact"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Contact"
            />

            <ContactInfo data={props} />

            <ContactForm />

            <Footer data={props}/>
        </>
    );
}

export default Contact;


export async function getStaticProps() {
    const url = process.env.REACT_BACKEND_URL;
    const respones = await axios.get(`${url}/get_settings`).catch((err) => {
        console.log(err);
    })
    return {
        props: {
            data: respones?.data?.data,
        }
    }
}