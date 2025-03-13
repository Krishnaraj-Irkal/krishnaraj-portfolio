import React from 'react';
import { motion } from 'framer-motion';

/** Reusable SVG check icon */
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
);

/** Bullet item for left-column key points */
const KeyPointItem = ({ text }) => (
    <div className="flex items-center">
        <div className="mr-4 text-blue-600">
            <CheckIcon />
        </div>
        <span>{text}</span>
    </div>
);

/** A grid for the left-column key points */
const KeyPointsGrid = ({ items }) => {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-10">
            {items.map((item, index) => (
                <KeyPointItem key={index} text={item} />
            ))}
        </div>
    );
};

/** Reusable bullet list item for experience details */
const ExperienceBulletItem = ({ text }) => (
    <li className="flex items-start">
        <svg
            className="w-4 h-4 mt-1 mr-2 text-blue-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 13l4 4L19 7" />
        </svg>
        <span>{text}</span>
    </li>
);

/** A component for rendering an individual experience section */
const ExperienceItem = ({
    borderColor = 'border-blue-600',
    jobTitle,
    company,
    date,
    bulletPoints
}) => (
    <div className={`border-l-4 ${borderColor} pl-4`}>
        <h5 className="font-bold">{jobTitle}</h5>
        <p className="text-blue-400">{company}</p>
        <p className="text-sm text-gray-400 mt-1">{date}</p>
        <ul className="mt-2 space-y-2 text-gray-300">
            {bulletPoints.map((bp, idx) => (
                <ExperienceBulletItem key={idx} text={bp} />
            ))}
        </ul>
    </div>
);

const AboutSection = () => {
    // Animation Variants
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    // Data for the left-column bullet points
    const leftColumnPoints = [
        'Responsive Design',
        'Performance Optimization',
        'Modern Frameworks',
        'UI/UX Best Practices',
        'Accessibility (WCAG)',
        'API Integration'
    ];

    // Data for the experiences
    const experiences = [
        {
            borderColor: 'border-blue-500',
            jobTitle: 'Frontend Developer',
            company: 'Mindkosh Technologies Pvt. Ltd',
            date: 'May 2023 - Present',
            bulletPoints: [
                'Developed an issue-tracking system with real-time chat in React/TypeScript, enabling seamless collaboration on annotated images and point cloud files.',
                'Built reusable UI components (filterable data tables, drag-and-drop, export features) to improve workflow efficiency.',
                'Implemented interactive analytics dashboards using Chart.js for data-driven insights and faster decision-making.'
            ]
        },
        {
            borderColor: 'border-blue-500',
            jobTitle: 'Graphic Designer (Freelance)',
            company: 'Hevlet Media',
            date: 'November 2020 - April 2023',
            bulletPoints: [
                'Designed SEO-optimized websites with modern UI, boosting brand visibility and user engagement.',
                'Collaborated with marketing teams to produce engaging visuals and intuitive UX.',
                'Applied responsive design and modern web technologies to deliver cross-platform digital experiences.'
            ]
        }
    ];

    return (
        <section
            id="about"
            className="py-20 bg-neutral-800 text-white relative overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            I build{' '}
                            <span className="text-blue-600">
                                exceptional digital experiences
                            </span>{' '}
                            that users love
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Hello! I’m a passionate Frontend Developer with 1+ years of
                            experience building scalable web applications and 2 years of
                            graphic design expertise. I specialize in transforming design
                            concepts into immersive digital experiences using modern web
                            technologies like React, Next.js, and TypeScript.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            My approach combines clean code, optimal performance, and
                            intuitive user interfaces to deliver websites that not only look
                            great but also provide exceptional user experiences. I’m
                            continually learning new technologies and best practices to stay
                            ahead of industry trends.
                        </p>

                        {/* Key Points */}
                        <KeyPointsGrid items={leftColumnPoints} />
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:pl-10"
                    >
                        <div className="bg-neutral-700 rounded-lg p-8 relative">
                            {/* Decorative Blur */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 blur-xl"></div>

                            {/* Work Experience */}
                            <h4 className="text-xl font-bold mb-6 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-2 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 
                      00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 
                      00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                Work Experience
                            </h4>

                            <div className="space-y-6">
                                {experiences.map((exp, idx) => (
                                    <ExperienceItem
                                        key={idx}
                                        borderColor={exp.borderColor}
                                        jobTitle={exp.jobTitle}
                                        company={exp.company}
                                        date={exp.date}
                                        bulletPoints={exp.bulletPoints}
                                    />
                                ))}
                            </div>

                            {/* Education */}
                            <div className="mt-10">
                                <h4 className="text-xl font-bold mb-6 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 
                      0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 
                      01.665-6.479L12 14z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 
                      0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 
                      0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 
                      6v-7.5l4-2.222"
                                        />
                                    </svg>
                                    Education
                                </h4>

                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h5 className="font-bold">
                                        Bachelor’s in Computer Science &amp; Engineering
                                    </h5>
                                    <p className="text-blue-400">KLE Institute of Technology</p>
                                    <p className="text-sm text-gray-400 mt-1">Graduated 2020</p>
                                    <p className="mt-2 text-gray-300">
                                        Specialized in building scalable web applications and
                                        focusing on user-centric design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
