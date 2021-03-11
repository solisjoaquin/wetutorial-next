import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import Header from "../../components/Navbar/Header";
import Head from 'next/head'

const BlogIndexPage: NextPage<{
    username: string;
    blogs: {
        slug: string;
        title: string;
        text: string;

    }[];
}> = props => {

    return (
        <>
            <Head>
                <title>Courses</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />

            <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
                <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">

                    <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                        Courses
                    </h2>
                    <h3 className="prose text-gray-600 dark:text-gray-400 mb-16">
                        This is the list of the next groups. Follow us on <a className="text-blue-500" href="https://twitter.com/Wetutorial_">Twitter</a> for suggestions.
                    </h3>
                    {props.blogs.map(course => {
                        return (
                            <Link href={`/courses/${course.slug}`} key={`/courses/${course.slug}`}>

                                <div className="mb-4 hover:shadow cursor-pointer flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                                {course.title}
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">
                                                {course.text}
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>

            </main>




        </>
    )
}

export const getStaticProps: GetStaticProps =
    async () => {
        const blogs = (await import("../../lib/blogs.json"))
            .default;
        return {
            props: { blogs }
        }
    };


export default BlogIndexPage;