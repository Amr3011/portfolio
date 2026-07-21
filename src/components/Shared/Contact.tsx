import { motion } from "framer-motion";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contactMethods = [
    {
      icon: <HiMail size={32} />,
      title: "Email",
      value: "amroosamafakharany@gmail.com",
      link: "mailto:amroosamafakharany@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaWhatsapp size={32} />,
      title: "Whatsapp",
      value: "+201279475252",
      link: "https://wa.me/201279475252",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Get in touch
          </h2>
          <p className="text-gray-600 text-lg">Contact Me</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              Send to me
            </motion.h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -60, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {method.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{method.value}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="text-gray-400 group-hover:text-gray-700 transition-colors"
                  >
                    <HiArrowRight size={24} />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="mt-4 text-gray-500 text-sm flex items-center gap-2"
                >
                  Write me
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
