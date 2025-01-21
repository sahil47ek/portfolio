import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data

// service data
export const serviceData = [
  
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'From wireframing and prototyping to implementing pixel-perfect front-end designs using Next.js, React.js, and TailwindCSS, I focus on aesthetics, usability, and responsiveness. ',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'I provide high-quality front-end development services, building fast, responsive, and scalable web applications using Next.js, React.js, and TailwindCSS. ',
  },
  {
    icon: <RxCrop />,
    title: 'Responsive Design',
    description: 'I specialize in responsive web design, ensuring that websites look stunning and function flawlessly across all devices, from desktops to smartphones. ',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'I offer professional copywriting services to create compelling, clear, and engaging content tailored to your brand’s voice. ',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'I provide SEO optimization services to enhance your website’s visibility and improve search engine rankings. ',
  },
  {
    icon: <RxRocket />,
    title: 'Debugging',
    description: 'I offer expert debugging services to identify, troubleshoot, and resolve issues in your web applications efficiently.',
  },
  {
    icon: <RxRocket />,
    title: 'Testing',
    description: 'I provide comprehensive testing services to ensure your web applications are reliable, bug-free, and perform flawlessly across all devices and browsers. ',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-72 rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              {/* <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
