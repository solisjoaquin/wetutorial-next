const CourseDetail = ({ course }) => {

    return (<div class="bg-blue-200 shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5   sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Course details
            </h3>
            {/*             <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
    </p> */}
        </div>
        <div class="border-t border-gray-200">
            <dl>
                <div class="bg-gray-50 dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Course name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.title}
                    </dd>
                </div>
                <div class="bg-white dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Author
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.author}
                    </dd>
                </div>
                <div class="bg-gray-50 dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Price
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.type}
                    </dd>
                </div>
                <div class="bg-white dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Start date
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.startdate}
                    </dd>
                </div>
                <div class="bg-gray-50 dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        About
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.text}
                    </dd>
                </div>

            </dl>
        </div>
    </div>)

}

export default CourseDetail