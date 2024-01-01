import React, { useState } from 'react';
import { useEffect } from 'react';

function About() {
    const [activeTab, setActiveTab] = useState('Professional');
    const [showSummary, setShowSummary] = useState(true);

    const professionalText = `Starting my career at 18 as a part-time Dollar Tree employee, I 
    quickly advanced to assistant manager, kickstarting my journey in leadership and team management. 
    My Air Force tenure further honed these skills, marked by early promotions, academic and fitness 
    recognitions, and the prestigious John L. Levitow Award at Airman Leadership School. As a Staff 
    Sergeant, I excelled in mentoring roles and managing complex projects, demonstrating effective 
    communication, empathy, and strategic planning. My six years of disciplined service, free from 
    any infractions and decorated with multiple Achievement Medals, reflect my dedication to excellence. 
    These experiences, though not in a technical field, have equipped me with invaluable leadership, 
    project management, and teamwork skills, readily transferable to any professional setting.
    `
    const professionalSummary = (
        <ul>
            <li>Started career at 18 as a part-time employee at Dollar Tree, quickly promoted to assistant manager.</li>
            <li>Enlisted in the Air Force, graduated BMT as an Honor Grad, recognized for scholastic and fitness achievements.</li>
            <li>Awarded BTZ for early promotion to E4; promoted to Staff Sergeant (E5) within three years.</li>
            <li>Received John L. Levitow Award at Airman Leadership School, ranking #1 among peers.</li>
            <li>Served as an instructor for the First Term Airman Course and led swing-shift operations.</li>
            <li>Excelled in project management, team coordination, and leadership throughout six years in the Air Force.</li>
        </ul>
    );

    const personalText = `In my leisure, I engage in activities that blend mental stimulation with 
    physical challenge, reflecting my deep-rooted curiosity and a balanced approach to life. From 
    the precision of skateboarding in my youth to the problem-solving aspects of rock climbing and 
    the tranquility of playing acoustic guitar, each hobby enriches my creativity and critical 
    thinking skills. My penchant for tinkering with electronics, starting with disassembling gadgets 
    as a child to building computers and experimenting with Arduino boards, showcases my technical
    aptitude and innovative spirit. These pursuits not only fuel my creativity in tackling coding 
    challenges but also underscore the importance I place on mindfulness and well-being, essential 
    for a healthy work-life balance and effective problem-solving in professional settings.
    `
    const personalSummary = (
        <ul>
            <li>Passionate about blending physical and mental challenges, from precision skateboarding to problem-solving in rock climbing.</li>
            <li>Keen interest in technology, showcased by a history of tinkering with electronics, building computers, and working with Arduino boards.</li>
            <li>Find creative inspiration and mindfulness through playing acoustic guitar and immersing in nature with my dog.</li>
            <li>Advocate for a balanced lifestyle, emphasizing well-being and stress management alongside professional development.</li>
            <li>My hobbies foster creativity, critical thinking, and innovative problem-solving skills, applicable in technology and team environments.</li>
        </ul>
    );

    const technicalText = `Pursuing a Computer Science degree at Colorado State University with 
    a projected graduation in 2024, I've acquired a diverse skill set encompassing Java, C++, and 
    Python, along with deep dives into Networking, Security, and Software Engineering. My practical 
    application of these skills is evident in projects like a task-managing 'Flow Timer' using 
    Arduino and a Python script for inventory automation in Shopify. I’ve also developed various 
    websites using HTML5, CSS3, JavaScript, React, Django, and Flask. Keen to expand my horizons, 
    I'm exploring Next.js for its serverless capabilities. This blend of formal education and 
    self-driven projects reflects my passion for technology, constant learning, and a belief in 
    redefining challenges as opportunities for innovation.
    `;
    const technicalSummary = (
        <ul>
            <li>Studying Computer Science at Colorado State University, set to graduate with honors in 2024.</li>
            <li>Proficient in Java, C++, and Python, with coursework in Networking, Security, Software Engineering, and more.</li>
            <li>Developed a 'Flow Timer' Arduino project and a Python script for Shopify inventory management.</li>
            <li>Experienced in web development using HTML5, CSS3, JavaScript, React, Django, and Flask.</li>
            <li>Exploring Next.js for its advanced serverless features.</li>
            <li>Committed to continuous learning and innovation in technology.</li>
        </ul>
    );
    
    const tabContent = {
        Professional: professionalText,
        Personal: personalText,
        Technical: technicalText
    };

    const renderContent = () => {
        if (activeTab === 'Professional') {
            return showSummary ? professionalSummary : professionalText;
        }
        else if (activeTab === 'Personal') {
            return showSummary ? personalSummary : personalText;
        }
        else if (activeTab === 'Technical') {
            return showSummary ? technicalSummary : technicalText;
        }
        return tabContent[activeTab];
    };

    return (
        <>
        <div className="about-container">
            <h2 className="about-title">About</h2>
            <div className="title-underline"></div>
            
            <div className="tabs">
                {Object.keys(tabContent).map(tab => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab(tab);
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === 'Professional' && (
                <button className="toggle-summary" onClick={() => setShowSummary(!showSummary)}>
                    {showSummary ? 'Read Full Story' : 'Show Summary'}
                </button>
            )}
            {activeTab === 'Personal' && (
                <button className="toggle-summary" onClick={() => setShowSummary(!showSummary)}>
                    {showSummary ? 'Read Full Story' : 'Show Summary'}
                </button>
            )}
            {activeTab === 'Technical' && (
                <button className="toggle-summary" onClick={() => setShowSummary(!showSummary)}>
                    {showSummary ? 'Read Full Story' : 'Show Summary'}
                </button>
            )}

            <p className="about-description">
                {renderContent()}
            </p>
            
        </div>
              
        </>
    );
}

export default About;