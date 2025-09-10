import React from "react";
import Buttabomma from "./Buttabomma.jpg";
import Ghost from "./Dance_ghost.jpg";
import Killme from "./Killme.jpg";
import Blue from "./Blueboy.jpg";
import Sunshine from "./sunshine.jpg";

const StoryGrid = () => {
  return (
    <div className="wrapper">
      <div className="box box1">
        <h2 className="story-title">Buttabomma</h2>
        <a href="https://www.wattpad.com/1555031226-rain-diaries-of-lost-love-buttabomma" target="_blank" rel="noopener noreferrer">
          <img className="cover-pic" src={Buttabomma} alt="Buttabomma" />
        </a>
      </div>

      <div className="box box2">
        <h2 className="story-title">Dance With Ghost</h2>
        <a href="https://www.wattpad.com/1558293761-rain-diaries-of-lost-love-dancing-with-a-ghost" target="_blank" rel="noopener noreferrer">
          <img className="cover-pic" src={Ghost} alt="Ghost" />
        </a>
      </div>

      <div className="box box3">
        <h2 className="story-title">Blue Boy</h2>
        <img className="cover-pic" src={Blue} alt="Blue Boy" />
      </div>

      <div className="box box4">
        <h2 className="story-title">Kill Me Softly</h2>
        <img className="cover-pic" src={Killme} alt="Kill Me Softly" />
      </div>

      <div className="box box5">
        <h2 className="story-title">Me and the Sunshine!</h2>
        <a href="https://www.wattpad.com/story/401313025?utm_source=android&utm_medium=link&utm_content=share_reading&wp_page=reading&wp_uname=MrManny5" target="_blank" rel="noopener noreferrer">
          <img className="cover-pic" src={Sunshine} alt="Sunshine" />
        </a>
      </div>
    </div>
  );
};

export default StoryGrid;
