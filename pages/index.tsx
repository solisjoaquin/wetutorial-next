
import { NextPage } from 'next';
import Cta from '../components/Cta'
import Header from '../components/Navbar/Header'
import About from '../components/About'
import { useAppContext } from '../context/state'
import CtaFooter from '../components/CtaFooter'
import React from 'react';
import Head from 'next/head'

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
            </Head>

            <Header />
            <Cta />
            <About />
            <CtaFooter />

        </div>
    );
};


export default SecretPage;