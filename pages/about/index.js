import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGit,
  FaUmbraco,
  FaSass
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiBootstrap,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiStrapi,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import CountUp from 'react-countup'
import { Tooltip } from "../../components/ToolTip";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'WEB DEVELOPMENT',
        icons: [
          <Tooltip tip="Html5">
            <FaHtml5 />
          </Tooltip>,
          <Tooltip tip="JavaScript">
            <FaJs />
          </Tooltip>,
          <Tooltip tip="TypeScript"><SiTypescript /></Tooltip>,
          <Tooltip tip="ReactJS"><FaReact /></Tooltip>,
          <Tooltip tip="NextJS"><SiNextdotjs /></Tooltip>,
          <Tooltip tip="CSS3"><FaCss3 /></Tooltip>,
          <Tooltip tip="TailwindCSS"><SiTailwindcss /></Tooltip>,
          <Tooltip tip="Bootstrap5"><SiBootstrap /></Tooltip>,
          <Tooltip tip="Sass"><FaSass /></Tooltip>,
          <Tooltip tip="Strapi CMS"><SiStrapi /></Tooltip>,
        ],

      },
      {
        title: 'SEMI PROFESSIONAL IN',
        icons: [
          <Tooltip tip="Figma"><FaFigma /></Tooltip>, 
          <Tooltip tip="Adobe XD"><SiAdobexd /></Tooltip>, 
          <Tooltip tip="Photoshop"><SiAdobephotoshop /></Tooltip>, 
          <Tooltip tip="Git Version Control"><FaGit /></Tooltip>, 
          <Tooltip tip="Umbraco"><FaUmbraco /></Tooltip>, 
          <Tooltip tip="Firebase"><SiFirebase /></Tooltip>,
          <Tooltip tip="MySQL"> <SiMysql /></Tooltip>,
          <Tooltip tip="MongoDB"> <SiMongodb /> </Tooltip>
        ],
      },
      {
        title: 'AI TOOLS',
        list1: 'ChatGPT | V0 | Bolt',
        list2: 'Copilot & VSCode | Cursor'
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UI Developer @ Codegreen Technologies LLP',
        para: 'Designed and coded websites, from layout to function, according to client specifications. Met with clients to discuss project requirements and workflow. Developed complex websites using Reactjs. ',
        stage: '2017 - 2021',
      },
      {
        title: 'Software Engineer @ Stirred Creative',
        para: 'Created web-based promotional collaterals for different campaigns, Optimized home and landing pages, Designed and developed email campaigns.',
        stage: '2021 - 2024',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Bachelor of Technology | Computer Science',
        stage: '2013-2017 [SCEM | VTU UNIVERSITY]',
      },
      {
        title: 'Pre Degree | Information Practices',
        stage: '2010-2012 [DAYAPURAM RESIDENTIAL SCHOOL]',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 md:py-32 py-20 text-center xl:text-left'>
      <Circles />
      {/* image */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        // className='flex-1 flex flex-col justify-center'
        className='hidden xl:flex absolute bottom-0 -left-[260px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='md:h2 text-md md:mt-32'
          >
            Captivating <span className='text-accent'>stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm md:text-lg mt-2'
          >
            7 years ago, I began freelancing as a developer. Since then, I've done
            remote work for agencies, consulted for startups, and collaborated on
            digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={6} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px] justify-center'>
          {/* tabs */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            // className='grid xl:grid-cols-2 gap-4 mb-8 '
            className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 md:mb-4 mb-2'
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    }  cursor-pointer capitalize md:text-lg text-sm relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </motion.div>
          {/* tab content */}
          <motion.div
            variants={fadeIn('right', 0.8)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='md:text-xl text-sm font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className="text-sm md:text-lg">{item.stage}</div>


                  <div className='font-light md:mt-4 md:mb-0 text-sm md:text-lg'>{item.para}</div>

                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className='md:text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                  <div className="">
                    <ul>
                      <li className="tracking-widest text-sm md:text-lg"> {item.list1} </li>
                      <li  className="tracking-widest text-sm md:text-lg"> {item.list2} </li>
                    </ul>
                  </div>
                  <br />
                </div>

              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
