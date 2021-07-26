import React from 'react';
import './App.css';

function App() {
  const intro = "BoSo Company"
  const text1 = "Semper fidelis"
  const text2 = "Bzdura"

  const user_face = require("./img/default_user.jpg").default;
  const user_face2 = require("./img/default_user.jpg").default;

  return (
    <main>

      <div className="header">
      <div className="intro">
      {intro}
      </div>
      </div>
      <div className="personal-container">
        <div className="person-one">
          <div className="photo">
            <img className="person-img" src={user_face}/>

          </div>
          <div className="personal-info">

          </div>
          <div className="personal-bar">

          </div>
        </div>
        <div className="person-two">
          <div className="photo">
          <img className="person-img" src={user_face2}/>
          </div>
          <div className="personal-info">

          </div>
          <div className="personal-bar">
            
          </div>
        </div>





        
        

      </div>
    

      </main>)
  }

export default App;
