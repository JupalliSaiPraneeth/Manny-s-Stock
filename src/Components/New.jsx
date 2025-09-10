import React from "react";
import Sunshine from "../assets/sunshine.jpg";

// eslint-disable-next-line react-refresh/only-export-components
const New = ()=> {
    return(
        <div className="trending">
            
            <div className="box box5">
                    <h2 className="story-title">Me and the Sunshine!</h2>
                    <a href="https://www.wattpad.com/story/401313025?utm_source=android&utm_medium=link&utm_content=share_reading&wp_page=reading&wp_uname=MrManny5" target="_blank" rel="noopener noreferrer">
                      <img className="cover-pic" src={Sunshine} alt="Sunshine" />
                    </a>
                  </div>
        </div>
    );
};

export default New;
