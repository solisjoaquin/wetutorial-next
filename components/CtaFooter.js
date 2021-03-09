import { Link } from 'next/Link'

function CtaFooter() {
    return (
        <div class="bg-gray-600 py-20">
            <div class="max-w-2xl mx-auto text-center px-4 sm:py-12 sm:px-6 lg:px-8">
                <h2 class="text-3xl mb-8 leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                    <span class="block">Start shipping better websites today!</span>
                </h2>

                <a href="/">
                    <button className=" sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-2 xl:px-8 text-white transition ease-in-out duration-150 bg-green-700 hover:bg-green-600 active:bg-blue-700" >
                        Join Discord
                </button>
                </a>
            </div>
        </div>
    )
}

export default CtaFooter;