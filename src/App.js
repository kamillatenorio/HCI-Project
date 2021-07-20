import './App.css';
import NavBar from './components/NavBar';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,  Redirect } from 'react-router-dom';
import Login from '../src/views/Login.jsx';
import SignUp from '../src/views/SignUp.jsx';
import UserProfile from '../src/views/UserProfile.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {SignUp}/>
            <Route path="/login" component = {Login}/>
            <Route path="/userprofile" component = {UserProfile}/>
            <Redirect to="/"/>
        </Switch>
      </ BrowserRouter>    
    </div>
  );
}

export default App;
