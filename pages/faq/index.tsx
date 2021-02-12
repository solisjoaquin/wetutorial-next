import Link from "next/dist/client/link";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar/Header";

const FaqPage = () => {
    return (
        <>
            <Header />
            <section className="text-gray-700 body-font">

                <div className="container px-8 pt-24 mx-auto lg:px-4">
                    <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                        <h2 className="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">a great header right here</h2>
                        <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-6xl title-font">
                            FAQ </h1></div>
                    <div className="flex flex-wrap text-left">
                        <div className="px-8 py-6 lg:w-1/4 md:w-full">
                            <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                                Information 1
                        </h2>
                            <p className="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery
                            hexagon disrupt edison bulbche.</p>
                        </div>
                        <div className="px-8 py-6 lg:w-1/4 md:w-full">
                            <div className="flex items-center mb-3">
                                <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                                    Information 2
                            </h2>
                            </div>
                            <p className="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery
                            hexagon disrupt edison bulbche.</p>
                        </div>
                        <div className="px-8 py-6 lg:w-1/4 md:w-full">
                            <div className="flex items-center mb-3">
                                <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                                    Information 3
                            </h2>
                            </div>
                            <p className="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery
                            hexagon disrupt edison bulbche.</p>
                        </div>
                        <div className="px-8 py-6 lg:w-1/4 md:w-full">
                            <div className="flex items-center mb-3">
                                <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                                    Information 4
                            </h2>
                            </div>
                            <p className="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery
                            hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>

                </div>
            </section>


            <Footer />
        </>
    )
};

export default FaqPage;