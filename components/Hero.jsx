import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const techStack = [
    {
      name: 'HTML5',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="3 1 45 45">
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
        <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
      </svg>`,
      color: 'text-orange-500'
    },
    {
      name: 'CSS3',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="3 1 45 45">
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
        <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
      </svg>`,
      color: 'text-blue-500'
    },
    {
      name: 'JavaScript',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="1 1 46 46">
        <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
        <path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 
        c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 
        c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 
        c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 
        c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 
        c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 
        L17.952,33.029z"></path>
      </svg>`,
      color: 'text-yellow-400'
    },
    {
      name: 'React', icon: `<svg  class="w-full h-full" viewBox="-1 -1 26 26" fill="currentColor" >
                    <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213c.372-.798.763-1.536 1.166-2.228.374-.631.851-1.34 1.351-2.122l.135-.193.235-.02a29.945 29.945 0 015.033 0l.234.02.134.193a30.355 30.355 0 012.517 4.35l.101.213-.101.213a29.932 29.932 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" id="el-uvi7k0mf"></path>
                </svg>`, color: 'text-blue-400'
    },
    {
      name: 'Next.js', icon: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                    <g transform="translate(1 1) scale(7.5)">
                        <circle cx="40" cy="40" r="40" fill="white" />
                        <path d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z" fill="url(#prefix___Linear1)" fill-rule="nonzero" />
                        <path fill="url(#prefix___Linear2)" d="M51.111 24h5.333v32h-5.333z" />
                    </g>
                    <defs>
                        <linearGradient id="prefix___Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.103 -29.93 76.555) scale(30)">
                            <stop offset="0" stop-color="black" />
                            <stop offset="1" stop-color="black" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="prefix___Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90.218 14.934 38.787) scale(28)">
                            <stop offset="0" stop-color="black" />
                            <stop offset="1" stop-color="black" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>`, color: 'text-white'
    },
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
              className="text-5xl md:text-6xl lg:text-5xl font-bold mb-6"
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

                    className="bg-neutral-800 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-md"
                    title={tech.name}
                  >
                    <div className={`w-7 h-7 ${tech.color}`}>
                      {tech.icon.startsWith("<svg") ? (
                        <div dangerouslySetInnerHTML={{ __html: tech.icon }} />
                      ) : (
                        <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                      )}
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