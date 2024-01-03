import React from 'react'
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Web-Development');
  const tabContent = {
    'Web-Development': '',
    'Data-Analysis': '',
    'Algorithms': '',
};
  return (
    <>
    <section>
    {/* <div className='project-container'> */}
      <div className='project-heading'>
          <h2 className='project-title'>Projects</h2>
      </div>
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
    {/* </div> */}
    </section>
    </>
  )
}

export default Projects