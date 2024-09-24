import React from 'react';
import aboutImg from "../assets/about4.jpeg";
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-[#232325]';
    const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';

    return (
        <div className={`${backgroundColor} ${textColor} py-10 h-auto`} id='about'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

                <div>
                    <div className='w-[400px] h-full'>
                        <img src={aboutImg} alt='About Me'
                            className='object-cover rounded-xl h-[300px] filter-grayscale brightness-50' />
                    </div>

                    <div className='p-2'>
                        <div className='my-3'>
                            <h3 className='text-4xl font-semibold mb-5'>{t('aboutTitle0')}<span
                                className='primary-text'>{t('aboutTitle1')}</span></h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                {t('aboutDescription')}
                            </p>
                        </div>
                    </div>
                    <div className='flex mt-19 items-center gap-7'>

                        <div
                            className='bg-[#333333]/40 p-5 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl'>
                            <a href='http://www.github.com/alfred91' target='blank' className='text-white'>
                                <h3 className='md:text-4xl text-2xl font-semibold'>7<span
                                    className='primary-text'>+</span></h3>
                                <p><span className='md:text-base text-xs'>{t('projects00')}<br />{t('projects01')}</span>
                                </p>
                            </a>
                        </div>

                        <div
                            className='bg-[#333333]/40 p-5 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl'>
                            <a href='http://www.github.com/alfred91' target='blank' className='text-white'>
                                <h3 className='md:text-4xl text-2xl font-semibold'>2<span
                                    className='primary-text'>+</span></h3>
                                <p><span className='md:text-base text-xs'>{t('projects02')}<br />{t('projects03')}</span>
                                </p>
                            </a>
                        </div>

                        <div
                            className='bg-[#333333]/40 p-5 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl'>
                            <a href='http://www.github.com/alfred91' target='blank' className='text-white'>
                                <h3 className='md:text-4xl text-2xl font-semibold'>9<span
                                    className='primary-text'>+</span></h3>
                                <p><span className='md:text-base text-xs'>{t('projects04')}<br />{t('projects05')}</span>
                                </p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About