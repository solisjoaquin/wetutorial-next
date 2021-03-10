import Mailchimp from 'react-mailchimp-form'


function CtaFooter() {
    return (
        <div class="py-20">
            <div class="max-w-2xl mx-auto text-center px-4 sm:py-12 sm:px-6 lg:px-8">
                <h2 class="text-3xl mb-8 leading-9 font-extrabold text-gray-700 sm:text-4xl sm:leading-10">
                    <span class="block">Subscribe to receive updates about study groups</span>
                </h2>

                <div class="w-full text-center">
                    <form action="#">
                        <div class=" mx-auto p-1 pr-0 flex justify-center" >
                            {/*                             <input type="email" placeholder="paul.cardall@example.com" class="flex-1 appearance-none rounded shadow p-4 text-grey-dark mr-2 focus:outline-none rounded-full " />
                            <button className=" sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-3 xl:px-8 text-white transition ease-in-out duration-150 bg-green-700 hover:bg-green-600 active:bg-blue-700" >
                                Submit
                            </button> */}
                            <Mailchimp
                                action={process.env.REACT_APP_MAILCHIMP_URL}
                                fields={[
                                    {
                                        name: 'EMAIL',
                                        placeholder: 'Email',
                                        type: 'email',
                                        required: true
                                    }
                                ]}

                                messages={
                                    {
                                        sending: "Sending...",
                                        success: "Thank you for subscribing!",
                                        error: "An unexpected internal error has occurred.",
                                        empty: "You must write an e-mail.",
                                        duplicate: "Too many subscribe attempts for this email address",
                                        button: "Submit"
                                    }
                                }
                                className='sm:w-auto font-extralight inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-md xl:text-lg xl:py-3 xl:px-8 text-green-600 transition ease-in-out duration-150 '
                            />
                        </div>
                    </form>
                </div>

                {/*                 <a href="https://discord.gg/cV6VH7Ks">
                    <button className=" sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-2 xl:px-8 text-white transition ease-in-out duration-150 bg-green-700 hover:bg-green-600 active:bg-blue-700" >
                        Join Discord
                    </button>
                </a> */}
            </div>
        </div>
    )
}

export default CtaFooter;

