import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    return (
        <>

            <PageBanner
                pageTitle="Contact" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact" 
            />

            <ContactInfo />

            <ContactForm />
            
        </>
    );
}

export default Contact;