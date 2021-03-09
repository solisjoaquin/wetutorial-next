
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import CourseDetail from '../../components/CourseDetail'
import Footer from "../../components/Footer";
import Header from "../../components/Navbar/Header";

const BlogPage: NextPage<{
    title: string;
    text: string;
    author: string;
}> = (props) => {

    return (
        <div>
            <Header />


            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <div className="px-4 py-6 sm:px-0">
                        <div className="shadow-lg rounded-lg ">
                            <CourseDetail course={props} />

                        </div>
                        <div className="flex items-center justify-center py-5">
                            <a href="https://discord.gg/cV6VH7Ks">
                                <button className=" sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-2 xl:px-8 text-white transition ease-in-out duration-150 bg-green-700 hover:bg-green-600 active:bg-blue-700" >
                                    Join Discord
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = (await import("../../lib/blogs.json")).
        default;
    const slugs = blogs.map(blog => blog.slug);
    const paths = slugs.map(slug => ({ params: { slug } }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({
    params: { slug }
}) => {
    const blogs = (await import("../../lib/blogs.json")).
        default;
    const blog = blogs.find(x => x.slug === slug)

    return {
        props: {
            title: blog.title,
            text: blog.text,
            author: blog.author,
            type: blog.type,
            startdate: blog.startdate,
            duration: blog.duration,
        }
    }
}

export default BlogPage;