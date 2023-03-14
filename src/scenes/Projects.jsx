import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
}

const Projects = () => {
    return(
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        MY <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    This is where I talk about my projects.
                </p>
            </motion.div>
            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    {/* PROJECT 1 */}
                    <motion.div variants={projectVariant} className="relative">
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">The Social</p>
                            <p className="mt-7">
                                This is where I talk about the project.
                            </p>
                        </div>
                        <img src={require(`../assets/project-1.jpg`)} alt="the-social" />
                    </motion.div>
                    {/* PROJECT 2 */}
                    <motion.div variants={projectVariant} className="relative">
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">AI Chat</p>
                            <p className="mt-7">
                                This is where I talk about the project.
                            </p>
                        </div>
                        <img src={require(`../assets/project-2.jpg`)} alt="ai-chat" />
                    </motion.div>


                    {/* ROW 2 */}
                    {/* PROJECT 3 */}
                    <motion.div variants={projectVariant} className="relative">
                        <img src={require('../assets/green.jpg')} alt="coming-soon" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-center text-2xl font-playfair font-semibold">
                            Coming Soon!
                            </div>
                        </div>
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">Coming Soon...</p>
                            <p className="mt-7">
                            This is where I talk about the project.
                            </p>
                        </div>
                    </motion.div>
                    {/* PROJECT4 /> */}
                    <motion.div variants={projectVariant} className="relative">
                        <img src={require('../assets/yellow.jpg')} alt="coming-soon" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-center text-2xl font-playfair font-semibold">
                            Coming Soon!
                            </div>
                        </div>
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">Coming Soon...</p>
                            <p className="mt-7">
                            This is where I talk about the project.
                            </p>
                        </div>
                    </motion.div>
                    {/* <Project title="Project 5" /> */}

                    {/* ROW 2 */}
                    {/* <Project title="Project 6" /> */}
                    {/* <Project title="Project 7" /> */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div>


                </motion.div>
            </div>
        </section>
    )
}

export default Projects