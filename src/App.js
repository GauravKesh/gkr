import './index.css';
import "./style/Navbar1.css";
import Home from './component/Home';
import Gallery from './component/Gallery';
import Project from './component/Project';
import Blog from './component/Blogs';
import Contact from './component/Contact';
// import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';

function App() {
  document.body.style.backgroundColor = "#1d1d1d";
  document.body.style.color = "#fff";


  useEffect(() => {
    const handleBlur = () => {
      document.title = "comeback";
    };
    const handleFocus = () => { document.title = "Welcome back"; };


    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('blur', handleBlur);
    };
  }, []);
  const scrollToTarget = (targetId) => {
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  };
  function openNav() {
    const w = window.innerWidth;
    if (w < 795) {
      document.getElementById("myNav").style.width = "75%";
      //  window.onclick = function () { closeNav(); };
    }
    else {
      document.getElementById("myNav").style.width = "25%";
      window.onclick = function () { closeNav(); };
    }
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    ;
  }
  window.onscroll = function () { closeNav(); };
  const w = window.innerWidth;
  if (w < 795) {

    //  window.onclick = function () { closeNav(); };
  }
  var d = new Date();
  var year = d.getFullYear();
  return (
    <>
      <div className='op fixed-top' id='op' style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav} onMouseOver={window.innerWidth >= 795 ? openNav : null}>&#9776;</div>
      <div className='overlay' id='myNav'>
        <button className='closebtn' onClick={closeNav}>&times;</button>
        <div className="overlay-content">
          <ul>
            <li><button aria-current="page" onClick={() => { scrollToTarget('home'); closeNav(); document.title = "Home"; }}>Home</button></li>
            <li><button onClick={() => { scrollToTarget('gallery'); closeNav(); document.title = "Gallery"; }}>Services</button></li>
            <li><button onClick={() => { scrollToTarget('projects'); closeNav(); document.title = "Projects"; }}>Projects</button></li>
            <li><button onClick={() => { scrollToTarget('blog'); closeNav(); document.title = "Blogs"; }}>Clients</button></li>
            <li><button onClick={() => { scrollToTarget('contact'); closeNav(); document.title = "Contact"; }}>Contact</button></li>
          </ul>
        </div>
      </div>~

      <div id="home"><Home /></div>
      <div id="gallery"><Gallery /></div>
      <div id="projects"><Project /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>
      <div class="icon-bar">
        <a href="/" class="twitter"><i class="fa fa-twitter" /></a>
        <a href="/" class="whatsapp"><i class="fa fa-whatsapp" /></a>
        <a href="/" class="github"><i class="fa fa-github" /></a>
        <a href="/" class="linkedin"><i class="fa fa-linkedin" /></a>
        <a href="/" class="instagram"><i class="fa fa-instagram" /></a>
        <a href="tel:+917892917825" class="call"><i class="fa fa-phone" /></a>
        <a href="mail:gkrcoder@gmail.com" class="call"><i class="fa fa-email" /></a>
      </div>

      <div className="footer" >
        <div className="container">
          <div className="cont">
          <p style={{color:"yellow"}}>All right are preserved <i class="fa fa-copyright" aria-hidden="true"/>{year}</p>
            <div className="social-icon"/>
            <a href="/" target="_blank" rel="noreferrer"><i class="fa fa-facebook" aria-hidden="true"/></a>
            <a href="https://www.instagram.com/gaurav_k_r/" target="_blank" rel="noreferrer"><i class="fa fa-instagram" aria-hidden="true"/></a>
            <a href="https://www.linkdin.com/in/gaurav-kesh/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin" aria-hidden="true"/></a>

            

          </div>
        </div>
      </div>
    </>
  )
}

export default App;