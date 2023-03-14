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
                    <div className="flex mt-5">
                        <img alt="javascript" className="w-10 mr-1" src={require("../assets/javascript.png")} />
                        <img alt="react" className="w-10 mr-1" src={require("../assets/react.png")} />
                        <img alt="express" className="w-10" src={require("../assets/express.png")} />
                    </div>
                    <div className="flex mt-3">
                        <img alt="node.js" className="w-10 mr-1" src={require("../assets/node.js.png")} />
                        <img alt="mongodb" className="w-10 mr-1" src={require("../assets/mongodb.png")} />
                        <img alt="tailwind" className="w-10" src={require("../assets/tailwind.png")} />
                    </div>
                    <div className="flex mt-3">
                        <img alt="sass" className="w-10 mr-1" src={require("../assets/sass.png")} />
                        <img alt="python" className="w-10 mr-1" src={require("../assets/python.png")} />
                        <img alt="postgresql" className="w-10" src={require("../assets/postgresql.png")} />
                    </div>
                    <div className="flex mt-3">
                        <img alt="django" className="w-10 mr-2" src={require("../assets/django.png")} />
                        <img alt="postman" className="w-8 h-8 mr-1" src={require("../assets/postman.png")} />
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
                            <p className="font-playfair font-semibold text-5xl">01
                            </p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Experience
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                        <p className="mt-10">
                            This is where I talk about my experience.
                        </p>
                    </div>
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
                        <p className="mt-10">
                            This is where I talk about how innovative i am.
                        </p>
                    </div>
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
                        <p className="mt-10">
                            This is where I talk about how my imaginativity.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills