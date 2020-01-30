import React from 'react'
import { useHistory } from 'react-router'
import '../assets/home.scss'
import '../assets/reset.scss'
import time from '../assets/skill.jpeg'

const jumpRouteName: string[] = [
    'count',
    'lottery',
    '404',
    'GetWeather'
]

const Home = () => {
    const history = useHistory()


    const onJumpClick = (route) => {
        history.push(`/${route}`)
    }

    return (
        <div className='home'>
            <img
                src={time}
                alt='111'
            />

            {
                jumpRouteName.map((route: string) => (
                    <h1
                        key={route}
                        className='h-txt'
                        onClick={() => onJumpClick(route)}
                    >
                        go to {route}Page
                    </h1>
                ))
            }
            
        </div>
    )
}

export default Home
