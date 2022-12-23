import Image from "next/image";
import Link from "next/link";

const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

interface NavbarProps {
    home: boolean;
}

function Navbar({ home }) {
    return (
        <nav className="flex flex-row justify-start bg-section-verydark px-4 py-2">
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
                <ul
                    role="list"
                    className="ml-8 flex h-full list-none items-center"
                >
                    {home && (
                        <>
                            <li>
                                <Link
                                    href="/"
                                    className="mr-5 text-white text-opacity-50 hover:text-opacity-75"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <button
                                    className="mr-5 text-white text-opacity-50 hover:text-opacity-75"
                                    onClick={() => scrollToAnchor("about")}
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    className="mr-5 text-white text-opacity-50 hover:text-opacity-75"
                                    onClick={() => scrollToAnchor("projects")}
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    className="text-white text-opacity-50 hover:text-opacity-75"
                                    onClick={() => scrollToAnchor("writing")}
                                >
                                    Writing
                                </button>
                            </li>
                        </>
                    )}
                    {!home && (
                        <>
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
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
