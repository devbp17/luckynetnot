import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Navbar from '../component/navbar';

function Apply() {
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-r from-blue-900 to-blue-700 w-screen h-[370px] flex justify-center items-center pt-[160px] flex-col overflow-x-hidden'>
      <h1 className='font-bold text-white text-5xl'>LuckyNetwork Careers</h1>
      <p className='font-bold text-white text-2xl mt-4'>Where Innovation Meets Minecraft Excellence</p>
    </div>
    <div className='w-screen h-0.5 bg-white'></div>
    <div className='w-screen p-18 pt-25 bg-[#1E1E1E]'>
      <h4 className='text-3xl font-bold mb-3'>Applicants</h4>
      <h5>Do you love the endless possibilities of Minecraft? Are you bursting with ideas for new and exciting server content? If so, then we want you! 
        <span className='block mt-5'>We are a Minecraft server that is all about bringing people together to have fun and express their creativity. We‘re looking for talented individuals who are passionate about creating new and engaging experiences for our players.</span></h5>
        <span className='block mt-5 mb-5'>Sound like you? No matter your experience level, we want to hear from you! We believe in supporting our team and helping everyone become the best they can be.</span>
      <h4 className='text-2xl font-bold mb-3'>What we‘re looking for:</h4>
      <ul className='list-disc ml-8 mb-5 text-[16px] marker:text-[21px]'>
      <li><strong>A passion for Minecraft: </strong>You live and breathe Minecraft. You‘re always on the lookout for new ways to play and create.</li>
      <li><strong>Creativity:</strong> You have a wealth of ideas for new server content, from minigames and adventures to custom items and builds.</li>
      <li><strong>Motivation: </strong>You‘re self-driven and excited to contribute to our server. You‘re not afraid to take on challenges and see projects through to completion.</li>
      <li><strong>Teamwork: </strong>You‘re a team player who can collaborate effectively with others.</li>
      </ul>
      <h5 className='mb-5'>If you think you have what it takes, then we encourage you to apply! We offer a fun and collaborative environment where you can learn, grow, and make a real impact on our server.</h5>
      <h4 className='text-2xl font-bold mb-3'>What we offer:</h4>
      <ul className='list-disc ml-6 mb-5 text-[16px] marker:text-[21px]'>
      <li>The opportunity to work with a talented and passionate team</li>
      <li>A chance to make a real difference in our server community</li>
      <li>A fun and collaborative work environment</li>
      <li>Flexible hours</li>
      </ul>
      <h5 className='mb-5'><strong>Please be aware:</strong> You must be at least 18 years old and reside in Indonesia to apply for a role with us.</h5>
      <div className='p-5 bg-purple-700 rounded'>
        <h4 className='font-bold text-2xl'>Developer (Minecraft/Website)</h4>
      </div>
      <h5 className='mb-5 mt-10 text-[21px]'>Requirements:</h5>
      <ul className='list-disc ml-7 mb-5 text-[16px] marker:text-[21px]'>
      <li>Proven experience with Java programming, specifically related to Minecraft (e.g., Bukkit, Spigot, Paper).</li>
      <li>Familiarity with Minecraft server setup and configuration.</li>
      <li>Problem-solving skills and the ability to debug and optimize code.</li>
      <li>Excellent communication skills and the ability to work in a team-oriented environment.</li>
      <li>Strong motivation and a passion for gaming, particularly Minecraft.</li>
      <li>[Optional] Experience with other programming languages or game development tools is a plus.</li>
      <li>Experience with version control systems, such as Git. for Java Developer or Website</li>
      </ul>
      <Link href="https://forms.luckynetwork.net/view.php?id=23063">
      <div className='flex flex-row justify-start items-center bg-amber-400 py-3 px-5 my-9 cursor-pointer w-[165px] rounded-4xl border-2 border-amber-200 hover:border-white hover:scale-105 transition-all duration-300 ease-in-out'>
          <p className='text-black font-bold'>Apply now</p>
          <div className='ml-3 flex justify-center items-center'>
            <Image
            src = "/arrow-right-circle-svgrepo-com.svg"
            alt = "arrow key"
            width={20}
            height={20}
            />
          </div>
      </div>
      </Link>
      <div className='p-5 bg-purple-700 rounded mt-9'>
        <h4 className='font-bold text-2xl'>Staff</h4>
      </div>
      <h5 className='mb-3 mt-10 text-[21px]'>Key Responsibilities:</h5>
      <ul className='list-disc ml-7 mb-5 text-[16px] marker:text-[21px]'>
      <li>Actively participate in and moderate our Minecraft server and Discord community to ensure a positive and inclusive atmosphere.</li>
      <li>Assist in organizing and running community events, such as game nights, tournaments, and special in-game activities.</li>
      <li>Respond to community members’ questions, concerns, and feedback promptly and professionally.</li>
      <li>Enforce community rules and guidelines consistently to maintain a safe and respectful environment.</li>
      <li>Collaborate with other staff members to develop and implement new ideas for community engagement and improvement.</li>
      <li>Provide support and assistance to new members to help them integrate into the community.</li>
      </ul>
      <h5 className='mb-3 mt-10 text-[21px]'>Requirements:</h5>
      <ul className='list-disc ml-7 mb-5 text-[16px] marker:text-[21px]'>
      <li>A positive attitude and a strong commitment to fostering a supportive community.</li>
      <li>Ability to work collaboratively with a team and independently when necessary.</li>
      <li>Strong problem-solving skills and the ability to handle conflicts or issues calmly and effectively.</li>
      <li>Proven experience in managing or moderating online communities, particularly within Minecraft or Discord.</li>
      </ul>
      <Link href="https://forms.luckynetwork.net/view.php?id=24008">
      <div className='flex flex-row justify-start items-center bg-amber-400 py-3 px-5 my-9 cursor-pointer w-[165px] rounded-4xl border-2 border-amber-200 hover:border-white hover:scale-105 transition-all duration-300 ease-in-out'>
          <p className='text-black font-bold'>Apply now</p>
          <div className='ml-3 flex justify-center items-center'>
            <Image
            src = "/arrow-right-circle-svgrepo-com.svg"
            alt = "arrow key"
            width={20}
            height={20}
            />
          </div>
      </div>
      </Link>
    </div>
    </>
  )
}

export default Apply
