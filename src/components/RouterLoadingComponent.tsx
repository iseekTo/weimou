import React, { FC, useEffect } from 'react'

interface loadingProps {
    isLoading?: boolean
    error?: string | any
}

// 简单声明第三方库 NProgress
declare const NProgress: any;

const RouterLoadingComponent: FC<loadingProps> = ({ isLoading, error }) => {
   
    useEffect(() => {
        NProgress.start()

        return () => NProgress.done()
    }, [])

    if (isLoading) {
        return <div>loading...</div>;
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
