import { NextPage } from "next"


interface Props {
    course: {
        title: string,
        author: string,
        type: string,
        date: string,
        startdate: string,
        text: string
    };
}

const CourseDetail: NextPage<Props> = ({ course }) => {

    return (<div className="bg-blue-200 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5   sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Course details
            </h3>
            {/*             <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
    </p> */}
        </div>
        <div className="border-t border-gray-200">
            <dl>
                <div className="bg-gray-50 dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Course name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.title}
                    </dd>
                </div>
                <div className="bg-white dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Author
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.author}
                    </dd>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Price
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.type}
                    </dd>
                </div>
                <div className="bg-white dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Start date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.startdate}
                    </dd>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        About
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                        {course.text}
                    </dd>
                </div>

            </dl>
        </div>
    </div>)

}

export default CourseDetail