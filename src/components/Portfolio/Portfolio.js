import React from "react";
import fullstack from "../../assets/svg/fullstack.svg";
import github from "../../assets/images/github.png";
import githubicon from "../../assets/svg/github.svg";
import facebookicon from "../../assets/svg/facebook.svg";
import "./portfolio.scss";

const Portfolio = ({ user }) => {
  return (
    <div className="portfolio-wrapper">
      <img
        className="img-portfolio"
        src="https://drive.google.com/uc?export=view&id=1Hjc0RohMl-HyywXlOjPkpjWbOi-Gqum9"
        alt="GitHub"
      />
      <div className="row-container portfolio-card">
        <div className="portfolio-card-header">
          <div className="row-container">
            <div className="portfolio-icon-flex">
              <img
                className="portfolio-fullstack"
                src={fullstack}
                alt="fullstack"
              />
            </div>
            <div className="col-9">
              <h2>@{user?.UserName}</h2>
              <p>{user?.Employee?.Position?.PositionName}</p>
            </div>
          </div>
        </div>
        <div className="portfolio-card-body">
          <img className="img-portfolio-background" src={github} alt="GitHub" />
        </div>
        <div className="portfolio-card-footer">
          <h1>5</h1>
          <p>Post uploaded</p>
          <div className="portfolio-social-media">
            <div style={{ display: "flex", gap: "10px" }}>
              <a href={user?.Employee?.Github} target="_blank" rel="noreferrer">
                <img
                  className="portfolio-social-media-icon"
                  src={githubicon}
                  alt="github"
                />
              </a>
              <a
                href={user?.Employee?.Facebook}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="portfolio-social-media-icon"
                  src={facebookicon}
                  alt="facebook"
                />
              </a>
            </div>
            <div>
              <p
                style={{
                  color: "white",
                  margin: "0px",
                }}
              >
                dichvucodethue.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
