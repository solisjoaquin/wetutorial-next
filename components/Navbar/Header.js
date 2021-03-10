import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex justify-between px-6 mt-6 mb-4 xl:mt-12 lg:px-32 items-center">
            <div className="font-bold text-2xl md:text-3xl tracking-tight text-black dark:text-white">
                <Link href="/">
                    WeTutorial
                </Link>
            </div>

            <div>

                <Link href="/courses" className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Courses</Link>
                <a href="https://twitter.com/wetutorial_" className="mx-4 p-1 sm:p-4 text-gray-900 dark:text-gray-100">Twitter</a>
                <Link href="/wiki" className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Wiki</Link>

            </div>
        </div>
    )
}

export default Header
