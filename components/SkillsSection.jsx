import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for cards and icons
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const iconVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

// Reusable ProgressBar component
const ProgressBar = ({ label, percent, barColor }) => (
    <div>
        <div className="flex justify-between mb-1">
            <span className="font-medium">{label}</span>
            <span>{percent}%</span>
        </div>
        <div className="w-full bg-neutral-700 rounded-full h-2">
            <div className={`h-2 rounded-full ${barColor}`} style={{ width: `${percent}%` }}></div>
        </div>
    </div>
);

// SkillCard component for the progress card items
const SkillCard = ({ title, icon, progressItems, delay = 0 }) => (
    <motion.div
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay }}
        className="bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700 transition-transform duration-300 hover:transform hover:-translate-y-2"
    >
        <div className="flex items-center mb-4">
            {icon}

            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="space-y-4">
            {progressItems.map((item, idx) => (
                <ProgressBar key={idx} label={item.label} percent={item.percent} barColor={item.barColor} />
            ))}
        </div>
    </motion.div>
);

// TechIcon component for technology icons grid
const TechIcon = ({ icon, name, bgColor, iconColor }) => (
    <motion.div
        variants={iconVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
    >
        <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-3`}>
            <div className={`w-10 h-10 ${iconColor}`}>{icon}</div>
        </div>
        <span>{name}</span>
    </motion.div>
);

// AdditionalSkill component for extra expertise items
const AdditionalSkill = ({ icon, title, description }) => (
    <div className="flex items-start">
        <div className="text-blue-400 mr-3">{icon}</div>
        <div>
            <h4 className="font-medium mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

const SkillsSection = () => {
    // Data for the Skill Cards
    const frontendLanguages = {
        title: 'Frontend Languages',
        icon: (
            <div className="w-12 h-12 bg-[#3b82f633] rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            </div>
        ),
        progressItems: [
            { label: 'HTML5', percent: 95, barColor: 'bg-blue-500' },
            { label: 'CSS3 / SCSS', percent: 90, barColor: 'bg-blue-500' },
            { label: 'JavaScript (ES6+)', percent: 92, barColor: 'bg-blue-500' },
            { label: 'TypeScript', percent: 85, barColor: 'bg-blue-500' },
        ],
    };

    const frameworksLibraries = {
        title: 'Frameworks & Libraries',
        icon: (
            <div className="w-12 h-12 bg-[#6366f133] rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            </div>
        ),
        progressItems: [
            { label: 'React', percent: 95, barColor: 'bg-indigo-500' },
            { label: 'Tailwind CSS', percent: 90, barColor: 'bg-indigo-500' },
            { label: 'Next.js', percent: 88, barColor: 'bg-indigo-500' },
            { label: 'Ant Design', percent: 80, barColor: 'bg-indigo-500' },
        ],
    };

    const toolsWorkflows = {
        title: 'Tools & Workflows',
        icon: (
            <div className="w-12 h-12 bg-[#a855f733] rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-opacity-20 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            </div>
        ),
        progressItems: [
            { label: 'Git & GitHub', percent: 90, barColor: 'bg-purple-500' },
            { label: 'Webpack/Vite', percent: 85, barColor: 'bg-purple-500' },
            { label: 'Responsive Design', percent: 95, barColor: 'bg-purple-500' },
            { label: 'CI/CD', percent: 80, barColor: 'bg-purple-500' },
        ],
    };

    // Data for the Technology Icons grid
    const techIcons = [
        {
            name: 'React',
            icon: (
                <svg viewBox="0 0 24 24" class="w-10 h-10" fill="currentColor" >
                    <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213c.372-.798.763-1.536 1.166-2.228.374-.631.851-1.34 1.351-2.122l.135-.193.235-.02a29.945 29.945 0 015.033 0l.234.02.134.193a30.355 30.355 0 012.517 4.35l.101.213-.101.213a29.932 29.932 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" id="el-uvi7k0mf"></path>
                </svg>
            ),
            bgColor: 'bg-[#2563eb33]',
            iconColor: 'text-blue-400',
        },
        {
            name: 'JavaScript',
            icon: (
                <svg viewBox="-1 -1 25 25" className="w-10 h-10" fill="currentColor">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
            ),
            bgColor: 'bg-[#eab30833]',
            iconColor: 'text-yellow-400',
        },
        {
            name: 'TypeScript',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-13 h-13" viewBox="5 5 48 48" fill="currentColor">
                    <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
                </svg>
            ),
            bgColor: 'bg-[#3b82f633]',
            iconColor: 'text-blue-500',
        },
        {
            name: 'Tailwind CSS',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" id="el-ejtr8y8f"></path>
                </svg>
            ),
            bgColor: 'bg-[#14b8a633]',
            iconColor: 'text-teal-400',
        },
        {
            name: 'Next.js',
            icon: (
                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
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
                </svg>
            ),
            bgColor: 'bg-[#40404066]',
            iconColor: 'text-white',
        },
        {
            name: 'Node.js',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" id="el-f3j1jxyw"></path>
                </svg>
            ),
            bgColor: 'bg-[#16a34a33]',
            iconColor: 'text-green-500',
        },
    ];

    // Data for Additional Expertise items
    const additionalSkills = [
        {
            title: 'Web Accessibility',
            description: 'WCAG compliance, keyboard navigation, screen reader optimization',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            title: 'CI/CD & Deployment',
            description: 'GitHub Actions, Vercel, Netlify, AWS deployment workflows',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
            ),
        },
        {
            title: 'Performance Optimization',
            description: 'Lighthouse audits, Core Web Vitals, bundle size optimization',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'State Management',
            description: 'Redux, Context API, Zustand, Recoil, React Query',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            ),
        },
        {
            title: 'API Integration',
            description: 'RESTful APIs, GraphQL, Apollo Client, Axios',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
            ),
        },
        {
            title: 'Testing',
            description: 'Jest, React Testing Library, Cypress, Storybook',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="skills" className="py-20 bg-neutral-900 text-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills &amp; Expertise</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
                        With a versatile skill set and expertise in frontend development, I deliver clean, scalable, and performant web solutions that meet modern standards.
                    </p>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <SkillCard {...frontendLanguages} />
                    <SkillCard {...frameworksLibraries} delay={0.2} />
                    <SkillCard {...toolsWorkflows} delay={0.4} />
                </div>

                {/* Technology Icons Grid */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center mb-10">Technologies I Work With</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                        {techIcons.map((tech, idx) => (
                            <TechIcon key={idx} {...tech} />
                        ))}
                    </div>
                </div>

                {/* Additional Expertise */}
                <div className="mt-20">
                    <div className="bg-neutral-800 rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-8 text-center">Additional Expertise</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {additionalSkills.map((skill, idx) => (
                                <AdditionalSkill key={idx} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
