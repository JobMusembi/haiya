import React from 'react';
import { motion } from 'framer-motion';


const Loader = () => {

    return (
        <motion.div className="loader-wrap">
            <motion.div className="wordmark">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.9]
                    }}
                >H</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.9]
                    }}
                >A</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.9]
                    }}
                >I</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.9]
                    }}
                >Y</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.7,
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.9]
                    }}
                >A</motion.span>
            </motion.div>
            <motion.h5
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    delay: 1,
                    duration: 2,
                    ease: [0.6, -0.05, 0.01, 0.9]
                }}
            >Working&nbsp;Together.</motion.h5>
        </motion.div>
    );
}

export default Loader;
