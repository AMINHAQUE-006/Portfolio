import React from 'react'
import './Home.css'
import Facebook from '../../assets/socialLinks/Facebook.svg'
import GitHub from '../../assets/socialLinks/GitHub.svg'
import Instagram from '../../assets/socialLinks/Instagram.svg'
import LinkedIn from '../../assets/socialLinks/LinkedIn.svg'
import TwitterX from '../../assets/socialLinks/TwitterX.svg'

function Home() {
  return (
    <>
    <main className='container'>
      <div className="info">
        <p className="name">AMIN HAQUE</p>
        <p className="profession">FRONT END DEVELOPER</p>
        <p className="description">I specialize in frontend development, with mastery in <span className='highlight'>React Js, HTML, CSS, JavaScript, and Bootstrap.</span> Converting designs into pixel-perfect frontend websites is my expertise. I ensure well-structured, cross-browser compatible, valid, adaptive, clean, and maintainable code for all projects.</p>
      </div>
      <div className="social-links">
        <img className='social-link-item' src={Facebook} alt="Facebook" />
        <img className='social-link-item' src={GitHub} alt="GitHub" />
        <img className='social-link-item' src={Instagram} alt="Instagram" />
        <img className='social-link-item' src={LinkedIn} alt="LinkedIn" />
        <img className='social-link-item' src={TwitterX} alt="TwitterX" />
      </div>
    </main>
    </>
      
  )
}

export default Home