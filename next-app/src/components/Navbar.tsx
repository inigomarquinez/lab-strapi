import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">

            <ul className="flex justify-center">
                <li className="p-3 m-4">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-3 m-4">
                    <Link href="/strapi">Strapi</Link>
                </li>
                <li className="p-3 m-4">
                    <Link href="/payload-cms">Payload CMS</Link>
                </li>
            </ul>
        </nav>
            )
}

export default Navbar