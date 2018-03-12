import React, { Component } from 'react';

import earny from '../../../assets/images/earny.png';
import echo from '../../../assets/images/echo.png';
import invoca from '../../../assets/images/invoca.png';
import benny from '../../../assets/images/benny.png';
import ucsb from '../../../assets/images/ucsb.png';
import sbhacks from '../../../assets/images/sbhacks.png';

import classes from './Projects.css';

import Project from './Project/Project';

class projects extends Component {
  state = {
    jobs: [
      {
        image: earny,
        company: 'Earny',
        companyUrl: 'https://www.earny.co',
        position: 'Full Stack Engineer',
        location: 'Santa Monica, CA',
        description: `Earny gets you money back on purchases automatically.`,
      },
      {
        image: echo,
        company: 'Echo',
        companyUrl: '',
        position: 'Cofounder & CTO',
        location: 'Santa Barbara, CA',
        description: `As the technical cofounder, I was responsible for the entire codebase. We built a social media app that allows users to interact with
          locations and physical spaces the same way they would interact with people.`,
      },
      {
        image: invoca,
        company: 'Invoca',
        companyUrl: 'https://www.invoca.com',
        position: 'Full Stack Engineer',
        location: 'Santa Barbara, CA',
        description: `I learned the best practices of Ruby on Rails development and Agile so ware engineering at Invoca. Within my first month I made a contribution to the
          Rails framework. I worked across the Front End and Back End with a heavy emphasis on API integrations and security, and helped refactor our legacy
          authentication system.`,
      },
      {
        image: benny,
        company: 'Benedict',
        companyUrl: 'https://capstone.cs.ucsb.edu/team_docs_15/posters/StructByLightning.pdf',
        position: 'Team Lead & Full Stack Engineer',
        location: 'Santa Barbara, CA',
        description: ``,
      },
      {
        image: ucsb,
        company: 'UCSB',
        companyUrl: 'https://capstone.cs.ucsb.edu/team_docs_15/posters/StructByLightning.pdf',
        position: 'Computer Science B.S.',
        location: 'Santa Barbara, CA',
        description: ``,
      },
      {
        image: sbhacks,
        company: 'SB Hacks',
        companyUrl: 'https://www.sbhacks.com/',
        position: 'Cofounder',
        location: 'Santa Barbara, CA',
        description: ``,
      },
    ]
  }

  render() {

    let work = null
    work = this.state.jobs.map(job => {
      return (
        <Project
          key={job.company}
          image={job.image}
          company={job.company}
          position={job.position}
          location={job.location}
          description={job.description}
          companyUrl={job.companyUrl}
        />
      )
    })
    return (
      <div className={classes.Projects}>
        {work}
      </div>
    )
  }
}

export default projects;
