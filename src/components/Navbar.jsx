import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setNav(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bgResponsiveNav = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200';
    const textResponsiveNav = theme === 'dark' ? 'text-gray-200' : 'text-gray-500';
    const borderResponsiveNav = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

    return (
        <div className={`z-10 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 ${bgResponsiveNav}
            ${textResponsiveNav}`}>
            <div className="flex items-center gap-2 ml-4">
                {theme === 'light' ? (
                    <FaSun onClick={toggleTheme} size={30} className="theme-icon" aria-label="Switch to dark theme" />
                ) : (
                    <FaMoon onClick={toggleTheme} size={30} className="theme-icon" aria-label="Switch to light theme" />
                )}
            </div>

            <h1 className='text-3xl font-bold primary-color ml-4'>ALFREDO TRUJILLO</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'>
                    <Link to="hero" spy={true} smooth={true} duration={500} className='nav-link'>{t('navBarHome')}
                    </Link>
                </li>
                <li className='p-5'>
                    <Link to="about" spy={true} smooth={true} duration={500} className='nav-link'>{t('navBarAbout')}
                    </Link>
                </li>
                <li className='p-5'>
                    <Link to="work" spy={true} smooth={true} duration={500} className='nav-link'>{t('navBarWork')}
                    </Link>
                </li>
                <li className='p-5'>
                    <Link to="experience" spy={true} smooth={true} duration={500} className='nav-link'>
                        {t('navBarExperience')}</Link>
                </li>
                <li className='p-5'>
                    <Link to="contact" spy={true} smooth={true} duration={500} className='nav-link'>{t('navBarContact')}
                    </Link>
                </li>
            </ul>

            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                {nav ?
                    <AiOutlineClose size={20} /> :
                    <AiOutlineMenu size={20} />}
            </div>

            <div className={`${nav ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 z-10 h-full w-[60%]
                ${bgResponsiveNav} ${borderResponsiveNav} transition-transform duration-500 ease-in-out`}>
                <h1 className={`text-3xl font-bold m-4 primary-color ${textResponsiveNav}`}>ALFREDO TRUJILLO</h1>
                <ul className={`flex flex-col items-center justify-center h-full ${textResponsiveNav}`}>
                    <li className='p-2 text-xl'><a href='#home' onClick={() => setNav(false)} className='nav-link'>
                        {t('navBarHome')}</a></li>
                    <li className='p-2 text-xl'><a href='#about' onClick={() => setNav(false)} className='nav-link'>
                        {t('navBarAbout')}</a></li>
                    <li className='p-2 text-xl'><a href='#work' onClick={() => setNav(false)}
                        className='nav-link'>{t('navBarWork')}</a></li>
                    <li className='p-2 text-xl'><a href='#experience' onClick={() => setNav(false)} className='nav-link'>
                        {t('navBarExperience')}</a></li>
                    <li className='p-2 text-xl'><a href='#contact' onClick={() => setNav(false)} className='nav-link'>
                        {t('navBarContact')}</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;