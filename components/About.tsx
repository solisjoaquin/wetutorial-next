import { NextPage } from "next"

export const About: NextPage<{}> = () => {
    return (

        <div className="py-24 bg-white bg-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="title mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                        FAQs
                        </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
                        We want to help you not postpone courses any longer. That is our main goal for this website.                    </p>
                </div>

                <div className="mt-10 mb-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-50">
                                    How is the group modality?
                                </dt>
                                <dd className="mt-2 text-base text-gray-200">
                                    We select an online course and create a study group on Slack. These groups are meant to help each other, NOT TO SHARE CONTENT.
                                </dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-50">
                                    What platform do the groups study from?
                                </dt>
                                <dd className="mt-2 text-base text-gray-200">
                                    The groups study from the original platform (Youtube, Udemy, etc).
                                    If the course is paid, only people who have purchased it are allowed to participate.
                                </dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-50">
                                    How long is each study group?
                                </dt>
                                <dd className="mt-2 text-base text-gray-200">
                                    Each group has a set period such as a week or two. After that, the group will be closed.                                </dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-50">
                                    What happens if someone shares paid content?
                                </dt>
                                <dd className="mt-2 text-base text-gray-200">
                                    We respect content creators for their work to teach us. We will not allow pirated content. That person will no longer participate on Slack.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}

export default About;