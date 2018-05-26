import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import ".//Home.css";

const Home = () => {
  return (
    <Fragment>
      <main>
        <Animated animationIn="bounce" isVisible={true}>
          <div className="Home-Title-Wrapper">
            <h1 className="Home-Title">Simple Post Creator - React.js</h1>
            <nav className="Main-Nav">
              <Link to="/new" className="Main-Nav-Link">
                New Post 
              </Link>
                -
              <Link to="/posts" className="Main-Nav-Link">
                Posts
              </Link>
            </nav>
          </div>
        </Animated>
      </main>
    </Fragment>
  );
};

export default Home;
