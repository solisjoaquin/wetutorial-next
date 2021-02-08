import Link from 'next/Link'

function Cta() {
    return (

        <>
            <section class="text-gray-700 body-font">
                <div class="container px-8 pt-32 pb-24 mx-auto lg:px-4">
                    <div class="flex flex-col w-full mb-12 text-center">
                        <h2 class="mb-1 text-xs font-semibold tracking-widest text-green-600 uppercase title-font">
                            Learn togueter</h2>
                        <h1 class="mb-6 text-3xl font-semibold tracking-tighter text-green-800 sm:text-5xl title-font">
                            Start your saved course with a group
                </h1>
                        <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">Whatever cardigan
                        tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of
                        them man
                    bun deep.</p>
                    </div>
                    <div class="flex justify-center">
                        <button
                            class="inline-flex px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none">
                            <Link href="/courses">
                                Courses
                        </Link>
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cta
