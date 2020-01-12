import React, { FC } from 'react'

interface loadingProps {
    isLoading?: boolean
    error?: string | any
}

const RouterLoadingComponent: FC<loadingProps> = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        console.log(error)
        return <div>Sorry, there was a problem loading the page</div>;
    }
    else {
        return null;
    }
};

export default RouterLoadingComponent
