import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import Searcher from "../pages/Searcher";

export const routesAvailable = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/about',
        Component: AboutPage
    },
    {
        path: '/search/:query',
        Component: Searcher
    }
]