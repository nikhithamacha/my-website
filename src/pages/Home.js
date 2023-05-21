import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../components/styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello there, this is Nikhitha</h2>
        <div className="prompt">
          <p>Ambitious computer science student excited to contribute to cutting-edge advancements and make a difference in the tech industry.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
            ReactJS , HTML , CSS , BootStrap , ReactNative , JavaScript
            </span>
          </li>
          
          <li className="item">
            <h3>Languages</h3>
            <span>C , C++ , Python , JAVA , JavaScript , R </span>
          </li>

          <li className="item">
            <h3>Other-Skills</h3>
            <span>
              Data Strcutures and Algorithms , Competitve Coding , Object Oriented Programmming , Structure Oriented Programming , SQL Server
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;