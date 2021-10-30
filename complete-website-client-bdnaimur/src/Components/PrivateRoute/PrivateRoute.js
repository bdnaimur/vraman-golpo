import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const email = useSelector(state=>state.auth.authdetails.email);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ||email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;