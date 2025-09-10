/* eslint-disable no-unused-vars */
import React from "react";
// import Header from "./Components/Header.jsx";
import "./App.css";
import ProfileCard from "./Components/ProfileCard.jsx";
import StoryGrid from "./Components/StoryGrid.jsx";

// const storiesData = [
//   {
//     id: 1,
//     title: 'Buttabomma',
//     author: 'Manoj',
//     cover: 'https://placehold.co/300x400/7B68EE/FFFFFF?text=Buttabomma',
//     // eslint-disable-next-line no-undef
//     content: Buttabomma,
//   },
//   {
//     id: 2,
//     title: 'Dance With Ghost',
//     author: 'Manoj',
//     cover: 'https://placehold.co/300x400/FFA07A/FFFFFF?text=DanceWithGhost',
//     // eslint-disable-next-line no-undef
//     content: DanceWithGhost,
//   },
//   {
//     id: 3,
//     title: 'Blue Boy',
//     author: 'Manoj',
//     cover: 'https://placehold.co/300x400/20B2AA/FFFFFF?text=BlueBoy',
//     // eslint-disable-next-line no-undef
//     content: BlueBoy,
//   },
//   {
//     id: 4,
//     title: 'Kill Me Softly',
//     author: 'Manoj',
//     cover: 'https://placehold.co/300x400/DC143C/FFFFFF?text=KillMeSoftly',
//     // eslint-disable-next-line no-undef
//     content: KillMeSoftly,
//   },
//    {
//     id: 5,
//     title: 'If God Exists',
//     author: 'Manoj',
//     cover: 'https://placehold.co/300x400/66e0FF/FFFFFF?text=If God Exists',
//     // eslint-disable-next-line no-undef
//     content: IfGodExists,
//   },
// ];

function App() {
  return(
   <div className="home-container">
       <div className="home-page">
     <div className="home_title">
            <h1 className="title-name">Manny's Stock</h1>
      </div>
    
      <hr />
      <ProfileCard/>
      <StoryGrid/>
    </div>
   </div>
  );
}

export default App;
