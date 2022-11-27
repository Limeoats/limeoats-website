import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import SectionHeading from "../components/common/SectionHeading";
import SEO from "../components/common/SEO";
import Button from "../components/ui/Button";

const Home: NextPage = () => {
    return (
        <>
            <SEO
                title="Limeoats"
                description="Hello! My name is Mark and I develop video games, 
                libraries, and tutorials related to all things programming."
            />
            <div className="relative flex h-screen justify-center bg-section-dark px-4">
                <div className="absolute top-[25%] px-5 text-center sm:top-[30%]">
                    <h1 className="text-6xl leading-tight text-white">
                        {"Hello, I'm"}{" "}
                        <span className="text-limeoats-green">Limeoats</span>.
                    </h1>
                    <h2 className="mt-8 text-3xl text-white md:text-4xl">
                        {"I'm a game developer and a web developer."}
                    </h2>
                    <Button styles="mt-9" variant="outline" arrow={true}>
                        Learn more
                    </Button>
                </div>
            </div>
            <Navbar />
            <div className="m-auto max-w-7xl lg:px-6">
                <div id="about" className="mt-10">
                    <SectionHeading
                        title="About me"
                        underlineColor="bg-section-verydark"
                    />
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div className="border-r p-6 lg:max-w-[50%] lg:border-r-section-verydark">
                            <Image
                                src="/images/about-pic.jpg"
                                alt="About"
                                width={500}
                                height={500}
                                className="mb-4 w-full lg:h-[260px] lg:w-[96%]"
                            />
                        </div>
                        <div className="p-6 text-lg lg:max-w-[50%]">
                            <p>
                                My name is Mark and I enjoy programming. I focus
                                mostly on{" "}
                                <span className="font-semibold">
                                    game development
                                </span>{" "}
                                and{" "}
                                <span className="font-semibold">
                                    web development
                                </span>
                                , but also have strong interests in virtual
                                reality, artificial intelligence, machine
                                learning, and more.
                            </p>
                            <p className="mt-4">
                                Here you can find all of the projects {"I've"}{" "}
                                worked on, current development projects,
                                programming-related blog posts, and even some
                                published work.
                            </p>
                            <p className="mt-4">
                                Thanks for visiting and enjoy!
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="mt-4" />
                <div id="projects" className="mt-10">
                    <SectionHeading
                        title="Projects"
                        underlineColor="bg-section-verydark"
                    />
                </div>
                {/*
            <div id="writing" className="mt-10">
                <SectionHeading
                    title="Writing"
                    underlineColor="bg-section-verydark"
                />
            </div> */}
            </div>
            <Footer />
        </>
    );
};

export default Home;
