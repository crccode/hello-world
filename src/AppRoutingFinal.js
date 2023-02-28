import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loginpage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';

import Notfoundpage from './pages/404/NotFoundPage';


function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  // Esta variable nos simula si el usuarios esta logeado 
  let loggedIn = true;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        {/* Vamos a la ruta raiz, de ahi vamos a dashboard o login */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Redirect from='/' to='/dashboard' />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        {/* Pintamos a Login Route */}
        <Route exact path='/login' component={Loginpage} />  
        {/* Si vamos a DashBoard Route nos preguntamos si esta logeado*/}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<Dashboardpage />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        <Route component={Notfoundpage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
