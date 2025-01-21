// components
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { RiMailLine, RiPhoneLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <div className='min-h-screen bg-primary/30 py-32 flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>

          {/* Contact Info Boxes */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-[800px]'
          >
            {/* Email Box */}
            <div className='bg-white/5 rounded-lg p-8 backdrop-blur-sm flex items-center justify-center gap-4 group hover:bg-white/10 transition-colors duration-300'>
              {/* <RiMailLine className='text-3xl text-accent' /> */}
              <div className='text-center'>
                <h3 className='text-xl font-semibold mb-2'>Email</h3>
                <a
                  href='mailto:sahil.ek@gmail.com'
                  className='text-white/80 hover:text-accent transition-colors duration-300'
                >
                  sahil.ek@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Box */}
            <div className='bg-white/5 rounded-lg p-8 backdrop-blur-sm flex items-center justify-center gap-4 group hover:bg-white/10 transition-colors duration-300'>
              {/* <RiPhoneLine className='text-3xl text-accent' /> */}
              <div className='text-center'>
                <h3 className='text-xl font-semibold mb-2'>Phone</h3>
                <a
                  href='tel:+918073736241'
                  className='text-white/80 hover:text-accent transition-colors duration-300'
                >
                  +91 807 373 6241
                </a>
                <br/>
                <a
                  href='tel:+918129638039'
                  className='text-white/80 hover:text-accent transition-colors duration-300'
                >
                  +918129638039
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto text-center'
          >
            Thank you for visiting my portfolio. I'm currently exploring new opportunities.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
