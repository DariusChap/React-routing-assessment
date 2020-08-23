import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navigation />
     
     <Switch>
     <Route 
     exact 
     path="/" exact 
     render={(props) => <Welcome {...props} name="Darius" />} 
     />
     {/* <Route path= "welcome/:name" component={Name} /> */}
     <Route exact path="/clock" exact component={Clock}/>
     <Route exact path="/contact" exact component={Contact}/>
     <Route path="/" render={() => <h1>404 No Match Found</h1>} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
