import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="  border-b-2 container py-5 lg:py-10 font-libre flex flex-col lg:flex-row justify-between items-center">
      <h1 className="font-bold text-xl lg:text-2xl">NOICELAND</h1>
      <nav className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Photo">Photo</a></li>
          <li><a href="#ltPhoto">Latest</a></li>
          <li><a href="#Post">Featured</a></li>
          <li><a href="#Fotter">Footer</a></li>
        </ul>
      </nav>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="flex items-center justify-center focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};
