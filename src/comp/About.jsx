import React, { useEffect, useRef, useState } from 'react'
import '../about.scss'
// import profileImg from '../imgs/pink.jpg'


function About() {

  const boxRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2, // 20% 보이면 실행
      }
    )

    if (boxRef.current) {
      observer.observe(boxRef.current)
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current)
      }
    }
  }, [])

  return (
    <div className='aboutBox'>
      <div className='boxTitle'>
        <h3>ABOUT</h3>
      </div>
      <div ref={boxRef}
        className={`static_box ${isVisible ? 'show' : ''}`}>
        <div className='pro_box'>
          <div className='profile'>
            <img src='../imgs/pink.jpg' />
          </div>
          <div className='profile-txt'>
          {/* <span>Frontend Developer</span> */}
            <p>안녕하세요.  <br />
              사용자 중심의 인터페이스를 고민하고, <br />
              더 나은 사용자 경험을 제공하기 위해 <br />
              서비스를 개선해나가는 프론트엔드 개발자
            </p>
            <p><span>김나영</span> 입니다.</p>
          </div>
        </div>
        <div className="value-simple">
          <div className="value-item">💡 사용자 흐름을 고려한 UI/UX를 설계합니다</div>
          <div className="value-item">🧹 유지보수성을 고려한 코드를 작성합니다</div>
          <div className="value-item">📈 꾸준한 학습과 개선을 통해 성장합니다</div>
        </div>
        <div className="stack">
          <h4>Tech Stack</h4>
          <ul>
            <li><strong>Frontend:</strong> React, JavaScript (ES6+)</li>
            <li><strong>Style:</strong> HTML5, CSS3, SCSS</li>
            <li><strong>Tools:</strong> Git, GitHub</li>
            <li><strong>Design:</strong> Figma</li>
            <li><strong>Project:</strong> Todo 앱, REST API 연동 경험</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About