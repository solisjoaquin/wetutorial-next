import Link from 'next/link'

function Cta() {
    return (

        <>
            <section class=" text-gray-700 body-font">
                <div class="container px-8 pt-32 pb-24 mx-auto lg:px-4">
                    <div class="flex flex-col w-full mb-12 text-center">

                        {/* <h1 class="mb-6 text-3xl tracking-tighter text-blue-800 sm:text-5xl title-font">
                            Start your saved course with a group
                        </h1> */}
                        <div className=" px-4 sm:px-8 xl:pr-16 md:max-w-3xl md:m-auto">


                            <h2 className="pb-5 text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">Start your saved course with a group</h2>

                            <div className="font-light text-gray-800 sm:text-2xl sm:leading-7">
                                <p>Join a study group to start those saved courses, learn to code,
                                    create a project for your portfolio, and develop new skills. </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">

                        <Link href="/courses">
                            <button className=" sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-2 xl:px-8 text-white transition ease-in-out duration-150 bg-blue-700 hover:bg-blue-600 active:bg-blue-700" >
                                Courses
                                </button>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cta
