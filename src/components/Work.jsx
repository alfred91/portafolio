import React from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';


const Work = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const containerBgColor = theme === 'light' ? 'bg-white' : '';
    const contentBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const textColor = theme === 'light' ? 'text-gray-700' : 'text-gray-200';

    return (
        <div className={`${containerBgColor} ${textColor} py-8`} id='work'>
            <div className={`${contentBgColor} max-w-[1200px] mx-auto px-4 md:px-8`}>
                <div className='mb-4 flex items-center justify-between'>
                    <div className='flex flex-col gap-4'>
                        <h2 className={`text-2xl lg:text-3xl ${textColor}`}>
                            {t('projectsTitle0')} <span>{t('projectsTitle1')}</span>
                        </h2>
                        <p className={`text-gray-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {t('workDescription')} </p>
                    </div>
                </div>

                <div className='grid gap-4 grid-cols-2 my-10 sm:grid-cols-3 md:gap-6 xl:gap-8'>
                    <a href="http://3.211.131.204:8080/" target="blank" className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                        <img src={proj3} alt="Pokédex con NodeJS y Express desplegado en AWS"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="https://alfredo-daw.000webhostapp.com/" target="blank" className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={proj4} alt=""
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="http://54.163.11.19" target="blank"
                        className="group h-48 overflow-hidden rounded-lg md:col-span-2 shadow-lg md:h-80">
                        <img src={proj1} alt="Agenda Cultural Laravel"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>
                    <a href="http://34.229.148.155:8080" target="blank"
                        className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                        <img src={proj2} alt="Aplicacion para Gestión de Inventario - Laravel"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Work