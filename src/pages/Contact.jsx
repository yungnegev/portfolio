import React from 'react'
import { motion as m } from 'framer-motion'

const Contact = () => {
  return (
    <m.main
      className="page"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div>Contact</div>
    </m.main>
  );
}

export default Contact