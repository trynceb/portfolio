import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="1/3" />
                    
                    <div className="flex flex-row">
                        {/* COLUMN 1 */}
                        <div className="flex flex-col justify-between mt-5 items-center mx-2 text-center">
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="javascript" title="JavaScript" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/javascript.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">JavaScript</p>
                            </div>
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="react" title="React" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/react.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">React</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="flex-shrink-0">
                                <img alt="express" title="Express" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/express.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">Express</p>
                            </div>
                        </div>

                        {/* COLUMN 2 */}
                        <div className="flex flex-col justify-between mt-5 items-center mx-2 text-center">
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="node.js" title="Node.js" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/node.js.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">Node.js</p>
                            </div>
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="mongodb" title="MongoDB" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/mongodb.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">MongoDB</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="flex-shrink-0">
                                <img alt="postman" title="Postman" className="w-8 h-8 mt-1 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/postman.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-3">Postman</p>
                            </div> 
                        </div>

                        {/* COLUMN 3 */}
                        <div className="flex flex-col justify-between mt-5 items-center mx-2 text-center">
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="materialui" title="Material UI" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/materialui.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2 -mx-3">Material UI</p>
                            </div>
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="sass" title="SASS" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/sass.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">SASS</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="flex-shrink-0">
                                <img alt="tailwind" title="Tailwind" className="w-9 h-9 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/tailwind.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-3">Tailwind</p>
                            </div> 
                        </div>

                        {/* COLUMN 4 */}
                        <div className="flex flex-col justify-between mt-5 items-center mx-2 text-center">
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="python" title="Python" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/python.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">Python</p>
                            </div>
                            <div class="flex flex-col items-center mb-3">
                                <div class="flex-shrink-0">
                                <img alt="django" title="Django" className="w-10 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/django.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-2">Django</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="flex-shrink-0">
                                <img alt="prostgresql" title="PostgreSQL" className="w-8 h-8 mt-1 hover:text-gray-500 hover:text-2xl hover:rounded-lg transition duration-50" src={require("../assets/postgresql.png")} />
                                </div>
                                <p className="font-medium text-light-grey dark:text-white text-sm mt-3">PostgreSQL</p>
                            </div> 
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                        className="relative z-0 w-4/6 ml-20 before:absolute before:-top-10  before:left-4 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10 ml-14"
                                src={require("../assets/skills-image.webp")}
                            />
                        </div>
                    ) : (
                        <img
                          alt="skills"
                          className="z-10"
                          src={require("../assets/skills-image.webp")}
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Experience
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4  h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Since completing the bootcamp, I have made a commitment to continuous self-learning and skill improvement, gaining valuable experience every day.
                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02
                            </p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Innovative
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I pride myself on being an innovative thinker, always seeking new and creative ways to approach challenges and push boundaries in my work.
                    </p>
                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03
                            </p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Imaginative
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I bring a unique perspective to every project, infusing my work with creativity and originality to deliver standout results.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills