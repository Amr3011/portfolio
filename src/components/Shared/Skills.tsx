import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Next", level: "Basic" },
    { name: "Git", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.Js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "express Js", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Spring Boot", level: "Basic" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="pt-8 pb-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Skills
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            My technical skills
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Frontend Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-8 text-center relative"
            >
              Frontend developer
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-1"
                  >
                    <BiCheck className="text-gray-800 text-xl group-hover:text-blue-600 transition-colors" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-500">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold text-gray-900 mb-8 text-center relative"
            >
              Backend Devloper
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-1"
                  >
                    <BiCheck className="text-gray-800 text-xl group-hover:text-purple-600 transition-colors" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-500">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
