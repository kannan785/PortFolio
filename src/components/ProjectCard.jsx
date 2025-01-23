import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, demoUrl, githubUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <Globe className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;