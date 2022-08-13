import {useState} from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  // use useState to set the default state of the menu to be false until toggle
  const [toggle, setToggle] = useState(false);

  return (
    <nav // navbar basic fullscreen 
    className="w-full 
    flex 
    py-6 
    justify-between 
    items-center 
    navbar"
    >
      <img
      // image class
      src={logo} alt="NewBank" className="w-[124px] h-[32px]"/>
      <ul
      // view on desktop
      className="list-none 
      sm:flex hidden
      justify-end 
      items-center 
      flex-1"
      >
      {navLinks.map((nav, index) => (
        // map navigation links from '../constants
        <li
        key={nav.id}
        className={  
        `
        font-poppins
        font-normal
        cursor-pointer
        text-[16px]
        text-white
        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
        `
        }
        >
          <a // use id indication # from the nav for its links 
          href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
      </ul>
      <div 
      // mobile friendly menu using state to transform the button from menu to X
        className='sm:hidden 
        flex 
        flex-1 
        justify-end 
        items-center'
        >
        <img
        src={toggle ? close : menu}
        alt="menu"
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        // menu toggle to have animated button appear in menu bar
        className={`${toggle ? 'flex' : 'hidden'} 
        p-6
        bg-black-gradient
        absolute
        top-20
        right-0
        mx-4
        my-2
        min-w-[140px]
        rounded-xl
        sidebar
        `
        }
        >
          <ul
          // design of menu on mobile view
          className="list-none 
          flex
          flex-col
          justify-end 
          items-center 
          flex-1"
          >
          {navLinks.map((nav, index) => (
            // map navigation links from '../constants
            <li
            key={nav.id}
            className={  
            `
            font-poppins
            font-normal
            cursor-pointer
            text-[16px]
            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
            text-white
            `
            }
            >
            <a // use id indication # from the nav for its links 
            href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar