import React from 'react';

const Achievements = () => {
  return (
    <div className="container">
      <main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

        <nav class="navbar">
          <a class="navbar-item" href="/">
            <i class="fas fa-home"></i> Home
          </a>
          <a class="navbar-item" href="/Profile">
            <i class="fa-solid fa-user"></i> Profile
          </a>
          <a class="navbar-item" href="/Skills">
            <i class="fa-solid fa-gear"></i> Skills
          </a>
          <a class="navbar-item active" href="/Achievements">
            <i class="fa-solid fa-trophy"></i> Achievements
          </a>
        </nav>

        <h1>Achievements</h1>
        <ul class="info-box">
            <li class="info-box-item">Country: Malaysia</li>fl
          </ul>
      </main>
    </div>
  );
};

export default Achievements;
