
import Header from "../../components/Navbar/Header";
import CtaFooter from "../../components/CtaFooter"
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


                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
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
                        )
                    })}
                </div>

            </main>
            <CtaFooter />
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