import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen  bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elevate Your Medical Attire with ScrubsCraft
          </h1>
          <p className="text-xl mb-6">
            Stylish, comfortable, and professional scrubs for healthcare heroes.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Shop Now
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Healthcare professionals in ScrubsCraft attire"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
