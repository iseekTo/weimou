import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Router from './router'

// BrowserRouter 在github pages上的配置暂时还没找到
// 先用 HashRouter
renderWithHotReload(Router)

if (module.hot) {
    module.hot.accept('./router/index.js', () => {
        const Router = require('./router/index.js').default

        renderWithHotReload(Router)
    })
}

function renderWithHotReload(Router) {
    ReactDOM.render(
        <HashRouter>
            <Router />
        </HashRouter>,
        document.getElementById('app')
    )
}
