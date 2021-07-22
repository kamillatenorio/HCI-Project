import './App.css';
import NavBar from './components/NavBar';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,  Redirect } from 'react-router-dom';
import Login from '../src/views/Login.jsx';
import SignUp from '../src/views/SignUp.jsx';
import UserProfile from '../src/views/UserProfile.jsx';
import NewExperiment from './views/NewExperiment';
import Scope from './views/experimentPhases/Scope';
import Planning from './views/experimentPhases/Planning';
import Operation from './views/experimentPhases/Operation';
import Analysis from './views/experimentPhases/Analysis';
import Report from './views/experimentPhases/Report';

import 'bootstrap/dist/css/bootstrap.min.css';
import Reset from './views/Reset';
import SignUpMain from './views/SignUpMain';

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
            <Route path="/scope" component = {Scope}/>
            <Route path="/planning" component = {Planning}/>
            <Route path="/operation" component = {Operation}/>
            <Route path="/analysis" component = {Analysis}/>
            <Route path="/report" component = {Report}/>
            <Route path="/reset" component = {Reset}/>
            <Route path="/signUp" component = {SignUpMain}/>
            <Redirect to="/"/>
        </Switch>
      </ BrowserRouter>    
    </div>
  );
}

export default App;
