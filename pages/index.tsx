
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/Link'
import Cta from '../components/Cta'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { useAppContext } from '../context/state'
import auth0 from '../lib/auth0';
import React from 'react';
import Router from "next/router";



const SecretPage: NextPage<{
    ms: string;
    username?: string;
    error?: string;
}> = (props) => {
    const ms = useAppContext()
    return (
        <div>

            <div>
                <Header />

                <Cta />

                <Footer />
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