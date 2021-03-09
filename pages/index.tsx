
import { GetServerSideProps, NextPage } from 'next';
import Cta from '../components/Cta'
import Header from '../components/Navbar/Header'
import About from '../components/About'
import CtaFooter from '../components/CtaFooter'
import { useContext } from 'react'
import { useAppContext } from '../context/state'
import auth0 from '../lib/auth0';
import React from 'react';
import Router from "next/router";
import Head from 'next/head'



const SecretPage: NextPage<{
    ms: string;
    username?: string;
    error?: string;
}> = (props) => {
    const ms = useAppContext()
    return (
        <div>
            <Head>
                <title>WeTutorial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Header />

                <Cta />

                <About />
                <CtaFooter />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
    req,
    res,
}) => {
    try {
        const { user } = await auth0.getSession(req);
        return {
            props: {
                username: user.name,
            },
        };
    } catch (error) {
        return {
            props: { error: error.message },
        };
    }
};

export default SecretPage;