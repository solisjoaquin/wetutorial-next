
import { NextPage } from 'next';
import Cta from '../components/Cta'
import Header from '../components/Navbar/Header'
import About from '../components/About'
import { useAppContext } from '../context/state'
import CtaFooter from '../components/CtaFooter'
import { Steps } from '../components/Steps'
import { ListOfPoints } from '../components/ListOfPoints'
import React from 'react';
import Head from 'next/head'
import Footer from '../components/Footer';

const SecretPage: NextPage<{
    ms: string;
    username?: string;
    error?: string;
}> = () => {
    const ms = useAppContext()
    return (
        <div className="dark:bg-gray-900">
            <Head>
                <title>WeTutorial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            <Cta />
            <ListOfPoints />
            <Steps />
            <About />
            <CtaFooter />
            <Footer />

        </div>
    );
};


export default SecretPage;