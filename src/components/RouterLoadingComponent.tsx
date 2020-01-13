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
        return <div>抱歉，页面可能出现一些错误</div>;
    }
    else {
        return null;
    }
};

export default RouterLoadingComponent
