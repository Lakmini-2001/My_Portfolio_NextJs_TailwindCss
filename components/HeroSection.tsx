"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/lakmini_headshot1.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-4/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">Hi, I&#39;m Lakmini!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m an aspiring{" "}
            <span className="font-semibold text-purple-600">
            IT Undergraduate {" "}
            </span>
            based in Sri Lanka, driven by a passion for crafting exceptional user experiences 
            with a focus on {" "}
            <span className="font-semibold text-purple-600">
            UI/UX Design {" "}
            </span>
            .Let's make technology truly delightful.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
