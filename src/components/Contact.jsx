import { assets } from "../assets/assets";
import { motion } from 'framer-motion';


const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">Get In Touch</motion.h2>
            <div className="text-center tracking-tighter flex flex-wrap items-center justify-center gap-10 ">
                <motion.a whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }} href="https://wa.me/01009414959">
                    <img className="w-10" src={assets.whatsapp} alt="" />
                </motion.a>
                <motion.a whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }} href="https://www.linkedin.com/in/abdulrahman-akram-756a13290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bbf4z60lKRSeSVtIth3NWLQ%3D%3D">
                    <img className="w-10" src={assets.linkedinlogo} alt="" />
                </motion.a>
            </div>
        </div>
    )
}

export default Contact
