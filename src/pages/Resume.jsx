import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, User, Code } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Resume = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'SASTRA University',
      period: '2021 - 2025',
      description: 'Specialized in IoT and Web Technologies',
    },
  ];

  const technicalSkills = [
    {
      skill: 'Web Development',
      description:
        'Proficient in HTML, CSS, React.js, and modern front-end,backend frameworks.',
    },
    {
      skill: 'Machine Learning',
      description:
        'Familiar with ML algorithms, data processing, and model building.',
    },
    {
      skill: 'IoT Integration',
      description: 'Hands-on experience with IoT devices, sensors.',
    },
  ];
  const softSkills = [
    {
      skill: 'Continuous Learning',
      description:
        'Keeping up with new technologies, tools, and best practices in your technical fiel',
    },
    {
      skill: 'Public Speaking',
      description:
        'Comfortable speaking in front of audiences and delivering technical presentations.',
    },
    {
      skill: 'Team Collaboration',
      description:
        'Experience in working with cross-functional teams to achieve project goals.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Resume"
          subtitle="My professional journey and qualifications"
        />

        {/* Download Resume Button */}
        <div className="mb-8 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Kannan_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </div>

        {/* Resume Sections: Education, Soft Skills, Technical Skills */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="border-l-2 border-indigo-600 pl-4"
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-indigo-600 dark:text-indigo-400">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.period}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
            </div>
            <div className="space-y-8">
              {softSkills.map((skill) => (
                <div
                  key={skill.skill}
                  className="border-l-2 border-indigo-600 pl-4"
                >
                  <h4 className="text-xl font-semibold">{skill.skill}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            <div className="space-y-8">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.skill}
                  className="border-l-2 border-indigo-600 pl-4"
                >
                  <h4 className="text-xl font-semibold">{skill.skill}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
