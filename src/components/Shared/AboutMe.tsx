import { motion } from "framer-motion";
import { HiLightBulb, HiBriefcase, HiSupport } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import My from "../../assets/My.JPG";

const AboutMe = () => {
  const stats = [
    {
      icon: <HiLightBulb size={32} />,
      title: "Experience",
      subtitle: "1 year Experience",
    },
    {
      icon: <HiBriefcase size={32} />,
      title: "Completed",
      subtitle: "Many Projects",
    },
    {
      icon: <HiSupport size={32} />,
      title: "Support",
      subtitle: "Online 24/7",
    },
  ];

  return (
    <section
      id="about"
      className="-mt-32 pb-20 px-4 md:px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          <p className="text-gray-600 text-lg">My introduction</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative transition-transform hover:scale-[1.02]">
              <div className="w-full max-w-md h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={My}
                  alt="About Me"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-2xl opacity-20" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-xl mb-3"
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              "I'm a Frontend developer specializing in React. I'm passionate
              about building web applications and continuously learning to
              improve my skills."
            </motion.p>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/Amr_cv.pdf"
                download="Amr_cv.pdf"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium flex items-center gap-3 hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg inline-flex cursor-pointer"
              >
                Download CV
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <FiDownload size={20} />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
