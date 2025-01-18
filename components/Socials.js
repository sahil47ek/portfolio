import Link from 'next/link'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubLine,
  RiGitlabLine,
  RiWhatsappLine,
  RiMailLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>

      <Link href={'https://github.com/sahil47ek/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://gitlab.com/sahil47ek'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiGitlabLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/sahil-muhammed-93601212a/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </Link>
      <Link href={'mailto:sahil.ek@gmail.com'} className='hover:text-accent transition-all duration-300'>
        <RiMailLine />
      </Link>
      <Link href={'https://wa.me/8073736241'} className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
