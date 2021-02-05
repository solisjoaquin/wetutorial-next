import { GetStaticProps, NextPage } from "next";
import Link from "next/Link";
import { useRouter } from "next/router";
import useSWR from "swr";




const BlogIndexPage: NextPage<{
    blogs: {
        slug: string;
        title: string;
        text: string
    }[];
}> = props => {

    return (
        <>
            <h1>Table of contents</h1>
            <p>{props.blogs.map(x => {
                return (
                    <div>
                        <Link
                            href={`/blog/${x.slug}`}
                            key={`/blog/${x.slug}`}
                        >
                            {x.title}
                        </Link>
                    </div>)

            })}</p>



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