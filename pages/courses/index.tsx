import { GetStaticProps, NextPage } from "next";
import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import Header from "../../components/Navbar/Header";
import Footer from '../../components/Footer'
import Course from '../../components/Course'



const BlogIndexPage: NextPage<{

    blogs: {
        slug: string;
        title: string;
        text: string;

    }[];
}> = props => {

    return (
        <>
            <Header username />

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg ">
                            <p>{props.blogs.map(x => {
                                return (
                                    <div>
                                        <Link
                                            href={`/courses/${x.slug}`}
                                            key={`/courses/${x.slug}`}
                                        >
                                            <Course course={x} />

                                        </Link>

                                    </div>)

                            })}</p>
                        </div>
                    </div>

                </div>
            </main>
            <Footer username />



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