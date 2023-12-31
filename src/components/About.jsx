import React, { useState } from 'react';

function About() {
    const [activeTab, setActiveTab] = useState('Professional');
    const [showSummary, setShowSummary] = useState(false);

    const professionalText = `I began my career journey at 18, starting as a part-time employee at a local Dollar Tree. My dedication and work ethic quickly led me to an assistant manager role, where I was responsible for leading the closing shift. This early experience laid the foundation for my leadership and team management skills.
    After graduating, I enlisted in the Air Force, where my commitment to excellence was evident from the start. I graduated from Basic Military Training (BMT) as an Honor Graduate, recognized for both scholastic and fitness achievements. At my first duty station, I distinguished myself among peers, earning the Below-the-Zone (BTZ) award, which led to an early promotion to E4.
    As a testament to my leadership potential, I was ranked #1 among maintenance squadron candidates for the Non-Commissioned Officer (NCO) role by my Squadron Commander. Combined with my scores on the Weighted Airman Promotion System (WAPS) test, I was promoted to Staff Sergeant (E5) within three years of service.
    During my preparation for the NCO role, I attended Airman Leadership School (ALS), an 8-week program focusing on key leadership principles and team management practices. Graduating at the top of my class, I received the John L. Levitow Award, underscoring my leadership and scholastic abilities.
    As an NCO, I adopted an empathetic leadership style, which led to my selection as an instructor for the First Term Airman Course. This role involved guiding newly enlisted members, further honing my abilities to lead and mentor effectively.
    In my subsequent role leading swing-shift operations, I managed a team in project execution, from research and procurement to communication and technical planning. This role honed my skills in project management, encompassing all aspects of planning, team coordination, and execution.
    Throughout my six years in the Air Force, I maintained a record free of disciplinary infractions and received multiple Achievement Medals, highlighting key accomplishments during my service. Although my experience was not in a technical field, the leadership, project management, and team collaboration skills I developed are invaluable assets in any team environment, including software engineering.`
    
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

    const personalText = ``;
    const personalSummary = ``;
    
    const tabContent = {
        Professional: professionalText,
        Personal: 'Personal content goes here...',
        Technical: 'Technical content goes here...'
    };

    const renderContent = () => {
        if (activeTab === 'Professional') {
            return showSummary ? professionalSummary : professionalText;
        }
        return tabContent[activeTab];
    };

    return (
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
                            if (tab !== 'Professional') {
                                setShowSummary(false);
                            }
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
    );
}

export default About;