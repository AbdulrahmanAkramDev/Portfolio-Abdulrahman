import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';



const Projects = () => {
    return (
        <div className="pb-24">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Projects</motion.h2>
            <div className='flex justify-center items-center gap-3 flex-wrap px-5 '>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-25 flex flex-wrap gap-3 lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                            <img className=' rounded ' width={450} height={250} src={project.image} alt="project.title" />
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 1 }} transition={{ duration: 1 }} className='pb-2.5 content-center w-full max-w-xl lg:w-3/4'>
                            <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                            <p className='mb-4 text-stone-400'>{project.description}</p>
                            <div className="links flex gap-2">
                                <a href={project.perview} className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'  >Live Perview</a>
                                <a href={project.github} className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'  >GitHub</a>

                            </div>
                        </motion.div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects
