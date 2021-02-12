import Link from 'next/Link'
import Router from 'next/router'

const Footer = () => {
    return (
        <footer className="bg-white  w-full py-8">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between">
                <ul className="max-w-screen-md mx-auto text-lg font-light flex ">
                    <li className="my-2 mx-3">
                        <Link className="text-gray-400 hover:text-gray-800  transition-colors duration-200" href="/faq">
                            FAQ
                        </Link>
                    </li>
                    <li className="my-2 mx-3">
                        <Link className="text-gray-400 hover:text-gray-800 transition-colors duration-200" href="about">
                            About
                        </Link>
                    </li>




                </ul>
            </div>
        </footer>
    )
}

export default Footer
