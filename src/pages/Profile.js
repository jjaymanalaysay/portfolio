import React from 'react'
import profpic from '../images/profpic.jpg'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
export default function Profile() {
    return (
      <>
        <div id="/profile" className="section2">
          <div className="intro-wrapper">
            <div className="left-column">
              <img id="profile_pic" src={profpic} alt="profpic" />
              <Button>
                <a href="/contact">
                  <i className="fa fa-envelope"></i>&nbsp;Message Me
                </a>
              </Button>
              <Button variant="primary">
                <a href="https://github.com/jjaymanalaysay/portfolio">
                  <i className="fab fa-github"></i>Github
                </a>
              </Button>
              <Button>
                <a>
                  <i className="fa fa-user"></i>CV
                </a>
              </Button>
            </div>
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>A Web Developer</h3>
                <p>Name: John Joseph Manalaysay</p>
                <p>Age: 24</p>
                <p>Gender: Male</p>
                <p>Location: Bulacan,Philippines</p>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
            <div className="right-column">
              <Jumbotron>
              <p>
                I am an entry web developer. Graduated from Zuitt Bootcamp and
                also a self-taught developer. I love structure and order and I
                also stand for quality. I love spending time on fixing little
                details and optimizing web apps.
              </p>
              <p>
                I am hooked to programming because of games, I love playing but
                I am so impressed on guide, database, and tutorial websites
                which helps you progress through the games so I decided to be
                one of those creators.
              </p>
              </Jumbotron>
            </div>
          </div>
        </div>
      </>
    );
}
