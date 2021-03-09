import Router from 'next/router'
import Link from 'next/Link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex justify-between px-6 mt-6 xl:mt-12 lg:px-32 items-center">
            <div className="text-2xl font-bold">
                <Link href="/">
                    WeTutorial
            </Link>
            </div>
            <div>
                <a href="https://twitter.com/Wetutorial_" class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Twitter
                </a>

            </div>
        </div>
    )
}

export default Header
