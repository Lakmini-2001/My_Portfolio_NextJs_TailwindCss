import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
  { skill: "UI/UX" },
  { skill: "Crafting" },
  { skill: "French" },
  { skill: "Trilingual" },
  { skill: "Music" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Lakmini and I am a{" "}
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" ambitious"}</span> IT Undergraduate from in Sri Lanka.
            </p>
            <br />
            <p>
            Currently studying at the University of Sri Jayewardenepura, 
            I've been captivated by technology and its evolution since my teenage years. 
            Above all, What truly sparks my passion, however, is the enchanting world of UI/UX design.
            </p>
            <br />
            <p>
            Driven by a passion for continuous learning, I'm currently expanding my horizons by learning French, 
            recognizing its potential to enhance my global prospects within the IT domain.
            </p>
            <br />
            <p>
            Outside of academics, I find joy in various hobbies including scrapbooking, 
            journaling, reading, and indulging in music and movies. 
            These activities not only provide relaxation but also nurture my creativity.
            </p>
            <br />
            <p>
            One quote that resonates deeply with me is by Maya Angelou:{" "}
              <span className="font-bold text-purple-600">
              "Do the best you can until you know better. Then when you know better, do better."
              </span>{" "}
              This philosophy fuels my commitment to personal and professional growth, 
              as I strive to exceed my own expectations and embrace new challenges.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hi_girl.png"
              alt=""
              width={900}
              height={900}
              className="hidden md:block md:bottom-4 md:left-35 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
