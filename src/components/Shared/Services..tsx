import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiCode, HiX } from "react-icons/hi";
import { BiCheck } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <HiCode size={40} />,
      title: "Web Developer",
      description:
        "Offering services with over 1 year of experience, delivering quality work to clients and companies.",
      features: [
        "Responsive web application development",
        "Optimized web page building",
        "Implementing interactive features",
        "Full-stack web development",
        "Database design and management",
      ],
    },
  ];

  const openModal = (id: number) => {
    setSelectedService(id);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section
      id="services"
      className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            What I offer
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                style={{ perspective: "1000px" }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl mb-6 group-hover:shadow-xl"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* View More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(service.id)}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium group-hover:gap-3 transition-all"
                >
                  View More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <FiArrowRight />
                  </motion.span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 md:p-10 max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <HiX size={24} className="text-gray-700" />
              </motion.button>

              {services
                .filter((s) => s.id === selectedService)
                .map((service) => (
                  <div key={service.id}>
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-3xl font-bold text-gray-900 mb-4"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-gray-600 mb-8 leading-relaxed"
                    >
                      {service.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="space-y-4"
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + idx * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="mt-1"
                          >
                            <BiCheck className="text-gray-800 text-2xl flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
