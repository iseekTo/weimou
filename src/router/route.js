import Home from '../pages/Home'
import Count from '../pages/Count'
import Lottery from '../pages/lottery'
import NotFound from '../pages/404'
import GetWeather from '../pages/GetWeather'

const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/count', component: Count, exact: true },
    { path: '/lottery', component: Lottery, exact: true },
    { path: '/NotFound', component: NotFound, exact: true },
    { path: '/GetWeather', component: GetWeather, exact: true }
]

export default routes
