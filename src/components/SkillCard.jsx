import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, title, level, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
        <div
          className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default SkillCard;