import React, { useState, useEffect } from 'react'

const todayWeatherUrl = (place: string): string => {
    return `https://www.mxnzp.com/api/weather/current/${place}`
}

const GetWeather = () => {
    const [weather, setWeather] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    // 进入页面就请求接口时，不建议在此钩子里直接写 useEffect(async () => {}, [])
    // 建议写一个函数来代替

    useEffect(() => {
        // const fetchWeather = () => {
        if (loading) {
            fetch(todayWeatherUrl('上海市'))
                .then(res => res.json())
                .then(r => setWeather(r.data))
                .then(() => setLoading(false))
        }
        // };

        // fetchWeather();
    }, [loading])

    return (
        <div>
            <h2>上海市天气情况</h2>
            <button
                type='button'
                onClick={() => setLoading(true)}
            >
                刷新天气情况
            </button>
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <div>
                    <h3>城市：{weather.address}</h3>
                    <h3>湿度：{weather.humidity}</h3>
                    <h3>报告时间：{weather.reportTime}</h3>
                    <h3>温度：{weather.temp}</h3>
                    <h3>天气：{weather.weather}</h3>
                    <h3>风向：{weather.windDirection}</h3>
                    <h3>风力：{weather.windPower}</h3>
                </div>
            )}
        </div>
    )
}

export default GetWeather
