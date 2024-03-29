import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Signup1 from './components/Signup1';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="alert-container"> {/* New container for the Alert */}
            <Alert alert={alert} />
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/"> <Home showAlert={showAlert} /> </Route>
              <Route exact path="/about"> <About /> </Route>
              <Route exact path="/login"> <Login showAlert={showAlert} /> </Route>
              <Route exact path="/signup1"> <Signup showAlert={showAlert} /> </Route>
              <Route exact path="/signup"> <Signup1 showAlert={showAlert} /> </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
