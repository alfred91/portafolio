import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-[#232325]';
    const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';

    const socialLinks = [
        { Icon: FaGithubSquare, link: 'http://www.github.com/alfred91' },
        { Icon: FaInstagram, link: 'http://www.instagram.com/alfred91mc' },
        { Icon: FaLinkedin, link: 'http://www.linkedin.com/in/alfredo-jesús-trujillo-espejo-31ab8b29b' },
        { Icon: FaFacebook, link: 'http://www.linkedin.com/in/alfredo-jesús-trujillo-espejo-31ab8b29b' },
    ];

    return (
        <div className={`${backgroundColor} ${textColor} py-10`} id='footer'>
            <div className='mt-12 w-max-[800px] mx-auto border-t border-gray-500 text-center'>
                <p className='my-5 text-gray-500'>{t('footerText0')} <br /> {t('footerText1')}</p>
                <div className="inline-flex gap-4 text-3xl">
                    {socialLinks.map(({ Icon, link }, index) => (
                        <div key={index} className="relative inline-flex items-center justify-center group">
                            <div className={`absolute -inset-0.5 opacity-0 rounded-full blur transition-opacity duration-300
                            group-hover:opacity-100 ${theme === 'light'
                                    ? 'bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400'
                                    : 'bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'}`}></div>
                            <a href={link} target="_blank" rel="noopener noreferrer"
                                className="relative z-9 text-gray-500 hover:text-gray-400">
                                <Icon />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
