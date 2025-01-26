import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'

// icons
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          id: 'phoenix-mall',
          title: 'Phoenix Mall of Asia',
          path: '/moa.png',
          link: 'https://phoenixmallofasia.com/'
        },
        {
          id: 'smartapp',
          title: 'Smartapp',
          path: '/smartapp1.png',
          link: 'https://smartapp.com/',
        },
        {
          id:'maxwell',
          title: 'Maxwell GeoSystems',
          path: '/maxwell.png',
          link: 'https://www.maxwellgeosystems.com/',
        },
        {
          id:'staples',
          title: 'STAPLES',
          path: '/staples.png',
          link: 'https://www.staplescoworking.com/',
        },
      ],
    },
    {
      images: [
        {
          id:'digital',
          title: 'DIGITAL ECOMMERCE',
          path: '/digital.png',
          link: 'https://digital-ecommerce-neon.vercel.app/',
        },
        {
          id:'stay-hopper',
          title: 'STAY HOPPER',
          path: '/hopper.png',
          link:'https://www.stayhopper.com/',
        },
        {
          id:'chicking',
          title: 'CHICKING',
          path: '/chicking.png',
          link:'https://web.chicking.app/',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1 ,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className='h-[480px] sm:h-[600px] xl:h-[480px] rounded-lg overflow-hidden'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 sm:grid-cols-2 gap-4 cursor-pointer md:h-full'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className='relative rounded-lg overflow-hidden group'
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group aspect-[4/3]'>
                      {/* image */}
                      <Image
                        src={image.path}
                        fill
                        alt={image.title}
                        className='object-cover object-left object-center group-hover:scale-105 transition-transform duration-500'
                      />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute inset-0 flex flex-col justify-center items-center translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                        <h4 className='md:text-xl font-bold mb-2 text-white'>{image.title}</h4>
                        <Link
                          href={`/work/${image.id}`}
                          className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] uppercase'
                        >
                          <span className='delay-100 font-bold md:text-md text-sm'>View Project</span>
                          <BsArrowRight className='text-xl' />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
