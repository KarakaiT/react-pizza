import React from 'react'
import AboutImage from "../assets/multiplePizzas.jpeg"
import {motion} from 'framer-motion'
import "../styles/About.css"

const About = () => {
  return (
    <motion.div
        className='about'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        <div className="aboutTop" style={{backgroundImage: `url(${AboutImage})`}}></div>
        <div className="aboutContainer">
            <h2>Rólunk</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, ab! Nam eos libero, repellendus minima cumque hic delectus provident architecto temporibus qui veniam excepturi necessitatibus tempore impedit veritatis officiis. Cumque nemo, laboriosam laudantium necessitatibus debitis quos harum veritatis distinctio vitae totam, dolorem asperiores dolorum vero autem et possimus? Quae, debitis.</p>
        </div>
        

    </motion.div>
  )
}

export default About