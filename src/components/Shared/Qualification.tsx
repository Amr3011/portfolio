import { motion } from "framer-motion";
import { useState } from "react";
import { HiAcademicCap, HiBriefcase, HiCalendar } from "react-icons/hi";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">(
    "education"
  );

  const educationData = [
    {
      title: "Computer Science",
      subtitle:
        "Higher Institute of Computer Science and Information Systems - 6th of October",
      date: "2022 - 2026",
    },
    {
      title: "MERN stack developer",
      subtitle: "DEPI - Egypt",
      date: "JUN 2024 - OCT 2024",
    },
  ];

  const experienceData = [
    {
      title: "Graduation Project in DEPI",
      subtitle: "DEPI - Egypt",
      date: "OCT 2024 - NOV 2024",
    },
    {
      title: "Freelancer",
      subtitle: "",
      date: "2024 - present",
    },
  ];

  const currentData =
    activeTab === "education" ? educationData : experienceData;

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
          >
            Qualification
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            My personel journey
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("education")}
            className={`flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 ${
              activeTab === "education"
                ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <motion.div
              animate={
                activeTab === "education" ? { rotate: [0, 10, -10, 0] } : {}
              }
              transition={{ duration: 0.5 }}
            >
              <HiAcademicCap size={24} />
            </motion.div>
            Education
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("experience")}
            className={`flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <motion.div
              animate={
                activeTab === "experience" ? { rotate: [0, 10, -10, 0] } : {}
              }
              transition={{ duration: 0.5 }}
            >
              <HiBriefcase size={24} />
            </motion.div>
            Experience
          </motion.button>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Center Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 rounded-full"
          />

          <div className="space-y-12">
            {currentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  scale: 0.8,
                }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-full md:w-5/12 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                    className="text-xl font-bold text-gray-900 mb-2"
                  >
                    {item.title}
                  </motion.h3>
                  {item.subtitle && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                      className="text-gray-600 mb-3"
                    >
                      {item.subtitle}
                    </motion.p>
                  )}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                    className="flex items-center gap-2 text-gray-500 text-sm"
                  >
                    <HiCalendar size={16} />
                    {item.date}
                  </motion.div>
                </motion.div>

                {/* Center Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.2,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  className="hidden md:block w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-white shadow-lg z-10"
                />

                {/* Empty Space */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
