import React from "react";
import "./Main.css";
import girl from "../assets/girl.jpg"
const Main = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="vertical"></div>
        <div className="first_main">
          <div className="lorem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            eligendi commodi possimus similique! Maxime quod id nam odit
            dignissimos veniam voluptates molestiae incidunt, harum, accusamus
            eaque maiores fugit dicta nesciunt rerum rem!
          </div>
          <div className="inner_main">
            <button>Donate Now</button>
            <button>click</button>
          </div>
        </div>
        <div className="second_main">
          <div className="image-container">
            <img src={girl} alt="" />
          </div>
          <div/>
        </div>
      </div>
      <div className="socials">
        {/* Add some content or data for your socials here */}
        <p>Random social content</p>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Main;
