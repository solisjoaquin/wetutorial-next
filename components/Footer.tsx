import { NextPage } from "next"

export const Footer: NextPage<{}> = () => {
    return (
        <div className="py-4">
            <ul className="flex text-sm justify-center dark:text-white">
                <li className="mx-2"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/wetutorial_">Twitter</a></li>
                <li className="mx-2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/solisjoaquin/wetutorial-next">Github</a></li>
                <li className="mx-2"><p>© WeTutorial 2021 </p></li>
            </ul>
        </div>
    )
}
export default Footer;