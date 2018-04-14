import React, { Component } from 'react';

import earny from '../../assets/images/earny.png';
import echo from '../../assets/images/echo.png';
import invoca from '../../assets/images/invoca.png';
import benny from '../../assets/images/benny.png';
import ucsb from '../../assets/images/ucsb.png';
import sbhacks from '../../assets/images/sbhacks.png';
import botball from '../../assets/images/botball.png';
import iseclab from '../../assets/images/iseclab.jpg';

import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';

import Project from './Project/Project';


import classes from './Work.css';

class work extends Component {
  state = {
    modal: '',
    showModal: false,
    jobs: [
      {
        image: earny,
        company: 'Earny',
        companyUrl: 'https://www.earny.co',
        position: 'Full Stack Engineer',
        what: `Earny gets you money back on purchases automatically.`,
        description: `Earny tracks all your purchases, and if the price goes down AFTER you buy something he automatically gets you your money back.
        I was the 2nd employee here and learned how to scale a product to millions of users, how to build extremely fast,
        how to maintain a stellar culture, and how to manage large areas of a codebase.`,
        stack: `Node.js, Angular, SQL Server, Redis, Azure`
      },
      {
        image: echo,
        company: 'Echo',
        position: 'Co-founder & CTO',
        what: `Echo connects communities for houses, apartments, and neighborhoods.`,
        description: `My co-founder and I built a social media startup. In 6 months I learned how to go from an idea to a real product, and how to find product/market fit.
        I built the entire codebase myself, did the graphics design, user testing, and sales / marketing.`,
        stack: `Node.js, Angular, Ionic, Firebase, Rails`
      },
      {
        image: invoca,
        company: 'Invoca',
        companyUrl: 'https://www.invoca.com',
        position: 'Full Stack Engineer',
        what: 'Invoca allows marketers to drive inbound phone calls and turn them into sales.',
        description: `Invoca is where I cut my teeth on software engineering. I learned how to develop using TDD, how to work with a large codebase, and
        how to follow an expert dev process.`,
        stack: `Rails, Javascript, Redis`
      },
      {
        image: benny,
        company: 'Benedict',
        companyUrl: 'https://capstone.cs.ucsb.edu/team_docs_15/posters/StructByLightning.pdf',
        position: 'Team Leader & Full Stack Engineer',
        location: 'Santa Barbara, CA',
        what: 'Benedict is a smart assistant for virtual meetings.',
        description: `I was team lead for my capstone project with my best friends. We won 1st place for our platform "Benedict",
        a smart assistant integrated into virtual conference meetings.`,
        stack: `Rails, Javascript, Redis, Flask, ML`
      },
      {
        image: ucsb,
        company: 'UCSB',
        position: 'B.S. in Computer Science, awarded in June 2015',
        what: 'The Best UC in the UC system.',
        description: `I love UCSB. It's the best school in the world and it helped me grow and become more well rounded.
        Also it's the most beautiful place ever.`
      },
      {
        image: sbhacks,
        company: 'SB Hacks',
        companyUrl: 'https://www.sbhacks.com/',
        position: 'Co-founder',
        what: 'SB Hacks is a hackathon in which engineers and makers build projects for a weekend.',
        description: `I co-founded UCSB's first ever hackathon, SB Hacks. We managed 20+ team members,
        raised over $100,000 for the event, and ran an event for 500+ attendees for 36 hours. This was my first real 'start-up' experience.`
      },
      {
        image: iseclab,
        company: 'iSeclab',
        companyUrl: 'https://iseclab.org/',
        position: 'Research Intern',
        what: 'The International Security Lab researches web security, malware, and cybercrime.',
        description: `I worked as an intern for 2 summers at the Security Lab at UCSB.
        I learned how to read research papers and contribute in a meaningful way in a research setting.`
      },
      {
        image: botball,
        company: 'NHHS Robotics Team',
        position: 'Co-founder',
        what: 'The NHHS Robotics team competes in an autonomous robotics competition.',
        description: `In high school, I co-founded a robotics team that competed and won internationally,
        with robots that fully autonomously performed complicated tasks.`
      },
    ]
  }

  closeModal = () => {
      this.setState({showModal: false});
  }

  openModal = (index) => {
    const job = this.state.jobs[index]
    const modal = <Project
      company={job.company}
      companyUrl={job.companyUrl}
      what={job.what}
      learned={job.learned}
      stack={job.stack}
      position={job.position}
      description={job.description}
    />
    this.setState({
      showModal: true,
      modal,
    });
  }

  render() {

    let work = null
    work = this.state.jobs.map((job, index) => {
      return (
        <div
          onClick = {() => this.openModal(index)}
          className={classes.Project}
          key={index}>
          <img className={classes.Image} src={job.image} alt="" />
        </div>

      )
    })
    return (
      <Aux>
        <Modal
        show={this.state.showModal}
        modalClosed={this.closeModal}>
          {this.state.modal}
        </Modal>
        <div className={classes.Work}>
          <p className={classes.Description}>Here are some projects I'm proud of.</p>
          <div className={classes.Projects}>
            {work}
          </div>
        </div>
      </Aux>
    )
  }
}

export default work;
