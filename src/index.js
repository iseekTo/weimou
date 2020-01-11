import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

renderWithHotReload(Router)

if (module.hot) {
    module.hot.accept('./router/index.js', () => {
        const Router = require('./router/index.js').default

        renderWithHotReload(Router)
    })
}

function renderWithHotReload(Router) {
    ReactDOM.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router />
        </BrowserRouter>,
        document.getElementById('app')
    )
}
