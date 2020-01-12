import React from 'react'
import { useHistory } from 'react-router'
import '../assets/home.scss'
import '../assets/reset.scss'
import time from '../assets/skill.jpeg'

const Home = () => {
    const history = useHistory()

    const jumpCount = () => {
        history.push('/count')
    }

    const jumpLottery = () => {
        history.push('/lottery')
    }

    const jumpAnthing = () => {
        history.push('/hhahahhah')
    }

    const jumpGetWeather = () => {
        history.push('/GetWeather')
    }

    return (
        <div className='home'>
            <img
                src={time}
                alt='111'
            />
            <h1
                className='h-txt'
                onClick={jumpCount}
            >
                go to countPage
            </h1>
            <h1
                className='h-txt'
                onClick={jumpLottery}
            >
                go to lotteryPage
            </h1>
            <h1
                className='h-txt'
                onClick={jumpAnthing}
            >
                go to anthingPage
            </h1>
            <h1
                className='h-txt'
                onClick={jumpGetWeather}
            >
                go to GetWeatherPage
            </h1>
        </div>
    )
}

export default Home
