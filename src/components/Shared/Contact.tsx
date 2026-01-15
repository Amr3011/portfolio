import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

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
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
          >
            Get in touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Contact Me
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Methods */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
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

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Write me your message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#374151" }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 focus:outline-none transition-all duration-300 bg-white"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#374151" }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 focus:outline-none transition-all duration-300 bg-white"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, borderColor: "#374151" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 focus:outline-none transition-all duration-300 resize-none bg-white"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="group w-full md:w-auto px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Send Message
                  <motion.span
                    animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <BiPaperPlane size={22} />
                  </motion.span>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
