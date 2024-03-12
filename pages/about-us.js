import React, { useState, useEffect } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import OurHistory from '../components/AboutUs/OurHistory';
import WhyChooseUs from '../components/AboutUs/WhyChooseUs';
import HowItWork from '../components/AboutUs/HowItWork';
import TeamMembers from '../components/AboutUs/TeamMembers';
import Testimonials from '../components/AboutUs/Testimonials';
import Partner from '../components/AboutUs/Partner';
import Footer from '../components/_App/Footer';
import axios from "axios"
const AboutUs = (props) => {
console.log("prospAbout>>>",props)
    const [data, setData] = useState([]);
    const getData = async () => {
        const url = process.env.REACT_BACKEND_URL;
        await axios.get(`${url}/get_about`).then((res) => {
            setData(res.data?.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData();
    }, [])
    

    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="About Us"
                homePageText="Home"
                homePageUrl="/"
                activePageText="About Us"
            />
            <AboutUsContent data={data}/>
            <OurHistory />
            <WhyChooseUs />
            <HowItWork />
            <TeamMembers />
            <Testimonials />
            <Partner />
            <Footer />
        </>
    );
}

export default AboutUs;

export async  function getServerSideProps() {
    const url = process.env.REACT_BACKEND_URL;
  const respones = await axios.get(`${url}/get_about`).catch((err) => {
      console.log(err);
  })
  return {
      props: {
          dataAbout: respones?.data?.data,
      }
  }
}