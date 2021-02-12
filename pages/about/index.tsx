import Link from "next/dist/client/link";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar/Header";

const AboutPage = () => {
    return (
        <>
            <Header />
            <section className="text-gray-700 body-font">
                <div className="container px-8 mx-auto pt-36 lg:px-4">
                    <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                        <h2 className="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">a great header right here</h2>
                        <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-6xl title-font">
                            About WeTutorial
                    </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">Whatever cardigan
                        tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of
                        them man
                        bun deep.</p>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default AboutPage;