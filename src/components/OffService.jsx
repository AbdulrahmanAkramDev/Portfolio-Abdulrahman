import React from 'react'

const OffService = () => {
    return (<>
        <h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Services & Expertise</h2>

        < div className=" flex  justify-between gap-7 lg:items-start mt-10 mb-24" >


            <div className="my-2  py-6 text-xl leading-relaxed tracking-tighter">
                I have delivered over 5 professional and fully responsive front-end projects for different business needs. I focus on building clean, high-performance interfaces that provide a smooth and modern user experience.

                I offer custom front-end solutions tailored to your goals, with a strong commitment to quality, efficiency, and timely delivery.

                If you’re looking for a reliable front-end developer to turn your ideas into a polished product, I’d be happy to work with you.

                Contact me via phone or LinkedIn below.
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
