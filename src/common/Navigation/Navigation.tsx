import React, { FunctionComponent } from 'react';
import { withRouter, NavLink, RouteComponentProps } from 'react-router-dom';

import { List } from '../List';
import ListItem from '../List/ListItem';
import './Navigation.scss';

interface INavigationOwnProps {
  closeDrawer: () => void;
}

interface INavigationWithRouterProps {
  history: History;
}

const menuData = [
  { path: '/', label: 'Home', activePath: ['/sign-in', '/'] },
  { path: '/leaderboards', label: 'Leaderboards', activePath: ['/leaderboards'] },
  { path: '/about', label: 'About', activePath: ['/about'] },
];

const Navigation: FunctionComponent<
  INavigationOwnProps & INavigationWithRouterProps & RouteComponentProps
> = ({
  history,
  closeDrawer,
}) => {
  const current = history.location.pathname;
  return (
    <div id="nav" className="navigation">
      <List>
        {menuData.map((i) => (
          <NavLink
            activeClassName="active"
            key={i.path}
            to={i.path}
            onClick={closeDrawer}
          >
            <ListItem
              active={i.activePath.indexOf(current) !== -1}
            >
              { i.label }
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
};

export default withRouter(Navigation);
