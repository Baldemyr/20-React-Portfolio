import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/joanne-barker-8046b757/',
      name: 'Joanne Barrker',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: 'Andrew learns new skills quickly and enjoys working with a group to get things done',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/andrew-cryer-b863a723b/',
      name: 'Goggles Pizanno',
      role: 'Race Car driver from the Flinstones',
      test: "Seems like a good guy but he isnt much of a stone age racecar driver",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/andrew-cryer-b863a723b/',
      name: 'Pickles Macgruber',
      role: 'Pickle Sommelier',
      test: 'Good guy! Likes pickles',
    },


  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials