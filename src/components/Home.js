import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Home = () => (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white overflow-hidden px-6">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
                <Stars radius={80} depth={50} count={5000} factor={4} fade speed={1} />
                <ambientLight intensity={0.5} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>

        <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center z-10"
        >
            Connecting Talent with Opportunities.<br />Building Teams that Drive Success.
        </motion.h1>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg sm:text-xl mt-6 max-w-3xl text-center text-gray-200 z-10"
        >
            Welcome to <span className="font-bold gradient-text">AB Recruiters</span>, your trusted partner in staffing solutions.
            We help companies find the right talent and professionals secure the right opportunities
            across <strong>IT, Healthcare, and Manufacturing</strong>.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 flex gap-6 z-10"
        >
            <a href="#services" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
                Find Your Next Hire
            </a>
            <a href="#contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
                Submit Your Resume
            </a>
        </motion.div>
    </section>
);

export default Home;
