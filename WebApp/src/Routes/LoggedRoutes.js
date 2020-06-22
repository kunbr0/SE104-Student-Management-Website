import React from 'react';
//import SLogin from './../Sites/Login/Login';
import SHomepage from '../Containers/Pages/Homepage/Homepage';
// import SNotFound from './../Sites/NotFound_404/NotFound_404';
//import ClassInfo from './../Sites/Class/ClassInfo';
// import History from './../Sites/History/History';
import SSystem from '../Containers/Pages/System/System';
//import Login from '../Sites/Login/Login';
import TestLogin from '../Containers/Pages/TestLogin/TestLogin'
import ClassDetails from '../Containers/Pages/ClassDetails/ClassDetails';
import Schedule from '../Containers/Pages/Schedule/Schedule';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <SHomepage />
    },
    {
        path : '/system',
        exact : false,
        main : () => <SSystem />
    },
    {
        path : '/users',
        exact : false,
        main : () => <TestLogin />
    },
    {
        path : '/class/:classCode',
        exact : false,
        main : ({match}) => <ClassDetails match={match} />
    },
    {
        path : '/schedule',
        exact : false,
        main : () => <Schedule />
    },
    // {
    //     path : '',
    //     exact : true,
    //     main : () => <SNotFound />
    // },
];

export default routes;