import AppToolbar from './components/UI/AppToolbar/AppToolbar'
import { NotificationContainer } from 'react-notifications';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ?
    <Route {...props} />
    :
    <Redirect to={redirectTo}/>
};

const App = () => {
  const user = useSelector(state => state.users.user);

  return (
    <>
      <AppToolbar />
      <NotificationContainer />
      <Container maxWidth="xl">
        <Switch>
          <ProtectedRoute 
            isAllowed={!user}
            redirectTo={"/"}
            path={"/login"}
            exact
            component={Login}
          />
          <ProtectedRoute 
            isAllowed={!user}
            redirectTo={"/login"}
            path={"/register"}
            exact
            component={Register}
          />
        </Switch>
      </Container>
    </>
  );
}

export default App;
