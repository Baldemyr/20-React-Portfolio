import React from 'react';
import IMG1 from '../../assets/Event-Finder.png';
import IMG2 from '../../assets/4-Code-Quiz.png';
import IMG3 from '../../assets/Day_Scheduler.png';
import IMG4 from '../../assets/14tech.png';
import IMG5 from '../../assets/Greenify.png';
import IMG6 from '../../assets/Coming_Soon.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Toronto Event Finder',
      img: IMG1,
      link: 'https://benbasic.github.io/Toronto-Event-Finder/',
      github: 'https://github.com/BenBasic/Toronto-Event-Finder.git',
    },
    {
      id: 2,
      title: 'Tech Blog',
      img: IMG4,
      link: 'https://techblog14homework.herokuapp.com/',
      github: 'https://github.com/Baldemyr/14-MVC-Blog.git',
    },
    {
      id: 3,
      title: 'Web API Code Quiz',
      img: IMG2,
      link: 'https://baldemyr.github.io/4-Web-API-Code-Quiz/',
      github: 'https://github.com/Baldemyr/4-Web-API-Code-Quiz.git',
    },
    {
      id: 4,
      title: 'Day Scheduler',
      img: IMG3,
      link: 'https://baldemyr.github.io/5-Work-Day-Scheduler/',
      github: 'https://github.com/Baldemyr/5-Work-Day-Scheduler.git',
    },
    {
      id: 5,
      title: 'Greenify Your WOrld',
      img: IMG5,
      link: 'https://greenifywiki.herokuapp.com/',
      github: 'https://github.com/JamesF905/greenify.git',
    },
    {
      id: 6,
      title: 'Movie FInder',
      img: IMG6,
      link: 'none',
      github: 'https://github.com/Baldemyr/Movie-Finder-App.git',
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio