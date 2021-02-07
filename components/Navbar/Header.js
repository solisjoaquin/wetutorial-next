import Router from 'next/router'
import Link from 'next/Link'
import Image from 'next/image'

const Header = ({ username }) => {
    return (
        <div className="flex justify-between p-10 lg:px-32 items-center">
            <div className="text-xl font-bold">
                <Link href="/">
                    WeTutorial
            </Link>
            </div>
            {!username ?
                <div
                    className="cursor-pointer"
                    onClick={() =>
                        Router.push(username ?? `/api/login`)
                    }
                >
                    Login
            </div>
                :
                <div>
                    <Image
                        src="/icon-user.webp"
                        alt="Picture of the author"
                        width={25}
                        height={25}
                    />
                </div>
            }
        </div>
    )
}

export default Header
