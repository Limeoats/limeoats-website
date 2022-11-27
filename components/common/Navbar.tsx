import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <div className="flex flex-row justify-start bg-section-verydark px-4 py-2">
            <Link href="/">
                <Image
                    src="/images/logo-128.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    priority={true}
                />
            </Link>
            <div>
                <ul className="ml-8 flex h-full list-none items-center">
                    <li>
                        <Link
                            href="/"
                            className="mr-5 text-white text-opacity-50 hover:text-opacity-75"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#about"
                            className="mr-5 text-white text-opacity-50 hover:text-opacity-75"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#projects"
                            className="mr-5 text-white text-opacity-50 hover:text-opacity-75"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#writing"
                            className="text-white text-opacity-50 hover:text-opacity-75"
                        >
                            Writing
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
