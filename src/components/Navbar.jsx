import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (   
    <nav className="bg-[#0E1B2A] text-white relative">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div>
                <a href="#" className="text-xl font-bold tracking-wide">Sara Mohammed</a>
            </div>
            <ul className="hidden items-center gap-8 md:flex">
                <li>
                    <a href="#about" className="transition-colors duration-300 hover:text-[#4FD1C5]">About</a>
                </li>
                <li>
                    <a href="#skills" className="transition-colors duration-300 hover:text-[#4FD1C5]">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="transition-colors duration-300 hover:text-[#4FD1C5]">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="transition-colors duration-300 hover:text-[#4FD1C5]">Contact</a>
                </li>
            </ul>
            <button type="button" className="text-2xl md:hidden"  aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        </div>    
        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="bg-[#0E1B2A] absolute left-0 top-full w-full  md:hidden">
                <ul className="flex flex-col gap-4 px-6 py-5">
                    <li>
                        <a href="#about" className="transition-colors duration-300 hover:text-[#4FD1C5]" >About</a>
                    </li>
                    <li>
                        <a href="#skills" className="transition-colors duration-300 hover:text-[#4FD1C5]">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="transition-colors duration-300 hover:text-[#4FD1C5]">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="transition-colors duration-300 hover:text-[#4FD1C5]">Contact</a>
                    </li>
                </ul>
            </div>      
        )}
    </nav>
  );
}

export default Navbar;