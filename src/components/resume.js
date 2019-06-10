import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                className="avatar-img"
                src="https://pbs.twimg.com/profile_images/802971570226470912/T_HDpa6g_400x400.jpg"
                alt="avatar"
                style={{ height: '250px', marginTop: '5em'}}
              />
            </div>

            <h2 style={{ paddingTop: '1em' }}>Aaron Madved</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #aaccff', width: '50%' }} />
            <p>Programming has become my life. Allowing me to create clean functional code to help solve problems all over the world. A passion that has took me on a journey to see, meet, and work with people from many different places. This in it of itself has created further passion for experiencing cultures, sharing ideas, and inspiring people through my work and passion. So let's hack the world.</p>
            <hr style={{ borderTop: '3px solid #ccaaff', width: '50%' }} />
            <h5>Address</h5>
            <p>Auf den Blocken, Hamburg Germany 2025035</p>
            <h5>Phone</h5>
            <p>(330) 597-0610</p>
            <h5>Email</h5>
            <p>aaronmadved@gmail.com</p>
            <h5>Github</h5>
            <p>https://github.com/madgrid</p>
            <hr style={{ borderTop: '3px solid #aaffaa', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2016}
              schoolName="Kent State University"
              schoolDescription="My bachelors for Application Development learned about server maintenance, dev operations, and web scripting languages."
            />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Kent State Univeristy"
              schoolDescription="Focusing on python, data mining, machine learning, and development operations. Pertaining more to the technical operations with in computer science."
            />
            <hr style={{ borderTop: '3px solid #aadddd' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={'Present'}
              jobTitle="FRONTEND ENGINEER | ANGULAR & DOCKER & VUE"
              jobName="li-x GmBh"
              jobLocation="Hamburg Germany"
              jobDescription="Built an entire Software Exchange from the group up using the Angular framework. Engineered API's using express, and maintained docker clients to handle the frontend, API, mySql, and nginx."
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobTitle="FULLSTACK DEVELOPER | NODE & ANGULAR"
              jobName="Viewfin/Metaverse"
              jobLocation="Shanghai China"
              jobDescription="Developed many solutions to enormous enterprise infrastructures. Specifically, I was the main developer for two digital currency exchanges. Tasks included building the entire front-end with Angular to maintaining express API's and handling the graph libraries on RightBTC. One of the initial developers for Metaverse foundation and created application such as the Metaverse Light Wallet (SPV), Metaverse Explorer, and much more.."
            />
            <hr style={{ borderTop: '3px solid #aaeecc' }} />
            <h2>Skills</h2>
            <Skills
              skill="Javascript"
              progress={100}
            />
            <Skills
              skill="Typescript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="Angular"
              progress={80}
            />
            <Skills
              skill="React"
              progress={70}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />
            <Skills
              skill="Docker"
              progress={25}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
