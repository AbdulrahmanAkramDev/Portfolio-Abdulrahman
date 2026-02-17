import { assets } from "../assets/assets";
import { animate, motion } from "framer-motion";



const iconVariants = (duration) => ({
    initital: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const technologies = () => {
    return (
        <>
            <div className="pb-24">
                <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">

                    </motion.div>
                    <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
                        <img className="w-18" src={assets.react} alt="" />
                    </motion.div>

                    <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                        <img className="w-18" src={assets.javascript} alt="" />
                    </motion.div>

                    <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
                        <img className="w-18" src={assets.html} alt="" />
                    </motion.div>

                    <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                        <img className="w-18" src={assets.css} alt="" />
                    </motion.div>

                    <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                        <img className="w-18" src={assets.tailwind} alt="" />
                    </motion.div>

                    <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
                        <img className="w-18" src={assets.githubwhite} alt="" />
                    </motion.div>

                    <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                        <img className="w-18" src={assets.vite} alt="" />
                    </motion.div>

                    <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                        <img className="w-18" src={assets.mui} alt="" />
                    </motion.div>

                </motion.div>
            </div></>
    )
}

export default technologies
