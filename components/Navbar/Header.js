import Router from 'next/router'
import Link from 'next/Link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex justify-between p-10 lg:px-32 items-center">
            <div className="text-xl font-bold">
                <Link href="/">
                    WeTutorial
            </Link>
            </div>
            <div>
                {/* <a className="text-blue-500" href="https://twitter.com/Wetutorial_">
                    Twitter
                </a> */}

                <a href="https://twitter.com/Wetutorial_" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Twitter
        </a>

            </div>
        </div>
    )
}

export default Header
