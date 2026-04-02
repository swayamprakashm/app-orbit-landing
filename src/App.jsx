import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">

      {/* Background Video */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay (IMPORTANT for visibility) */}
      <div className="video-overlay"></div>

      {/* Content */}
      <div className="content-overlay">

        {/* Hero Section */}
        <header className="hero">
          <h1>AppOrbit</h1>
          <p className="tagline">Take control of your digital life.</p>
          <p className="description">
            The ultimate application usage tracker and screen time management tool.
            Monitor habits, set boundaries, and build a healthier relationship with your devices.
          </p>

          <a 
            href="https://github.com/swayamprakashm/app-orbit-landing/releases/download/Application/AppOrbit.apk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-btn"
          >
            Download AppOrbit
          </a>
        </header>

        {/* Features */}
        <section className="features">
          <h2>Key Features</h2>
          <div className="feature-grid">

            <div className="feature-card">
              <h3>📊 Real-time Tracking</h3>
              <p>Monitor your app usage second by second.</p>
            </div>

            <div className="feature-card">
              <h3>👨‍👩‍👧‍👦 Parental Controls</h3>
              <p>Keep your family safe with robust screen time limits.</p>
            </div>

            <div className="feature-card">
              <h3>⏳ Usage Limits</h3>
              <p>Set daily timers for distracting applications.</p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="developers">
          <h2>Meet the Developer</h2>
          <p>
            Designed and developed with passion by <strong>Swayam Prakash Macharla</strong>.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
