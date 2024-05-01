import React from 'react';
import SearchIcon from './search.svg';
import cloud_icon from './Assets/cloud.png';

const Hero = ({ searchTerm, setSearchTerm, searchCity, cityName, temperature, weatherCondition }) => {
    return (
        <div className="hero flex flex-col justify-center items-center min-h-screen bg-gradient-to-tl from-sky-700 to-sky-800 text-white">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-8 text-center'>Choosen location: <b>{cityName}</b></h1>
            <div className="text-center">
                <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8'>{temperature}°C</h2>
                <div className="weather-icon mb-4 md:mb-6">
                    <img src={weatherCondition} alt="" className="h-auto w-36 md:w-48 lg:w-64" />
                </div>
            </div>
            <div className="relative">
                <input
                    className='w-full p-3 pb-3 border-b-4 bg-transparent focus:outline-none text-3xl md:text-4xl font-semibold text-center uppercase'
                    type="text"
                    placeholder='Input City'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    className='svg-hover absolute right-0 top-0 bottom-0 bg-transparent border-none px-4 py-3 hover:'
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchCity(searchTerm)}
                />
            </div>
        </div>
    );
};

export default Hero;