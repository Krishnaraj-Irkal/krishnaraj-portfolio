import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// const projects = [
//     {
//         title: 'Project One',
//         description: 'Description for project one.',
//         link: 'https://example.com/project-one'
//     },
//     {
//         title: 'Project Two',
//         description: 'Description for project two.',
//         link: 'https://example.com/project-two'
//     },
//     // Add more projects as needed
// ];

const AllProjects: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <div><h1>Hello</h1></div>
                <div><h1>Hello</h1></div>
            </main>
            <Footer />
        </div>
    );
};

export default AllProjects;