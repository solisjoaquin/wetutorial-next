
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/Link'
import { Router } from 'next/router';
import auth0 from '../lib/auth0';

const IndexPage: NextPage<{
    username?: string,
    error?: string
}> = (props) => {
    return (
        <>
            <nav className="flex flex-col">
                <h1 className="text-2xl text-center" >WeTutorial</h1>

                <div className="flex justify-center p-2">
                    <Link href="/about">about</Link>
                    <Link href="/about/me">about me</Link>

                </div>
            </nav>
        </>
    )
};
/* export const getServerSideProps: GetServerSideProps = async ({
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
}; */

export default IndexPage;