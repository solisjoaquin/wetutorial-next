
import Link from 'next/Link'

const IndexPage = () => {
    return (
        <>
            <nav className="flex flex-col">
                <h1 className="text-2xl text-center" >Hello</h1>
                <div className="flex justify-center p-2">
                    <Link href="/about">about</Link>
                    <Link href="/about/me">about me</Link>
                </div>
            </nav>
        </>
    )
};

export default IndexPage;