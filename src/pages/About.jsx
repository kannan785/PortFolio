import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Brain } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      level: 90,
      description: 'React.js,HTML,CSS',
    },
    {
      icon: Server,
      title: 'Backend Development',
      level: 85,
      description: 'Node.js, Express.js',
    },
    {
      icon: Database,
      title: 'Database Management',
      level: 80,
      description: 'MongoDB, MySQL, database design',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      level: 75,
      description: 'Outlier Detection,Pandas,Matplotlib',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer with expertise in full-stack development and ML"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I am a computer science graduate with a passion for technology and
            building scalable web applications using the MERN stack. I’m always
            ready to adapt to new technologies and eager to learn. I thrive on
            solving complex problems and embracing new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
