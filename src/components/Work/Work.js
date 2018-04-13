import React, { Component } from 'react';

import earny from '../../assets/images/earny.png';
import echo from '../../assets/images/echo.png';
import invoca from '../../assets/images/invoca.png';
import benny from '../../assets/images/benny.png';
import ucsb from '../../assets/images/ucsb.png';
import sbhacks from '../../assets/images/sbhacks.png';
import botball from '../../assets/images/botball.png';
import iseclab from '../../assets/images/iseclab.jpg';

import classes from './Work.css';

class work extends Component {
  state = {
    jobs: [
      {
        image: earny,
        company: 'Earny',
        companyUrl: 'https://www.earny.co',
        position: 'Full Stack Engineer',
        what: `Earny gets you money back on purchases automatically.`,
        learned: `How to scale a product to millions of users. How to build extremely fast.
          How to maintain a stellar culture. How to manage large areas of a codebase.`
      },
      {
        image: echo,
        company: 'Echo',
        companyUrl: 'https://play.google.com/store/apps/details?id=com.ivecho.echo&hl=en',
        position: 'Co-founder & CTO',
        what: `Echo connects communities for houses, apartments, and neighborhoods.`,
        learned: `How to build extremely fast. How to build an entire codebase myself.
          How to discover a market.`
      },
      {
        image: invoca,
        company: 'Invoca',
        companyUrl: 'https://www.invoca.com',
        position: 'Full Stack Engineer',
        what: 'Invoca allows marketers to drive inbound phone calls and turn them into sales.',
        learned: `How to develop using TDD. How to work with a large legacy codebase.
        How to follow an expert dev process.`
      },
      {
        image: benny,
        company: 'Benedict',
        companyUrl: 'https://capstone.cs.ucsb.edu/team_docs_15/posters/StructByLightning.pdf',
        position: 'Team Leader & Full Stack Engineer',
        location: 'Santa Barbara, CA',
        what: 'Benedict is a smart assistant for virtual meetings',
        learned: `How to build a tech startup. How to manage a team.
        How to build a fully functional product in 6 months. How to do Agile development.`
      },
      {
        image: ucsb,
        company: 'UCSB',
        companyUrl: 'https://www.youtube.com/watch?v=-yMS-z--1zE',
        position: 'B.S. in Computer Science, awarded in June 2015',
        what: 'The Best UC in the UC system.',
        learned: `How to learn. How to grow constantly.
          How to balance a social life, work, and extracurriculars. How to party.`
      },
      {
        image: sbhacks,
        company: 'SB Hacks',
        companyUrl: 'https://www.sbhacks.com/',
        position: 'Co-founder',
        what: 'SB Hacks is a hackathon in which engineers and makers build projects for a weekend.',
        learned: `How to manage 20+ team members. How to delegate.
        How to sell. How to run an event for 500+ attendees.`
      },
      {
        image: iseclab,
        company: 'iSeclab',
        companyUrl: 'https://iseclab.org/',
        position: 'Research Intern',
        what: 'The International Security Lab researches web security, malware, and cybercrime.',
        learned: `How to read research papers. How to work on a research team. How to solve problems you cannot google.`
      },
      {
        image: botball,
        company: 'NHHS Robotics Team',
        companyUrl: 'https://www.youtube.com/watch?v=RTQDY6k-yR8',
        position: 'Co-founder',
        what: 'The NHHS Robotics team competes in an autonomous robotics competition.',
        learned: 'How to build a team. How to raise money. How to compete internationally. How to win.'
      },
    ]
  }


  render() {

    let work = null
    work = this.state.jobs.map(job => {
      return (
        <div
          key={job.company}
          image={job.image}
          company={job.company}
          position={job.position}
          location={job.location}
          what={job.what}
          how={job.how}
          learned={job.learned}
          companyUrl={job.companyUrl}>
          {job.company}
        </div>

      )
    })
    return (
      <div className={classes.Work}>
        <div className={classes.Row}>
          <p className={classes.Description}>Here's some projects I've done.</p>
        </div>
        <div className={classes.Projects}>
          {work}
        </div>
      </div>
    )
  }
}

export default work;
