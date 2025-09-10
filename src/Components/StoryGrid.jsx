import React from "react";
// eslint-disable-next-line no-unused-vars
import Buttabomma from "./Buttabomma.jpg";
import Ghost from "./Dance_ghost.jpg";
import kill from "./killme.jpg";
import Blue from "./Blueboy.jpg";
// eslint-disable-next-line no-unused-vars
import sunshine from "./sunshine.jpg";

const StoryGrid = ()=>{
  return(
    <div className="wrapper">
      <div className="box box1">
          <h2 className="story-title">Buttabomma</h2>
          <a href="https://www.wattpad.com/1555031226-rain-diaries-of-lost-love-buttabomma"><img className="cover-pic" src={Buttabomma} alt="butta" /></a>
      </div>
      <div className="box box2">
           <h2 className="story-title">DanceWithGhost</h2>
          <a href="https://www.wattpad.com/1558293761-rain-diaries-of-lost-love-dancing-with-a-ghost"><img className="cover-pic" src={Ghost} alt="ghost" /></a>
      </div>
      <div className="box box3">
            <h2 className="story-title">Blue Boy</h2>
          <img className="cover-pic" src={Blue} alt="boy" />
      </div>
      <div className="box box4">
             <h2 className="story-title">KillMe Softly</h2>
          <img className="cover-pic" src={kill} alt="killme" />
      </div>
      <div className="box box4">
             <h2 className="story-title">Me and the sunshine!</h2>
            <a href="https://www.wattpad.com/story/401313025?utm_source=android&utm_medium=link&utm_content=share_reading&wp_page=reading&wp_uname=MrManny5"><img className="cover-pic" src={sunshine} alt="killme" /></a>
      </div>
      
    </div>
  );
};

export default StoryGrid;