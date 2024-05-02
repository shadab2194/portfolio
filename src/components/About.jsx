import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>A dynamic individual eager to learn and succeed in the every opportunity given. I can work with a positive attitude, with belief that I can complete all the work assigned to me. An honest, loyal and committed team player who works hard to achieve all goals. I am also a good leader, capable of bringing out the best of my team.
        </p>
        <br />
        <p className='text-xl'>Over the years, I have worked with few companies to learn and utilised my knowledge. I have also founded and managed an enterprise as well. Further more, I found myself more aligned towards the ever growing technological sector, thus decided to pursue my career in it. </p>
      </div>
    </div>
  )
}

export default About
