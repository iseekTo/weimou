import React, { FC } from 'react'

interface loadingProps {
    isLoading?: boolean
    error?: string | any
}

// 简单声明第三方库 NProgress
declare const NProgress: any;

const RouterLoadingComponent: FC<loadingProps> = ({ isLoading, error }) => {

    NProgress.start()
    if (isLoading) {
        // 持续优化，进度条不精确
        NProgress.done()
        return <div></div>;
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
