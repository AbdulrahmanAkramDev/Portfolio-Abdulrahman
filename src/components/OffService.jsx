import React from 'react'

const OffService = () => {
    return (<>
        <h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Services & Expertise</h2>

        < div className=" flex  justify-between gap-7 lg:items-start mt-10 mb-24" >


            <div className="my-2  py-6 text-xl leading-relaxed tracking-tighter">
                I have successfully delivered more than 5 professional and fully responsive front-end projects tailored to suit the needs of various businesses and industries. Each project is built with a strong focus on clean code, performance, and modern user experience standards.

                I specialize in providing custom front-end solutions that align with your business goals and technical requirements. From transforming designs into interactive interfaces to building scalable React.js applications, I ensure that every detail reflects your vision and expectations.

                My priority is to deliver high-quality results within efficient timelines, without compromising performance, usability, or responsiveness across all devices. I believe in clear communication, attention to detail, and delivering solutions that add real value to your business.

                If you are looking for a reliable and dedicated front-end developer who can turn your ideas into a polished and functional product, I would be happy to collaborate with you.

                For inquiries or collaboration, feel free to contact me via phone or LinkedIn below.
            </div>
            <img src="/off.png" className="border border-stone-900 rounded-3xl "
                width={250}
                height={250}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }} alt="" />

        </div></>
    )
}

export default OffService
