import "./Navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <Sidebar></Sidebar>
            <div className='wrapper'>
                <motion.span initial={{ opacity: 0, scale: 0.7 }} transition={{ duration: 0.5 }} animate={{ opacity: 1, scale: 1 }} className='text-3xl font-bold logoText'>Abu Saadat Md. Sayem</motion.span>
                <div className='social'>
                    <a href="link"><img className='w-10' src="/facebook.png" alt="facebook" /> </a>
                    <a href="link"><img className='w-10' src="/github.png" alt="github" /> </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;