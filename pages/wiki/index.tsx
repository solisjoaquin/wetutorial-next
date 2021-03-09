import Link from "next/dist/client/link";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar/Header";
import Head from 'next/head'
import { GetStaticProps, NextPage } from "next";

const WikiPage: NextPage<{
    wiki: {
        title: string,
        text: string,
        url: string
    }[];
}> = props => {
    return (
        <>
            <Head>
                <title>Wiki</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
                <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">

                    <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                        Resources
                    </h2>
                    <h3 className="prose text-gray-600 dark:text-gray-400 mb-16">
                        This is a list of free resources for developers. Follow us in <a className="text-blue-500" href="https://twitter.com/Wetutorial_">Twitter</a> for suggestions.
                    </h3>
                    {props.wiki.map(link => {
                        return (
                            <a href={link.url} className="mb-4 hover:shadow">
                                <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">

                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                                {link.title}
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">
                                                {link.text}
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            /*                             <a href={link.url} className="mb-4 hover:shadow">
                                                            <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                                                                <div className="h-8 w-8 ml-2 mr-4">
                                                                    JS
                                                                </div>
                                                                <div className="">
                                                                    <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">{link.title}</h4>
                                                                    <p className="leading-5 text-gray-700 dark:text-gray-300">
                                                                        {link.text}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a> */
                        )
                    })}
                </div>

            </main>

        </>
    )
};

export default WikiPage;

export const getStaticProps: GetStaticProps =
    async () => {
        const wiki = (await import('../../lib/wiki.json'))
            .default;
        return {
            props: { wiki }
        }
    }