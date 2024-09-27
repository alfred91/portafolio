import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import SendIcon from '../assets/send.svg';

const Contact = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const contactBackgroundColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const formFieldBackgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-gray-700';
    const textColor = theme === 'light' ? 'text-gray-700' : 'text-white';

    return (
        <div className={`flex justify-center mb-0 my-20 h-full sm:h-[60vh] ${contactBackgroundColor} ${textColor}`} id='contact'>
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className={`p-6 mr-2 ${contactBackgroundColor} rounded-xl flex flex-col justify-around`}>
                        <h1 className={`text-4xl sm:text-5xl ${textColor}`}>
                            {t('contactTitle0')} <span>{t('contactTitle1')}</span>
                        </h1>
                        <p className={`text-normal text-lg font-medium mt-2 ${textColor}`}>
                            {t('contactDescription0')} <br /> {t('contactDescription1')}
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            <p>Alfredo Trujillo</p>
                        </div>
                    </div>
                </div>

                <form action='https://getform.io/f/rb2j6PbW' method='post' className='p-6 flex flex-col justify-center max-w-[700px]'>
                    <div className='flex flex-col'>
                        <input type='name' name='name' id='name' placeholder={t('formName')} required className={`w-100 mt-2 p-3 px-3 rounded-lg ${formFieldBackgroundColor} border border-gray-700 ${textColor}`} />
                    </div>
                    <div className='flex flex-col'>
                        <input type='email' name='email' id='email' placeholder={t('formEmail')} required className={`w-100 mt-2 py-3 px-3 rounded-lg ${formFieldBackgroundColor} border border-gray-700 ${textColor}`} />
                    </div>
                    <div className='flex flex-col'>
                        <textarea name='message' id='message' placeholder={t('formMessage')} required className={`w-100 mt-3 py-3 px-3 rounded-lg ${formFieldBackgroundColor} border border-gray-700 ${textColor}`}></textarea>
                    </div>
                    <div className='relative inline-flex group my-3'>
                        <div className={`mt-5 absolute transition-all duration-1000 opacity-70 -inset-px rounded-lg blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 ${theme === 'light' ? 'bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400' : 'bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'} w-[200px] h-[65px]`}></div>

                        <button type='submit' className='w-[190px] h-[60px] mt-5 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
                            {t('submitButton')}
                        </button>
                    </div>
                </form>
                <div className="svg-container flex justify-center mt-4"> {/* Ajusta el margen aquí */}
                    <img src={SendIcon} alt="Send" className="w-24 h-24" /> {/* Ajusta el tamaño */}
                </div>
            </div>
        </div>
    );
}

export default Contact;
