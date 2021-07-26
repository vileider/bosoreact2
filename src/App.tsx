import React from 'react';
import './App.css';

function App() {
  const intro = "BoSo Company"
  const text1 = "Semper fidelis"
  const text2 = "Bzdura"

  const default_text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minima ullam? Tempora minima, dolorem eligendi maiores expedita rem quod dignissimos natus! Nisi sed, molestiae voluptatum in minima accusamus autem fugit."
  const user_face = require("./img/default_user.jpg").default;
  const user_face2 = require("./img/default_user.jpg").default;

  return (
    <main>
      <div className="personal-container">
        <div className="person-one">
          <div className="photo">
            <img className="person-img" src={user_face}/>

          </div>
          <div className="personal-info">
            {default_text}
          </div>
          <div className="personal-bar">
            bar

          </div>
        </div>
        <div className="logotype">
          logo
        </div>


        <div className="person-two">
          <div className="photo">
          <img className="person-img" src={user_face2}/>
          </div>
          <div className="personal-info">
            {default_text}
          </div>
          <div className="personal-bar">
            bar
          </div>
        </div>

      </div>
      <div className="footer">
        logo/contact us/ yt-fb-tweeter
      </div>
    

      </main>)
  }

export default App;
