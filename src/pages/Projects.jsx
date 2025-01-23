import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Tripper Website',
      description: 'A real time voltage monitoring system ',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'express'],
      demoUrl: 'https://smart-tripper-2000.onrender.com/',
    },
    {
      title: 'Enhancing Machinery Health through Abnormal Data Detection',
      description:
        'Prediction of machinery faults in industries using machine learning algorithms',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      technologies: ['Outlier detection', 'LOF', 'ASW'],  
      githubUrl: 'https://github.com/kannan785/MachineLearningProject',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="A selection of my recent work and personal projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
