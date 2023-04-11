import LineGradient from "../components/LineGradient";
import { useMediaQuery } from 'react-responsive';
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
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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
                    Here's a few of my recent projects!
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
                        className="flex justify-center text-center items-center p-10 bg-red text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    {/* PROJECT 1 */}
                    <motion.div variants={projectVariant} className="relative">
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">AI-Imagemaker</p>
                            <p className="mt-7">
                            AI-Imagemaker is a application that uses OpenAI's DALL-E API to create prompted images
                            </p>
                            <div className="flex justify-between mt-2">
                                <a href="https://ai-imagemaker.onrender.com" className="underline mr-1">DEPLOY</a>
                                    <span>|</span>
                                <a href="https://github.com/trynceb/ai-imagemaker" className="underline ml-1">README</a>
                            </div>
                        </div>
                        <img
                            className="object-contain"
                            src={isMobile ? require(`../assets/project-4-mobile.jpg`) : require(`../assets/project-4.jpg`)}
                            alt="ai-imagemaker"
                        />
                    </motion.div>

                    {/* PROJECT 2 */}
                    <motion.div variants={projectVariant} className="relative">
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">Ecomverse</p>
                            <p className="mt-7">
                            Ecomverse is an admin dashboard that displays all your data in one place, from product details to transactions. You can look up each customer and also see they are located. You can also get a monthly and daily breakdown of your sales, as well as performance details.
                            </p>
                            <div className="flex justify-between mt-2">
                                <a href="https://ecomverse-tfig.onrender.com" className="underline mr-1">DEPLOY</a>
                                    <span>|</span>
                                <a href="https://github.com/trynceb/admin-dashboard" className="underline ml-1">README</a>
                            </div>
                        </div>
                        <img
                            className="object-contain"
                            src={isMobile ? require(`../assets/project-3-mobile.jpg`) : require(`../assets/project-3.jpg`)}
                            alt="the-social"
                        />
                    </motion.div>

                    {/* ROW 2 */}
                    {/* PROJECT 3 */}
                    <motion.div variants={projectVariant} className="relative">
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">The Social</p>
                            <p className="mt-7">
                                The Social is a full MERN stack application designed for sharing photos and captions with friends, like a modern social media platform.
                            </p>
                            <div className="flex justify-between mt-2">
                                <a href="https://the-social.onrender.com" className="underline mr-1">DEPLOY</a>
                                    <span>|</span>
                                <a href="https://github.com/trynceb/social" className="underline ml-1">README</a>
                            </div>
                        </div>
                        <img
                            className="object-contain"
                            src={isMobile ? require(`../assets/project-1-mobile.jpg`) : require(`../assets/project-1.jpg`)}
                            alt="the-social"
                        />
                    </motion.div>

                    {/* PROJECT 4 */}
                    <motion.div variants={projectVariant} className="relative">
                        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                            <p className="text-2xl font-playfair">Mind Mentor</p>
                            <p className="mt-7">
                            Mind Mentor is an AI Chat App designed to help users by communicating with an AI-powered motivational coach, which is built using the OpenAI API GPT-3.5.
                            </p>
                            <div className="flex justify-between mt-2">
                                <a href="https://github.com/trynceb/MindMentor" className="underline ml-1">README</a>
                            </div>
                        </div>
                        <img
                            className="object-contain"
                            src={isMobile ? require(`../assets/project-2-mobile.jpg`) : require(`../assets/project-2.jpg`)}
                            alt="ai-chat"
                        />
                    </motion.div>

                    {/* PROJECT 5 */}
                    {/* <motion.div variants={projectVariant} className="relative">
                        <img
                        className="object-contain"
                        src={isMobile ? require(`../assets/green-mobile.jpg`) : require(`../assets/green.jpg`)}
                        alt="coming-soon"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center text-2xl font-playfair font-semibold">
                        Coming Soon!
                        </div>
                        </div>
                    </motion.div> */}

                    {/* ROW 3 */}
                    {/* PROJECT 6 */}
                    {/* <motion.div variants={projectVariant} className="relative">
                        <img
                            className="object-contain"
                            src={isMobile ? require(`../assets/yellow-mobile.jpg`) : require(`../assets/yellow.jpg`)}
                            alt="coming-soon"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-center text-2xl font-playfair font-semibold">
                            Coming Soon!
                            </div>
                        </div>
                    </motion.div> */}
                    {/* PROJECT 7 /> */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue text-2xl font-playfair font-semibold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div>


                </motion.div>
            </div>
        </section>
    )
}

export default Projects