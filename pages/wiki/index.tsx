import Link from "next/dist/client/link";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar/Header";

const WikiPage = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
                <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">

                    <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                        Resources
                    </h2>
                    <h3 className="prose text-gray-600 dark:text-gray-400 mb-16">
                        This is a list of free resources for developers. Follow us in <a className="text-blue-500" href="https://twitter.com/Wetutorial_">Twitter</a> for suggestions.
                    </h3>

                    <a href="" className="mb-4 hover:shadow">
                        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="h-8 w-8 ml-2 mr-4">
                                JS
                            </div>
                            <div className="">
                                <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">Javascript</h4>
                                <p className="leading-5 text-gray-700 dark:text-gray-300">
                                    Build and deploy a modern Jamstack application using the most popular open-source software.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>

            </main>

        </>
    )
};

export default WikiPage;