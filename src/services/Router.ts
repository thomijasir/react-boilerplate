import { RouteProps } from 'react-router-dom';
import HomePage from '../containers/Home/Home.page';

interface IRoute extends RouteProps {
  key: number;
  path: string;
  exact: boolean;
  element: any;
}

const Routes: Array<IRoute> = [
  {
    key: 1,
    path: '/',
    exact: true,
    element: HomePage,
  },
];

export default Routes;
