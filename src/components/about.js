import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-screen h-screen bg-gradient-to-b from-gray-800 to-black flex-col flex items-center justify-center md:flex-row'>
      <div className='max-h-screen-lg mr-20 ml-20'>
        <h1 className='capitalize text-4xl mb-20 text-white'>
          about
        </h1>
        <p className='text-white font-sans'>
        Front-End Developer with a proven
ability to collaborate effectively with
senior developers while spending
extra time to be mentored. Enjoy
working closely with team members
to ensure workloads are effectively
redirected to bottlenecks and
personally picking up the slack when
necessary. With a passion for both
personal growth and for software
development, I attended a 1000+ hour
coding bootcamp to learn new
languages while sharpening existing
skills. Ready to apply my passion for
coding to a talented engineering
team to develop quality solutions.

        </p>
        <br></br>
        <p className='text-white font-sans'>
        Set up testing framework for team project using Mocha and
Chai to test the Node API.
 Worked in an agile environment with weekly stand-ups, kept
track of user stories/bugs in GitHub projects, and conducted
2 hours of sprint planning and sprint retrospectives per week.
 Pair programmed with 3 engineers, and reviewed team’s
code to provide additional perspective and catch previously
missed errors.
 Tested React components using Jest
        </p>
      </div>
    </div>
  )
}

export default About