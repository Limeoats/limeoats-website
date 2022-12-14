import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import SectionHeading from "../components/common/SectionHeading";
import SEO from "../components/common/SEO";
import ProjectCard from "../components/project-card";
import Button from "../components/ui/Button";

const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

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
                    <Button
                        styles="mt-9"
                        variant="outline"
                        arrow={true}
                        onClick={() => scrollToAnchor("about")}
                    >
                        Learn more
                    </Button>
                </div>
            </div>
            <Navbar home={true} />
            <div className="m-auto max-w-7xl lg:px-6">
                <div id="about" className="pt-10">
                    <SectionHeading
                        title="About me"
                        underlineColor="bg-section-verydark"
                    />
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div className="border-r px-6 py-2 lg:max-w-[50%] lg:border-r-section-verydark lg:px-2">
                            <Image
                                src="/images/about-pic.jpg"
                                alt="About"
                                width={500}
                                height={500}
                                className="w-full lg:h-[260px] lg:w-[96%]"
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

                    <ProjectCard
                        title="Bomb Game"
                        image={"/images/bomb game/bomb-game-promo.png"}
                        feature
                    />
                    <ProjectCard title="Lime2D" image={"/images/lime2d.png"} />
                    <ProjectCard
                        title="BigNumber"
                        image={"/images/bignumber.png"}
                    />
                    <ProjectCard
                        title="Project Euler"
                        image={"/images/projecteuler.png"}
                    />
                    <ProjectCard
                        title="A Note For Lime"
                        image={"/images/anoteforlime.png"}
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
