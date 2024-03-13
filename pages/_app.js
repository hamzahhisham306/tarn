import '../public/css/bootstrap.min.css';
import 'animate.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import '../public/css/Colors.css';

import { RecoilRoot } from 'recoil'
import App from 'next/app';
import Layout from '../components/_App/Layout';
const url ="https://assispanel.com/api"

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <RecoilRoot>
                <Layout url={url}>
                    <Component {...pageProps} url={url}/>
                </Layout>
            </RecoilRoot>
        );
    }
}