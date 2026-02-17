import React from 'react'

const Education = () => {
    return (<>
        <h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Education</h2>

        < div className=" flex  justify-between gap-7 lg:items-start mt-10 mb-24" >

            <img src="/arts.jpg" className="border border-stone-900 rounded-3xl "
                width={250}
                height={250}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }} alt="" />
            <div className="my-2  py-6 text-xl leading-relaxed tracking-tighter">
                I am a graduate of the Faculty of Arts, English Language Department, which helped me build strong English skills and effectively communicate with technical resources and documentation.
            </div>

        </div></>
    )
}

export default Education
