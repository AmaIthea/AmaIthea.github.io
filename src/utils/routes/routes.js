import {START_ROUTE, MY_PROFILE_ROUTE, PRACTICE_ROUTE, INFO_ROUTE, LESSONS_ROUTE} from '../consts/router'







import Start from './../../pages/Start/Start'
import MyProfile from './../../pages/MyProfile/MyProfile'
import Practice from './../../pages/Practice/Practice'
import Info from './../../pages/Info/Info'
import Lessons from './../../pages/Lessons/Lessons'







const publicRoutes = [
    {
        path: START_ROUTE,
        Component: Start,
    }
]

const privateRoutes = [
    {
        path: MY_PROFILE_ROUTE,
        Component: MyProfile,
    },
    {
        path: START_ROUTE,
        Component: Start,
    },
    {
        path: INFO_ROUTE,
        Component: Info,
    },
    {
        path: PRACTICE_ROUTE,
        Component: Practice,
    },
    {
        path: LESSONS_ROUTE,
        Component: Lessons,
    },
    {
        path: MY_PROFILE_ROUTE,
        Component: MyProfile,
    }
]


export { publicRoutes, privateRoutes }