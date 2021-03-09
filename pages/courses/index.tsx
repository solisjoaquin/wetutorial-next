import { GetStaticProps, NextPage } from "next";
import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import Header from "../../components/Navbar/Header";
import Head from 'next/head'
import Footer from '../../components/Footer'
import Course from '../../components/Course'

import auth0 from '../../lib/auth0';



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
                                <div className="cursor-pointer mb-4 hover:shadow flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                                    <div className="h-8 w-8 ml-2 mr-4">
                                        JS
                                    </div>
                                    <div className="">
                                        <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">{course.title}</h4>
                                        <p className=" leading-5 text-gray-700 dark:text-gray-300">
                                            {course.text}
                                        </p>
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