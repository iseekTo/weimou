import React from 'react'
// import { useHistory } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './route'

const PrimaryLayout = () => {
    // const history = useHistory();

    // const gotoHome = () => {
    //     history.push('/');
    // };

    return (
        <div
            className='primary-layout'
            style={{ margin: '50px' }}
        >
            <main>
                <Switch>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}

                    <Route>
                        <Redirect to='/NotFound' />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default PrimaryLayout
