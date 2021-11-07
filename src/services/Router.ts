import { RouteProps } from 'react-router-dom';
import HomeContainer from '../containers/Home/Home.container';

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
    element: HomeContainer,
  },
];

export default Routes;
