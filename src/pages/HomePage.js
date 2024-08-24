// import React from 'react';
// import BookingForm from '../components/BookingForm';

// const HomePage = () => {
//     return (
//         <div>
//             <h1>CareerCarve 1x1 Mock Interview Scheduler</h1>
//             <BookingForm />
//         </div>
//     );
// };

// export default HomePage;



import React from "react";
import { useNavigate , Link} from "react-router-dom";
import "./style.css";

const HomePage = () => {
    const navigate = useNavigate(); 

  const handleBookClick = () => {
    navigate('/book')
  };
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">CareerCarve</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Mentors</li>
          <li>Blogs</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Become a Mentor</li>
        </ul>
        <button className="sign-up-btn">Sign up</button>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h1>From <span>resume</span> to <span>final interview prep</span></h1>
          <p>We've got you covered</p>
          <button className="cta-btn" onClick={handleBookClick}>Book 1X1</button>
          <button className="cta-btn">Buy Training Plans</button>
          <p className="subtext">
            Get ready for your MBA campus placements, summers, or finals with
            the guidance of the most experienced and renowned Placement Training
            Agency with over 12+ years of expertise in training top B-Schools
            across the country.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="./student.jpg"
            alt="Interview Preparation"
            className="hero-img"
          />
        </div>
      </div>

      <div className="statistics">
        <div className="stat-item">
          <h2>1,50,000+</h2>
          <p>1X1 Sessions Conducted</p>
        </div>
        <div className="stat-item">
          <h2>600+</h2>
          <p>Industry Mentors</p>
        </div>
        <div className="stat-item">
          <h2>40+</h2>
          <p>Prestigious B-Schools</p>
        </div>
        <div className="stat-item">
          <h2>52,000+</h2>
          <p>Students Trained</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

