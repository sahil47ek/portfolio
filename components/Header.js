import Image from 'next/image'
import Link from 'next/link'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center md:px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between md:items-center gap-y-6 md:py-8 py-4'>
          {/* logo */}
          <Link href='/'>
            {/* <Image 
              src={'/logo.svg'} 
              width={220} 
              height={48} 
              alt='logo' 
              priority={true}
            /> */}
            <h1 className='md:text-5xl text-2xl '> mo <b> sahil.</b></h1>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
