import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import My from "../../assets/My.JPG";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-start justify-center px-8 pt-36 pb-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            Amr Osama{" "}
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="inline-block"
            >
              👋
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="h-[2px] w-16 bg-gray-800"></div>
            <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
              Frontend Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg leading-relaxed max-w-xl"
          >
            I'm a passionate frontend developer based in October, dedicated to
            crafting exceptional digital experiences and building innovative web
            solutions that make a difference.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/amr-al-fakharany"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Amr3011"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-gray-800 text-white rounded-lg font-medium flex items-center gap-3 hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Say Hello
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                ✉️
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(0, 0, 0, 0.1)",
                  "0 0 0 20px rgba(0, 0, 0, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
            >
              <img
                src={My}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
