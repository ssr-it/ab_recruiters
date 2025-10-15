import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaChartLine, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { scale: 1.05, rotate: 1, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
};

export default function About() {
    return (
        <section id="about" className="min-h-screen py-20 px-4 flex flex-col justify-center items-center bg-gradient-to-br from-white/80 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, -20, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
                    animate={{
                        y: [0, 20, 0],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
            </div>

            <motion.div
                className="max-w-6xl mx-auto w-full text-center flex flex-col justify-center items-center h-full z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-12 gradient-text drop-shadow-lg relative">
                        About Us
                        <motion.div
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />
                    </h2>
                </motion.div>

                <motion.div className="mb-12 px-4" variants={itemVariants}>
                    <p className="mb-6 text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                        AB Recruiters is a premier professional staffing consultancy<span className="font-semibold text-blue-600 dark:text-blue-400"></span>, dedicated to bridging the gap between innovative businesses and exceptional talent. Our vision: Empower organizations to build powerhouse teams while propelling individuals toward fulfilling, high-impact careers.
                    </p>
                    <p className="mb-6 text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                        Recruitment isn't just a transaction—it's an art. We specialize in <span className="font-semibold gradient-text">IT, Healthcare, and Manufacturing</span>, delivering industry-savvy insights and a hyper-personalized strategy to conquer every hiring hurdle with precision and passion.
                    </p>
                </motion.div>

                <motion.a
                    href="#contact"
                    className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl mb-12 transform transition-all duration-300 relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10 flex items-center">
                        Get In Touch
                        <FaRocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.a>

                {/* Stats Row for Attractiveness */}
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div className="glass p-6 rounded-2xl shadow-xl text-center" variants={cardVariants} whileHover="hover">
                        <FaUsers className="mx-auto mb-4 text-4xl text-blue-500" />
                        <h3 className="text-2xl font-bold mb-2 gradient-text">500+</h3>
                        <p className="text-gray-700 dark:text-gray-200">Talents Placed</p>
                    </motion.div>
                    <motion.div className="glass p-6 rounded-2xl shadow-xl text-center" variants={cardVariants} whileHover="hover">
                        <FaHandshake className="mx-auto mb-4 text-4xl text-pink-500" />
                        <h3 className="text-2xl font-bold mb-2 gradient-text">98%</h3>
                        <p className="text-gray-700 dark:text-gray-200">Client Satisfaction</p>
                    </motion.div>
                    <motion.div className="glass p-6 rounded-2xl shadow-xl text-center" variants={cardVariants} whileHover="hover">
                        <FaChartLine className="mx-auto mb-4 text-4xl text-purple-500" />
                        <h3 className="text-2xl font-bold mb-2 gradient-text">5+</h3>
                        <p className="text-gray-700 dark:text-gray-200">Years of Excellence</p>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
                    <motion.div className="glass p-8 rounded-2xl shadow-xl" variants={cardVariants} whileHover="hover">
                        <div className="flex items-center mb-4">
                            <FaLightbulb className="mr-3 text-2xl text-yellow-500" />
                            <h3 className="text-2xl font-bold gradient-text">Our Mission</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                            Connecting elite talent with transformative opportunities via bespoke, trust-driven recruitment. We craft personalized staffing masterpieces that fuel company triumphs and career ascents, nurturing enduring bonds of success.
                        </p>
                    </motion.div>
                    <motion.div className="glass p-8 rounded-2xl shadow-xl" variants={cardVariants} whileHover="hover">
                        <div className="flex items-center mb-4">
                            <FaShieldAlt className="mr-3 text-2xl text-green-500" />
                            <h3 className="text-2xl font-bold gradient-text">Our Vision</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                            Emerge as the unrivaled ally for trailblazing businesses and ambitious pros in forging stellar careers and unbreakable teams. We aspire to evolve into your ultimate growth confidant, architecting futures together.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    <motion.div className="glass p-8 rounded-2xl shadow-xl" variants={cardVariants} whileHover="hover">
                        <div className="flex items-center mb-4">
                            <FaUsers className="mr-3 text-2xl text-blue-500" />
                            <h3 className="text-2xl font-bold mb-4 gradient-text">Core Values</h3>
                        </div>
                        <ul className="space-y-2 text-left text-gray-700 dark:text-gray-200">
                            <li className="flex items-center">
                                <span className="mr-2 text-blue-500">•</span> Integrity: Unwavering honesty in every step.
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-pink-500">•</span> Commitment: Relentless pursuit for clients and candidates.
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-purple-500">•</span> Quality: Elite standards, no exceptions.
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">•</span> Partnership: Forging forever alliances.
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="glass p-8 rounded-2xl shadow-xl" variants={cardVariants} whileHover="hover">
                        <div className="flex items-center mb-4">
                            <FaChartLine className="mr-3 text-2xl text-indigo-500" />
                            <h3 className="text-2xl font-bold gradient-text">Our Approach</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                            We orchestrate a strategic, consultative symphony: Immersing in your ethos and aspirations, scouting hidden gems, rigorously vetting for synergy, and aligning not just skills, but souls—propelling careers into the stratosphere.
                        </p>
                    </motion.div>
                </div>

                {/* Added: Why Choose Us Cards for Recruiters */}
                <motion.div className="w-full mt-16" variants={itemVariants}>
                    <h3 className="text-3xl font-bold mb-8 gradient-text text-center">Why Partner with AB Recruiters?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div className="glass p-6 rounded-xl shadow-lg text-center" variants={cardVariants} whileHover="hover">
                            <FaRocket className="mx-auto mb-4 text-4xl text-blue-500" />
                            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Speed & Precision</h4>
                            <p className="text-gray-700 dark:text-gray-200 text-sm">Lightning-fast placements without sacrificing quality—your vacancies filled in record time.</p>
                        </motion.div>
                        <motion.div className="glass p-6 rounded-xl shadow-lg text-center" variants={cardVariants} whileHover="hover">
                            <FaHandshake className="mx-auto mb-4 text-4xl text-pink-500" />
                            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Tailored Expertise</h4>
                            <p className="text-gray-700 dark:text-gray-200 text-sm">Deep dives into IT, Healthcare, and Manufacturing—custom strategies for your niche.</p>
                        </motion.div>
                        <motion.div className="glass p-6 rounded-xl shadow-lg text-center" variants={cardVariants} whileHover="hover">
                            <FaLightbulb className="mx-auto mb-4 text-4xl text-purple-500" />
                            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Proven Results</h4>
                            <p className="text-gray-700 dark:text-gray-200 text-sm">Track record of 98% retention—talent that stays, grows, and innovates with you.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 1rem;
        }
        .dark .glass {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
        </section>
    );
}