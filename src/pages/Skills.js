import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Skills() {
    return (
    <div id="skills" class="section2">
        <div class="skills-wrapper">
                <div>
                <h2>Skills</h2>

                </div>
                <h5>Fullstack developer focusing on Front-End Development</h5>
                <hr/>
                    <ListGroup>
                        <ListGroup.Item>HTML / HTML 5</ListGroup.Item>
                        <ListGroup.Item>CSS / CSS 3</ListGroup.Item>
                        <ListGroup.Item>Javascript</ListGroup.Item>
                        <ListGroup.Item>React JS</ListGroup.Item>
                        <ListGroup.Item>BootStrap 4</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>Node JS</ListGroup.Item>
                        <ListGroup.Item>ExpressJS</ListGroup.Item>
                        <ListGroup.Item>REST API</ListGroup.Item>
                        <ListGroup.Item>Next JS</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item>Git / Version Control</ListGroup.Item>
                        <ListGroup.Item>Photoshop</ListGroup.Item>
                        <ListGroup.Item>Microsoft Office</ListGroup.Item>
                        <ListGroup.Item>Figma</ListGroup.Item>
                        <ListGroup.Item>Command Line Interface</ListGroup.Item>
                    </ListGroup>

                    <hr/>
                <div>
                    <p>Check my Projects at:</p>
                    <button><a href="#"><i class="fab fa-github"></i>Github</a></button>
                    <button><a href="#"><i class="fab fa-gitlab"></i>Gitlab</a></button>
                </div>
            </div>
        </div>
    )
}
