import React from 'react';
import { FaDocker, FaPhp, FaJsSquare, FaDatabase, FaHtml5, FaCss3, FaReact, FaGit, FaJava, FaUbuntu, FaAws, FaAngular, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-[#232325]';
    const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
    const icons = [
        { Icon: FaDocker, name: "Docker" },
        { Icon: FaPhp, name: "PHP" },
        { Icon: FaJsSquare, name: "JavaScript" },
        { Icon: FaDatabase, name: "MySQL, Mongo" },
        { Icon: FaHtml5, name: "HTML5" },
        { Icon: FaCss3, name: "CSS3" },
        { Icon: FaReact, name: "React" },
        { Icon: FaGit, name: "Git" },
        { Icon: FaJava, name: "Java" },
        { Icon: FaUbuntu, name: "Ubuntu" },
        { Icon: FaAws, name: "Amazon Web Services" },
        { Icon: FaAngular, name: "Angular" },
        { Icon: FaNodeJs, name: "NodeJS" },
        { Icon: FaLaravel, name: "Laravel" },
    ];
    return (
        <div className={`${backgroundColor} ${textColor} py-10`} id="experience">
            <h2 className="mb-10 text-3xl text-white text-center">{t('experienceTitle0')} <span>{t('experienceTitle1')} </span></h2>
            <div className="flex flex-wrap justify-center gap-16 my-8">
                {icons.map(({ Icon, name }, index) => (
                    <div key={index} className="tooltip relative inline-flex items-center justify-center group">
                        <Icon className="z-9 text-5xl hover:text-white" />
                        <span className="tooltip-text">{name}</span>
                        <div className={`absolute -inset-0.5 opacity-0 rounded-full blur-lg transition-opacity duration-300
           group-hover:opacity-100 ${theme === 'light' ? 'bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400'
                                : 'bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'}`}></div>
                    </div>
                ))}
            </div>

            <div className='relative inline-flex group my-3'>
                <div className={`absolute transition-all duration-1000 opacity-70 -inset-px rounded-xl blur-lg
        group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 ${theme === 'light'
                        ? 'bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400'
                        : 'bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'}`}>
                </div>
            </div>

            <div className="mb-[20px] text-center text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>BEEP Garrucha</p>
                <p className="text-gray-400">(2012 - 2016)</p>
                <p className="text-gray-500">
                    {t('work0')}
                </p>
            </div>

            <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>
            <div className="mb-[20px] text-center text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>Karting Garucha</p>
                <p className="text-gray-400">(2017 - 2020)</p>
                <p className="text-gray-500">
                    {t('work1')} </p>
            </div>

            <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>
            <div className="mb-[20px] text-center text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>Vera Playa Hotel</p>
                <p className="text-gray-400">(2020 - 2023)</p>
                <p className="text-gray-500">
                    {t('work2')} </p>
            </div>
        </div>

    )
}

export default Experience