import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Header from '../../components/Navbar/Header'
import CtaFooter from '../../components/CtaFooter'
import CourseDetail from '../../components/CourseDetail'
import { StepsCursoDesarrollo } from '../../components/StepsCursoDesarrollo'

const WebCourse = (props) => {
    return (
        <div className="dark:bg-gray-900">
            <Header />
            <main className="dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-center flex-col px-4 py-6 sm:px-0">
                        <div className=" max-w-2xl">
                            <CourseDetail course={props} />

                        </div>
                        <div className="flex items-center justify-center py-5">
                            <a href={props.url}>
                                <button className=" sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-2 xl:px-8 text-white transition ease-in-out duration-150 bg-blue-700 hover:bg-blue-600 active:bg-blue-700" >
                                    course link
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </main>
            <StepsCursoDesarrollo />
            <CtaFooter />
        </div>
    )
}

export default WebCourse;

export const getStaticProps = async ({

}) => {
    const blogs = (await import("../../lib/desarrollo.json")).
        default;
    const blog = blogs.find(x => x.slug === "desarrollo-web")

    return {
        props: {
            title: blog.title,
            text: blog.text,
            author: blog.author,
            type: blog.type,
            startdate: blog.startdate,
            duration: blog.duration,
            url: blog.url
        }
    }
}

