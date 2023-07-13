import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[14px] max-w-3xl leading-[30px]'
      >
        I am a versatile and accomplished software developer with
        a passion for innovation. My experience as a full-stack 
        developer includes proficiency with front-end tools 
        like HTML, CSS, JavaScript, Bootstrap, Tailwind, and 
        React, as well as back-end technologies like Node.js, 
        Express.js, PHP, and SQL. I am also adept at working with 
        databases like MySQL, PostgreSQL and SQLite. Beyond web 
        development, I have explored machine learning and 
        artificial intelligence, building sophisticated models using 
        Python. My knowledge of cybersecurity and proficiency in languages 
        such as C further showcase my versatility. With my 
        diverse skill set and passion for innovation, I 
        am always striving to deliver exceptional results.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")