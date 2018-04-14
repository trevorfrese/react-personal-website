import React, { Component } from 'react';

import ben from '../../assets/images/ben.jpg';
import richard from '../../assets/images/richard.jpg';
import elon from '../../assets/images/elon.png';
import tim from '../../assets/images/tim.png';
import claudia from '../../assets/images/claudia.jpg';
import celeste from '../../assets/images/celeste.jpeg';
import kevin from '../../assets/images/kevin.jpg';
import anshul from '../../assets/images/anshul.jpg';

import classes from './Mentors.css';

import Mentor from './Mentor/Mentor';

class mentors extends Component {
  state = {
    mentors: [
      {
        image: ben,
        name: 'Benjamin Franklin',
        url: 'https://en.wikipedia.org/wiki/Benjamin_Franklin',
        job: 'Renaissance Man',
        bio: `Franklin was an author, scientist, inventor,
        humorist, civic activist, and founding father. His intense focus on
        self-improvement is what makes him an excellent role model.`
      },
      {
        image: richard,
        name: 'Richard Feynman',
        url: 'https://en.wikipedia.org/wiki/Richard_Feynman',
        job: 'Physicist',
        bio: `Feynman was a hilarious physicist. His ability to explain
        dense theoretical concepts in layman terms is something to aspire to.`
      },
      {
        image: elon,
        name: 'Elon Musk',
        url: 'https://en.wikipedia.org/wiki/Elon_musk',
        job: 'Visionary',
        bio: `Elon Musk is the single greatest visionary in our time.
        He repeatedly does the impossible, and has built companies
        around solving the world's most pressing problems.`
      },
      {
        image: tim,
        name: 'Tim Sherwood',
        url: 'https://www.cs.ucsb.edu/~sherwood/',
        job: 'UCSB CS Researcher and Lecturer',
        bio: `Tim was my teacher and advisor at UCSB. His advice has been
        invaluable and his ability to teach dense CS topics while making the concepts
        interesting and funny is something to aspire to.`
      },
      {
        image: claudia,
        name: 'Claudia Tyler',
        url: 'http://www.es.ucsb.edu/people/claudia-tyler',
        job: 'UCSB Bio Researcher and Lecturer',
        bio: `Claudia was my teacher at UCSB and cheerfully explained all of
        the beauty of the natural world in accessible scientific terms.`
      },
      {
        image: celeste,
        name: 'Celeste Young',
        url: 'https://www.celesteyoung.com/',
        job: 'Meditation Teacher',
        bio: `Celeste is the wisest person I've met in my entire life,
        and has an abundance of empathy and compassion.`
      },
      {
        image: kevin,
        name: 'Kevin Malta',
        url: 'https://www.linkedin.com/in/kevin-malta/',
        job: 'Software Engineer',
        bio: `Kevin is my best friend and is as hell bent on
        self improvement as me. We constantly try to challenge and inspire each other to do better.`
      },
      {
        image: anshul,
        name: 'Anshul Jain',
        url: 'https://www.linkedin.com/in/anshul-jain-0a0b6923/',
        job: 'Software Engineer',
        bio: `Anshul is one of my best friends who has already sold a company at 24,
        and has the greatest insights on life in general.`
      },
    ]
  }


  render() {
    let mentors = null
    mentors = this.state.mentors.map(mentor => {
      return (
        <Mentor
          key={mentor.company}
          image={mentor.image}
          name={mentor.name}
          url={mentor.url}
          job={mentor.job}
          bio={mentor.bio}
        />
      )
    })

    return (
      <div>
        <p className={classes.Description}>Here are some of my role models.</p>
        <div className={classes.Mentors}>
          {mentors}
        </div>
      </div>
    );
  }
}

export default mentors;
