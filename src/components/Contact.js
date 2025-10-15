import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen py-8 sm:py-20 px-2 sm:px-4 flex flex-col justify-center items-center bg-gradient-to-br from-white/80 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500"
        >
            <div className="container mx-auto">
                <motion.div
                    className="max-w-lg mx-auto w-full text-center glass p-6 sm:p-10 rounded-2xl shadow-2xl border border-white/20 flex flex-col justify-center items-center h-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 gradient-text drop-shadow-lg">
                        Contact Us
                    </h2>

                    {/* Contact Details */}
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 w-full">
                        <motion.p
                            className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-200 text-center px-1"
                            whileHover={{ scale: 1.02 }}
                        >
                            Phone:{" "}
                            <a
                                href="tel:+919650390840"
                                className="text-blue-600 underline hover:text-pink-500 font-semibold transition-colors duration-200"
                            >
                                +91-9650390840
                            </a>
                        </motion.p>
                        <motion.p
                            className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-200 text-center px-1"
                            whileHover={{ scale: 1.02 }}
                        >
                            Email:{" "}
                            <a
                                href="mailto:hr.abrecruiters@gmail.com"
                                className="text-blue-600 underline hover:text-pink-500 transition-colors duration-200"
                            >
                                hr.abrecruiters@gmail.com
                            </a>{" "}
                            /{" "}
                            <a
                                href="mailto:info@abrecruiters.com"
                                className="text-blue-600 underline hover:text-pink-500 transition-colors duration-200"
                            >
                                info@abrecruiters.com
                            </a>
                        </motion.p>
                        <motion.p
                            className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-200 text-center px-1"
                            whileHover={{ scale: 1.02 }}
                        >

                        </motion.p>
                        <motion.div
                            className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-200 text-center px-1"
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="font-semibold mb-1">Reg. Office Address:</p>
                            <p className="text-xs sm:text-sm">
                                85/5, Naresh Kumar, Bala School, Near Yashpal
                                medical store, Mohalla Chouthiya, Kondal, Palwal,
                                Haryana - 121103
                            </p>
                            <p className="text-xs sm:text-sm mt-1 sm:mt-2">
                                GST No.: 06DDSPP3304J1Z9
                            </p>
                            <p className="text-xs sm:text-sm mt-1 sm:mt-3">
                                UDYAM No.- UDYAM-HR-20-0031095
                            </p>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <form className="mt-6 sm:mt-8 w-full flex flex-col gap-3 sm:gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-white/90 dark:bg-gray-800 px-3 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100 text-sm transition-all duration-200 placeholder-gray-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-white/90 dark:bg-gray-800 px-3 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100 text-sm transition-all duration-200 placeholder-gray-500"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            className="bg-white/90 dark:bg-gray-800 px-3 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100 text-sm resize-none placeholder-gray-500"
                            rows={3}
                            required
                        />
                        <motion.button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 sm:px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </form>

                    {/* Quick Links */}
                    <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6">
                        <a
                            href="mailto:hr.abrecruiters@gmail.com"
                            className="text-blue-600 hover:text-pink-500 font-bold text-sm sm:text-base transition-colors duration-200"
                        >
                            Email
                        </a>
                        <a
                            href="tel:+919650390840"
                            className="text-blue-600 hover:text-pink-500 font-bold text-sm sm:text-base transition-colors duration-200"
                        >
                            Call
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
