import React from 'react'
import './Container.css'
import { AnimatePresence, motion } from "framer-motion";
export default function Container(props) {
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div className='container form-container'
    initial={{x:'-200vw'}}
    animate={{x:0}}
    transition={{duration: 0.5, delay: 0.1, type: 'spring', stiffness:30}}
    exit={{x:"200vw"}}
    >
        {props.children}
    </motion.div>
    </AnimatePresence>
  )
}
