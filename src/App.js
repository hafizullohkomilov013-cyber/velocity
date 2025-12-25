import "./App.css";
import designImg from "./img/IMAGE1.png";
import codeImg from "./img/IMAGE-code.png";
import template from "./img/IMAGE-template.png";
import service1 from "./img/servicce.img1.png";
import service2 from "./img/servicce.img2.png";
import peopleImg from "./img/IMAGE-PEOPLE.png";
import twitter from "./img/twitter.svg"
import facebook from "./img/facebook.svg"
import pinterest from "./img/pinterest.svg"
import google from "./img/google.svg"
import webflore from "./img/webflow.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="container nav-bar">
          <h2>VECLOCITY</h2>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <section className="nav-section">
          <div className="nav-sevtion-container">
            <h1>This is Velocity</h1>
            <div className="header-buttons">
              <button className="sign-btn">SIGN UP</button>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="main-section container">
          <div className="main-section-block">
            <h2>WHET WE DO</h2>
            <h3>THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</h3>
          </div>
          <div className="main-section-cards">
            <div className="main-section-items">
              <img src={designImg} alt="design" />
              <h2>GRAPHIG DESIGN</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum.
              </p>
            </div>
            <div className="main-section-items">
              <img src={codeImg} alt="design" />
              <h2>AWESOME CODE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum.
              </p>
            </div>
            <div className="main-section-items">
              <img src={template} alt="design" />
              <h2>FREE TEMPLATE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum.
              </p>
            </div>
          </div>
        </section>
        <section className="main-section-services">
          <div className="container main-div-block">
            <div className="service-text">
              <h2>SERVICES</h2>
              <h3>THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</h3>
            </div>
            <div className="service-cards">
              <div className="service-items">
                <img src={service1} alt="service1" />
                <h2>SERVICES ONE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius.
                </p>
                <button className="learn-btn">LEARN MORE</button>
              </div>
              <div className="service-items">
                <img src={service2} alt="service1" />
                <h2>SERVICES TWO</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius.
                </p>
                <button className="learn-btn">LEARN MORE</button>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-sectino container">
          <div className="tab-box">
            <h2>TAB SECTION</h2>
            <h3>THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</h3>
            <div className="tab-buttons">
              <button className="tab-btn1">TAB BUTTON 1</button>
              <button className="tab-btn">TAB BUTTON 2</button>
              <button className="tab-btn">TAB BUTTON 3</button>
            </div>
          </div>
          <img src={peopleImg} alt="people" />
          <h2>Some Title Here</h2>
          <div className="tab-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p>
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <section className="footer-section container">
          <div className="velocity-box">
            <h2>ABAUTE VECLOCITY</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="useful-links">
            <h2>USEFUL LINKS</h2>
            <p>Phasellus gravida semper nisi</p>
            <p>Suspendisse nisl elit </p>
            <p>Dellentesque habitant morbi</p>
            <p>Etiam sollicitudin ipsum</p>
          </div>
          <div className="social-links">
            <h2>SOCIAL</h2>
            <div className="social-icons">
              <img src={twitter} alt="twitter" />
              <p>Twitter</p>
            </div>
            <div className="social-icons">
              <img src={facebook} alt="twitter" />
              <p>Facebook</p>
            </div>
            <div className="social-icons">
              <img src={pinterest} alt="twitter" />
              <p>Pinterest</p>
            </div>
            <div className="social-icons">
              <img src={google} alt="twitter" />
              <p>Google</p>
            </div>
            <div className="social-icons">
              <img src={webflore} alt="twitter" />
              <p>Webflore</p>
            </div>
          </div>
        </section>
        <section className="footer-copyright">
          <p className="copyright">Copyright Velocity Inc. Made in Webflow.</p>
        </section>
      </footer>
    </div>
  );
}

export default App;
