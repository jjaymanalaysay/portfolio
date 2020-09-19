import React from 'react'
import customer from '../images/customer-dash.jpg'
import dash from '../images/dash.jpg'
import ecom from '../images/ecom.jpg'

export default function Projects() {
    return (
      <>
        <section id="projects" className="section1">
          <h3>Projects</h3>
          <p>"The best way to predict the future, is to create it"</p>
          <p> ~ Peter Drucker</p>
          <div className="post-wrapper">
            <div>
              <div className="post">
                <img className="thumbnail" src={dash} alt="dashpic" />
                <div className="post-preview">
                  <h6 className="post-title">Project 1 / ReactJS</h6>
                  <p className="post-intro">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima, tenetur!
                  </p>
                  <button>
                    <a href="https://github.com/jjaymanalaysay">
                      <i className="fab fa-github"></i>Github
                    </a>
                  </button>
                  <button>
                      <i className="fa fa-globe"></i>Website
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <img className="thumbnail" src={ecom} alt="ecom" />
                <div className="post-preview">
                  <h6 className="post-title">Project 2 /</h6>
                  <p className="post-intro">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa, harum.
                  </p>
                  <button>
                    <a href="https://github.com/jjaymanalaysay">
                      <i className="fab fa-github"></i>Github
                    </a>
                  </button>
                  <button>
                      <i className="fa fa-globe"></i>Website
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <img className="thumbnail" src={customer} alt="customer" />
                <div className="post-preview">
                  <h6 className="post-title">Project 3 / </h6>
                  <p className="post-intro">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor, odit?
                  </p>
                  <button>
                    <a href="github.com/jjaymanalaysay">
                      <i className="fab fa-github"></i>Github
                    </a>
                  </button>
                  <button>
                      <i className="fa fa-globe"></i>Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
