import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const techStack = [
    { name: 'HTML5', icon: '/icons/html5.svg', color: 'text-orange-500' },
    { name: 'CSS3', icon: '/icons/css3.svg', color: 'text-blue-500' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', color: 'text-yellow-400' },
    { name: 'React', icon: '/icons/react.svg', color: 'text-blue-400' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', color: 'text-white' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="hero" className="bg-neutral-900 text-white pt-24 pb-16 md:py-32 w-full min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-blue-600">Frontend Developer</span><br />
              Building Modern Web Experiences
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              I create responsive, interactive websites with clean code and beautiful design. Turn your ideas into production-ready web applications.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 px-8 rounded-md text-lg font-medium inline-flex items-center justify-center shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white py-3 px-8 border border-blue-600 hover:border-transparent rounded-md transition-all duration-300 text-lg font-medium inline-flex items-center justify-center shadow-lg shadow-blue-600/5 hover:shadow-blue-600/20"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            >
              <p className="text-gray-400 font-medium">Tech Stack:</p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + 1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, 5, -5, 0], 
                      transition: { duration: 0.5 }
                    }}
                    className="bg-neutral-800 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-md"
                    title={tech.name}
                  >
                    <div className={`w-6 h-6 ${tech.color}`}>
                      {/* Icon would be loaded from the src path */}
                      {/* Using placeholder div for now */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-1 shadow-xl">
              <div className="bg-[#1e1e1e] rounded-2xl p-6 relative overflow-hidden">
                {/* Terminal UI elements */}
                <div className="flex items-start mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Code content with typing animation */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="font-mono text-sm md:text-base space-y-2"
                >
                  <div className="flex">
                    <span className="text-green-400 mr-2">const</span>
                    <span className="text-blue-400 mr-2">developer</span>
                    <span className="text-white mr-2">=</span>
                    <span className="text-orange-300">{'{'}</span>
                  </div>
                  
                  <div className="ml-4">
                    <span className="text-purple-300">name:</span>
                    <span className="text-green-300"> 'Krishnaraj Irkal'</span>,
                  </div>
                  
                  <div className="ml-4">
                    <span className="text-purple-300">title:</span>
                    <span className="text-green-300"> 'Frontend Developer'</span>,
                  </div>
                  
                  <div className="ml-4">
                    <span className="text-purple-300">skills:</span>
                    <span className="text-blue-300"> [</span>
                    <span className="text-green-300"> 'React'</span>,
                    <span className="text-green-300"> 'JavaScript'</span>,
                    <span className="text-green-300"> 'Tailwind'</span>,
                    <span className="text-green-300"> 'Next.js'</span>
                    <span className="text-blue-300"> ]</span>,
                  </div>
                  
                  <div className="ml-4">
                    <span className="text-purple-300">available:</span>
                    <span className="text-blue-400"> true</span>,
                  </div>
                  
                  <div className="ml-4">
                    <span className="text-purple-300">location:</span>
                    <span className="text-green-300"> 'Remote'</span>,
                  </div>
                  
                  <div className="ml-4">
                    <span className="text-purple-300">passion:</span>
                    <span className="text-green-300"> 'Building amazing user experiences'</span>
                  </div>
                  
                  <div>
                    <span className="text-orange-300">{'}'}</span>
                  </div>
                </motion.div>
                
                {/* Blinking cursor effect */}
                <motion.div 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="absolute bottom-6 right-6 w-2 h-5 bg-white"
                ></motion.div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-blue-700 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
         <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 1.5,
            duration: 1
          }}
          className="hidden md:flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <a href="#about" className="text-#e5e7eb-600 hover:text-#e5e7eb-500 opacity-80">
              <ChevronDownIcon className="h-10 w-10 text-[blue]-600 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-900/20 to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;