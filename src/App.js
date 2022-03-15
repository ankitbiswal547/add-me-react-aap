import { Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Homepage from './components/Homepage/Homepage';
import Userpage from './components/Userpage/Userpage';


function App() {
  return (
    <div className='main-page'>
      <Switch>

        {/* route for homepage */}
        <Route path="/" exact>
          <Homepage />
        </Route>

        {/* route for all users page */}
        <Route path="/users" exact>
          <Userpage />
        </Route>

        {/* route for adding new user page */}
        <Route path="/adduser" exact>
          <Form />
        </Route>

      </Switch>
    </div>
  );
}

export default App;