import { NextPage } from "next"

export const Steps: NextPage<{}> = () => {
    return (
        <div className="pt-24 pb-24 sm:pb-28 mx-auto px-8 max-w-7xl" >

            <div className=" text-center" >
                <h3 className="text-2xl font-bold leading-7 text-gray-900 pb-8 sm:pb-12 sm:text-3xl dark:text-white" > Life cycle of a study group </h3>

                < div className="flex flex-col lg:flex-row" >
                    <div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 1 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " > Choose a course </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" > Look at the list of upcoming study groups and choose one.</p>
                    </div>
                    < div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 2 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " > Receive an invitation </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" > You will receive an invitation to participate in the study group.</p>
                    </div>
                    < div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 3 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " > Start the course </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" > Ask questions in the group to resolve our beloved < span className="text-red-400" > error messages</span>. Help others if you have already solved those issues.</p >
                    </div>
                    < div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 4 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " >End of the course </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" > After the set period, the study group will be closed and you can start a new one.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
