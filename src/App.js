
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import info from './components/Information/info';
import icon from './icon1.jpg';
import icon2 from "./Saly-11.png";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="information">
        <div className="left-info">
          <div className="bold-text">
            Finding research positions doesn’t have to be HARD.
          </div>
          <p className="details">
            A website for all your research needs with ease and fun using
            Explore discover interesting research from all sorts of UofC
            professors.
          </p>
          <button className="btn-jobBoard">Job Board</button>
        </div>
        <div className="right-info">
          <img src={icon} alt="icon" className="bg-image" />
        </div>
      </div>
      <div className="notifications">
        <div className="count">
          <button class="btn">
            <i class="fa fa-home"></i>{" "}
            <span className="notifications-count">90+</span>
            <div className="h3-text">Professors</div>
          </button>
        </div>

        <div className="count">
          <button class="btn">
            <i class="fa fa-home"></i>{" "}
            <span className="notifications-count">50+</span>
            <div className="h3-text">Positions</div>
          </button>
        </div>
        <div className="count">
          <button class="btn">
            <i class="fa fa-home"></i>{" "}
            <span className="notifications-count">100+</span>
            <div className="h3-text">Students</div>
          </button>
        </div>
      </div>

      <div className="features">
        <div className="left-icon">
          <img src={icon2} alt="icon2" />
        </div>

        <div className="features-info">
          <div className="feature-heading">
            We Provide Many Features You Can Use
          </div>
          <div className="feature-list">
            <ul className="features-list">
              <li>Proffesor gurantee.</li>
              <li>Hands on Learning..</li>
              <li>Learn knowledge you need..</li>
              <li>No specific time limits..</li>
            </ul>
          </div>
          <div>
            <h1 className='join-header'>Join now to get your Career started</h1>
          </div>
          <div className="sign-up">
            <button className="btn-jobBoard">Sign up</button>
          </div>
        </div>
      </div>

  
    </div>
  );
}

export default App;
