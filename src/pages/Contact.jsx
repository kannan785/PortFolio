import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Kannan782003@gmail.com',
      href: 'mailto:john.doe@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '6380391771',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Thanjavur',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kannan785',
      href: 'https://github.com/kannan785',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <SectionTitle
          title="Contact Me"
          subtitle="Let's connect! Feel free to reach out for collaborations or just a friendly hello"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Contact Information - Centered content */}
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-start mb-6 last:mb-0"
              >
                {/* Icon */}
                <info.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4" />

                {/* Label and Value */}
                <div className="text-left">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-1">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
