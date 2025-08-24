import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Adit Goyal',
      role: 'Chief Robotics Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQF5fKiYph2ZGA/profile-displayphoto-shrink_400_400/B4EZYbZd2_GgAo-/0/1744216385556?e=1758758400&v=beta&t=b9Ky8hpZs5Nyp_MVrtRyxbF83D-ieDq-ME4Ci1cRk-Y',
      bio: 'Electronics, Robotics, AI and Space Enthusiast',
      social: { twitter: '#', linkedin: 'https://www.linkedin.com/in/adit-goyal-81021030b/', github: '#' },
    },
    {
      name: 'Sachin Mehta',
      role: 'Chief Website & AI Developer',
      image: 'assets/myPFP.png',
      bio: 'Aspiring Front End Deceloper and AI enthusiast',
      social: { twitter: '#', linkedin: 'https://www.linkedin.com/in/sachin-mehta-785704272/', github: '#' },
    },
    {
      name: 'Ayush Naugariya',
      role: 'Chief Strategy Officer',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQExJgIf8Gjf5w/profile-displayphoto-scale_400_400/B4EZjZw6H_HEAg-/0/1756000135683?e=1758758400&v=beta&t=fN_ap06Vyw5NZpMT-nommKaRJFos_P0ik_m6nrPNNr8',
      bio: 'Data Science and AI-ML Enthusiast',
      social: { twitter: '#', linkedin: 'https://www.linkedin.com/in/ayushnaugariya/', github: '#' },
    },
    {
      name: 'Rashi Goel',
      role: 'Chief Designer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGUXCaYfh9I2Q/profile-displayphoto-scale_400_400/B56ZiFl1lYG4Ak-/0/1754587948031?e=1758758400&v=beta&t=PNiaw1zU_39EZ_AaPszMJgpNuWDzt_LqEjpMoRd_sdw',
      bio: 'Hardware Design enthusiast with a passion for travel',
      social: { twitter: '#', linkedin: 'https://www.linkedin.com/in/rashigoel707/', github: '#' },
    },
    {
      name: 'Awaiting New Talent',
      role: 'Could be You!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Kjqb0KDZK9k3uASpmCYEVn_UX7iYxHZXxw&s',
      bio: 'You tell us',
      social: { twitter: '#', linkedin: '#', github: '#' },
    },
    {
      name: 'Awaiting New Talent',
      role: 'Could be You!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Kjqb0KDZK9k3uASpmCYEVn_UX7iYxHZXxw&s',
      bio: 'You tell us',
      social: { twitter: '#', linkedin: '#', github: '#' },
    },
  ];

  //const achievements = [
  //  { number: '15+', label: 'Years Combined Experience' },
  //  { number: '200+', label: 'Patents Filed' },
  //  { number: '$50M', label: 'Research Investment' },
  //  { number: '99.9%', label: 'System Reliability' },
  //];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Meet the Minds
            </span>
            <br />
            <span className="text-gray-300 text-3xl md:text-4xl">
              Behind the Dog
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A world-class team of engineers, researchers, and visionaries united by a common goal:
            revolutionizing the future of robotics and AI.
          </p>
        </motion.div>

        {/* Achievements Bar
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-2 border-gray-600 group-hover:border-cyan-400 transition-colors duration-300"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
                  </div>
                  
                  {/* Floating accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: Twitter, href: member.social.twitter },
                      { icon: Linkedin, href: member.social.linkedin },
                      { icon: Github, href: member.social.github },
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.href}
                        className="p-2 bg-gray-700/50 hover:bg-cyan-500/20 rounded-full transition-colors duration-300 group/social"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-4 h-4 text-gray-400 group-hover/social:text-cyan-400 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30">
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our team and help shape the future of robotics.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;