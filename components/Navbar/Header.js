import Router from 'next/router'
import Link from 'next/Link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex justify-between px-6 mt-6 xl:mt-12 lg:px-32 items-center">
            <div className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
                <Link href="/">
                    WeTutorial
            </Link>
            </div>
            <div>
                <Link href="/wiki" class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Wiki
                </Link>

            </div>
        </div>
    )
}

export default Header
