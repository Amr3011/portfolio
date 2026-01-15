import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Foody from "../../assets/Foody.jpeg";
import Ashri from "../../assets/Ashri.png";
import excursions from "../../assets/excursions.png";
import Chat from "../../assets/Chat.png";
import Golden from "../../assets/Golden.png";
import Task from "../../assets/Task.png";
import Landing from "../../assets/Landing.png";

type Category = "all" | "frontend" | "fullstack";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  link: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Foody – Food, Chefs & Restaurants Platform",
      category: "frontend",
      image: Foody,
      link: "#",
    },
    {
      id: 2,
      title: "Ashri – Fashion Manufacturing & Sales Platform",
      category: "fullstack",
      image: Ashri,
      link: "#",
    },
    {
      id: 3,
      title: "Excursions – Travel Planning Platform",
      category: "fullstack",
      image: excursions,
      link: "#",
    },
    {
      id: 4,
      title: "Chat – Real-time Chat Application",
      category: "fullstack",
      image: Chat,
      link: "#",
    },
    {
      id: 5,
      title: "Golden – Development Company Platform",
      category: "frontend",
      image: Golden,
      link: "#",
    },
    {
      id: 6,
      title: "Task –  Management Application",
      category: "frontend",
      image: Task,
      link: "#",
    },
    {
      id: 7,
      title: "Landing Page",
      category: "frontend",
      image: Landing,
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "frontend"
      ? projects.filter((project) => project.category === "frontend")
      : projects.filter((project) => project.category === activeFilter);

  const filterButtons: { label: string; value: Category }[] = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Fullstack", value: "fullstack" },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Portfolio
          </h2>
          <p className="text-gray-600 text-lg">Most recent works</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filterButtons.map((button, index) => (
            <motion.button
              key={button.value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(button.value)}
              className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                activeFilter === button.value
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
              }`}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex items-center justify-center"
                >
                  <motion.a
                    href={project.link}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xl"
                  >
                    <FiExternalLink className="text-gray-900 text-2xl" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
