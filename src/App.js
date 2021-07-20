import './App.css';
import NavBar from './components/NavBar';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,  Redirect } from 'react-router-dom';
import Login from '../src/views/Login.jsx';
import SignUp from '../src/views/SignUp.jsx';
import UserProfile from '../src/views/UserProfile.jsx';
import NewExperiment from './views/NewExperiment';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {SignUp}/>
            <Route path="/login" component = {Login}/>
            <Route path="/userprofile" component = {UserProfile}/>
            <Route path="/newexperiment" component = {NewExperiment}/>
            <Redirect to="/"/>
        </Switch>
      </ BrowserRouter>    
    </div>
  );
}

export default App;
