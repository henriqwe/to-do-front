import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard';



const Routes =()=>{
  
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'  component={Login}/>
          <Route exact path='/dashboard'  component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    )
}
export default Routes;
