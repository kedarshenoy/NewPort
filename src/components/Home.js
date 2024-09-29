import React from 'react'

export default function Home() {
  return (
    <div className='text-white'>
      <h1>
        A KEDAR SHENOY
      </h1>
      <h2>
      Passionate about crafting seamless web and mobile applications that connect users with technology.
      </h2>
      <div className="stacks">
            {/* <Typed */}
            <div
              strings={[
                "HTML ",
                "CSS ",
                "Bootstrap",
                "Tailwind",
                "JavaScript",
                "React JS",
                "Typescript",
                "Node JS",
                "ExpressJS",
                "next JS",
                "MongoDB",
                "Mongoose",
                "Prisma",
                "Postgress",
                "API",
                "php",
                "SQL",]}
              typeSpeed={40}
              backSpeed={50}
              cursorChar='❕'
              loop
            >
              <span id="element"> </span>
            {/* </Typed> */}
            </div>
          </div>
    </div>
  )
}
