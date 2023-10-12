import { useState } from "react";
import "./Test.scss"
import { motion } from "framer-motion"
const Test = () => {

    const [open, setOpen] = useState(false)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }
    return (
        <div className="course">
            <motion.div className="box" variants={variants} transition={{ duration: 2}} animate={open ? "visible" : "hidden"}>
            </motion.div>
            <button className="text-white text-xl" onClick={() => setOpen(prev => !prev)}>click here</button>
        </div>
    );
};

export default Test;