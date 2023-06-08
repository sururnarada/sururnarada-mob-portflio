import React from 'react';
import './Testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

//import swiper core and required moduls
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper style
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia iure nostrum quia id, molestiae eius provident. A suscipit dolore culpa fuga alias delectus, vitae amet dolores perspiciatis voluptatem! Aspernatur est dolorum ut facere.',
  },
  {
    avatar: AVTR2,
    name: 'Dynda alexandria',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia iure nostrum quia id, molestiae eius provident. A suscipit dolore culpa fuga alias delectus, vitae amet dolores perspiciatis voluptatem! Aspernatur est dolorum ut facere.',
  },
  {
    avatar: AVTR3,
    name: 'Fuzy Aleza',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia iure nostrum quia id, molestiae eius provident. A suscipit dolore culpa fuga alias delectus, vitae amet dolores perspiciatis voluptatem! Aspernatur est dolorum ut facere.',
  },
  {
    avatar: AVTR4,
    name: 'rirra yosephia',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia iure nostrum quia id, molestiae eius provident. A suscipit dolore culpa fuga alias delectus, vitae amet dolores perspiciatis voluptatem! Aspernatur est dolorum ut facere.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        //instal swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
