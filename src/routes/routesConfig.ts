import HomePage from "../containers/HomePage/HomePage";
import FirstCategoryPage from "../containers/FirstCategoryPage/FirstCategoryPage";
import SecondCategoryPage from "../containers/SecondCategoryPage/SecondCategoryPage";
import BasketPage from "../containers/BasketPage/BasketPage";
import MapPage from "../containers/MapPage/MapPage";
import Login from "../containers/Login/Login";
import Cabinet from "../containers/Cabinet/Cabinet";

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/first',
    exact: true,
    component: FirstCategoryPage
  },
  {
    path: '/second',
    exact: true,
    component: SecondCategoryPage
  },
  {
    path: '/map',
    exact: true,
    component: MapPage
  },
  {
    path: '/basket',
    exact: true,
    component: BasketPage
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/cabinet',
    exact: true,
    component: Cabinet
  },
]

export default routesConfig;