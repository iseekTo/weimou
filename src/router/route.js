import ReactLoadable from 'react-loadable'
import RouterLoadingComponent from '../components/RouterLoadingComponent'

// import Home from '../pages/Home'
// import Count from '../pages/Count'
// import Lottery from '../pages/lottery'
// import NotFound from '../pages/404'
// import GetWeather from '../pages/GetWeather'

const HomeLoadable = ReactLoadable({ loader: () => import('../pages/Home'), loading: RouterLoadingComponent })
const CountLoadable = ReactLoadable({ loader: () => import('../pages/Count'), loading: RouterLoadingComponent })
const LotteryLoadable = ReactLoadable({ loader: () => import('../pages/lottery'), loading: RouterLoadingComponent })
const GetWeatherLoadable = ReactLoadable({ loader: () => import('../pages/GetWeather'), loading: RouterLoadingComponent })
const NotFoundLoadable = ReactLoadable({ loader: () => import('../pages/404'), loading: RouterLoadingComponent })

const routes = [
    { path: '/', component: HomeLoadable, exact: true },
    { path: '/count', component: CountLoadable, exact: true },
    { path: '/lottery', component: LotteryLoadable, exact: true },
    { path: '/GetWeather', component: GetWeatherLoadable, exact: true },

    { path: '/NotFound', component: NotFoundLoadable, exact: true }

]

export default routes
