
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
                            <a href="#" className="flex items-center justify-center lg:max-w-sm px-4 py-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-green-100 hover:bg-green-50">
                                Join Discord group
                            </a>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
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