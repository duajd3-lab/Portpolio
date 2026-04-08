import React, { useEffect } from 'react'
import '../skills.scss'

function Skills() {

  useEffect(() => {
  const boxes = document.querySelectorAll('.skill-box')

  boxes.forEach((box, index) => {
    box.style.transitionDelay = `${index * 0.2}s`
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 화면에 들어오면 show
            entry.target.classList.add('show')
          } else {
            // 화면에서 나가면 show 제거
            entry.target.classList.remove('show')
          }
      })
    },
    { threshold: 0.5 }
  )

  boxes.forEach((box) => observer.observe(box))

  return () => observer.disconnect()
}, [])
  
  return (
    <div className='skillTxt'>
      <div className='boxTitle'>
        <h3>SKILLS</h3>
      </div>
      <div className='skill-box'>
        <div className='skill-img'>
          <img src='./imgs/html.svg' />
          <img src='./imgs/css.svg' />
          <img src='./imgs/js.svg' />
        </div>
        <div className='skill-txt'>
          <span>HTML5 / CSS</span>
          <p>시맨틱 마크업, 웹 표준을 고려한 구조 설계가 가능합니다.</p>
          <p>keyFrames를 사용하여 애니메이션 작업을 할 수 있습니다.</p>
          <p>ES6 자바스크립트 문법을 사용할 수 있습니다.</p>
        </div>
      </div>

      <div className='skill-box'>
        <div className='skill-img'>
          <img src='./imgs/react.svg' />
          <img src='./imgs/scss.svg' />
        </div>
        <div className='skill-txt'>
          <span>REACT / SASS</span>
          <p>컴포넌트 기반 구조 설계 및 재사용성 고려한 작업이 가능합니다.</p>
          <p>tailwind css, Zustand를 사용하여 상태관리를 활용 경험이 있습니다.</p>
        </div>
      </div>

      <div className='skill-box'>
        <div className='skill-img'>
          <img src='./imgs/github.svg' />
          <img src='./imgs/figma.svg' />
        </div>
        <div className='skill-txt'>
          <span>GITHUB / FIGMA</span>
          <p>Git / GitHub을 사용하여 프로젝트를 관리 가능합니다.</p>
          <p>Figma 기반 협업 경험이 있습니다.</p>
        </div>
      </div>

      <div className='skill-box'>
        <div className='skill-txt'>
          <span>API & 데이터 처리</span>
          <p>REST API 연동 및 비동기 처리를 활용한 데이터 기반 <br />
            웹 애플리케이션 개발 경험이 있습니다.</p>
        </div>
      </div>

      <div className='skill-box'>
        <div className='skill-txt'>
          <span>Currently Learning</span>
          <p>- TypeScript</p>
          <p>- Next.js</p>
        </div>
      </div>
    </div>
  )
}

export default Skills