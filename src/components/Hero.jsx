import React from 'react';
import profilepic from '../assets/profilepic5.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const backgroundColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const textColor = theme === 'light' ? 'text-gray-700' : 'text-gray-200';

    const socialIcons = [
        { icon: <AiFillGithub />, link: 'http://www.github.com/alfred91' },
        { icon: <AiFillInstagram />, link: 'http://www.instagram.com/alfred91mc' },
        { icon: <AiFillLinkedin />, link: 'http://www.linkedin.com/in/alfredo-jesús-trujillo-espejo-31ab8b29b' },
    ];

    return (
        <div className={`${backgroundColor} ${textColor}`}>
            <div
                className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center'>
                <div className='flex-col my-auto mx-auto'>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        <TypeAnimation sequence={['Frontend Dev', 1200, 'Web Designer', 1100, 'Backend Dev',
                            1100, 'AWS-Docker', 1000]} wrapper='span' speed={50} repeat={3} />
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                            {t('heroDescription')}
                        </p>
                    </div>

                    <div className='text-5xl flex justify-start gap-16 my-7'>
                        {socialIcons.map(({ icon, link }, index) => (
                            <div key={index} className="relative inline-flex items-center justify-center group">
                                <div className={`absolute -inset-0.5 opacity-0 rounded-full blur transition-opacity
                               duration-300 group-hover:opacity-100 ${theme === 'light'
                                        ? 'bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400'
                                        : 'bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'}`}></div>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="relative z-9">
                                    {icon}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className='relative inline-flex group my-3'>
                        <div className={`absolute transition-all duration-1000 opacity-70 -inset-px rounded-xl blur-lg
                           group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 ${theme === 'light'
                                ? 'bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400'
                                : 'bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'}`}></div>
                        <a href='/' title='Download CV' role='button'
                            className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
                            {t('downloadButton')}
                        </a>
                    </div>
                </div>

                <div className='my-auto'>
                    <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full' src={profilepic} alt='Profile' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
