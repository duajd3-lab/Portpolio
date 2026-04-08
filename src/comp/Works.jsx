import React, { useState } from 'react'
import '../works.scss'
import Popup from './Popup';
import data from '../json/project.json'

function Works() {

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className='worksBox'>
        <div className='boxTitle'>
          <h3>WORKS</h3>
        </div>
        {
          data.map((item, index) => {
            return <div className='project' key={index}>
              <div className="mockup" onClick={() => window.open(item.site)}>
                <img src={item.images[0]} className='screen' />
              </div>
              <div className='project-box'>
                <div className='project-txt'>
                  <h3>{item.title}</h3>
                  <div className='li-txt'>
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </div>
                  <span>SKILLS</span>
                  <p>{item.skills.join(', ')}</p>
                </div>
                <div className='project-btn'>
                  <button onClick={() => item.site && window.open(item.site)}>
                    <img src='./imgs/link.svg' className='linkSvg' /> GITHUB
                  </button>
                  <button onClick={() => setSelectedItem(item)}>자세히 보기</button>
                  {/* {open1 && <Popup setOpen={setOpen1} item={item} />} */}
                </div>
              </div>
            </div>
          })
        }
        {selectedItem && (
          <Popup setOpen={setSelectedItem} item={selectedItem} />
        )}


      </div>
    </>
  )
}

export default Works