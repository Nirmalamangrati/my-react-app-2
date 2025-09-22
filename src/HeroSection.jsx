import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section">
    <h1>Download YTS YIFY movies: HD smallest size</h1>
    <p>
      Welcome to the official YTS.MX website. Here you can browse and download YIFY movies in excellent
      720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
    </p>
    <p className="important">
      <b>IMPORTANT -</b> <span className="blue">YTS.MX is the only new official domain for YIFY Movies</span>
    </p>
    <div className="social-links">
      <a href="#">🟦 @YTSMX_UPDATES</a>
      <a href="#">🐦 @YTSYIFY</a>
      <a href="#">📧 @ytsyify</a>
    </div>
    <div className="actions">
      <span className="popular"><span className="star">★</span> Popular Downloads</span>
      <a className="featured" href="#"><span role="img" aria-label="rss">📰</span> more featured...</a>
    </div>
  </section>
);

export default HeroSection;
