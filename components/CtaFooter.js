import { useState } from 'react'
import { useTheme } from 'next-themes';
import Button from './Button'

function CtaFooter() {

    const [hasSubmitted, setHasSubmitted] = useState(false);


    function handleOnSubmit(e) {
        e.preventDefault();
        e.persist();

        setHasSubmitted(true);

        const { currentTarget } = e;

        setTimeout(() => {
            currentTarget.submit();
            setHasSubmitted(false);
        }, 1000);
    }
    const { theme, setTheme } = useTheme();
    return (
        <div class="py-20 dark:bg-gray-900">
            <div class="max-w-2xl mx-auto text-center px-4 sm:py-12 sm:px-6 lg:px-8">
                <h2 class="text-3xl mb-8 leading-9 font-extrabold text-gray-700 sm:text-4xl sm:leading-10 dark:text-white">
                    <span class="block">Subscribe to receive updates about study groups</span>
                </h2>

                <div class="w-full text-center">
                    <form action="https://app.convertkit.com/forms/2112856/subscriptions" method="post" onSubmit={handleOnSubmit}>
                        <div class=" mx-auto p-1 pr-0 flex justify-center" >
                            <input type="email" placeholder="paul.cardall@example.com" class="flex-1 appearance-none rounded shadow-lg p-4 text-grey-dark mr-2 focus:outline-none rounded-full " />
                            <button disabled={hasSubmitted} className=" sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-3 xl:px-8 text-white transition ease-in-out duration-150 bg-blue-700 hover:bg-blue-600 active:bg-blue-700" >
                                Submit
                            </button>


                        </div>
                    </form>


                </div>

                {/*                 <a href="https://discord.gg/cV6VH7Ks">
                    <button className=" sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-2 xl:px-8 text-white transition ease-in-out duration-150 bg-blue-700 hover:bg-blue-600 active:bg-blue-700" >
                        Join Discord
                    </button>
                </a> */}
            </div>
        </div>
    )
}

export default CtaFooter;

