
import Router from "next/router";

import { GetServerSideProps, NextPage } from "next";
import auth0 from "../lib/auth0";

const SecretPage: NextPage<{
    username?: string;
    error?: string;
}> = (props) => {
    return (
        <div>

            <div

            >
                <div >
                    {props.error ? "You are not logged in" : "Welcome"}
                </div>
                <p >{props.error ?? props.username}</p>
                <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"

                    onClick={() =>
                        Router.push(props.error ? `/api/login` : `/api/logout`)
                    }
                >
                    {props.error ? "Log in" : "Log out"}
                </div>
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