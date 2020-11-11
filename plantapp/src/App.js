import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BeginnerPlants from './components/BeginnerPlants';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path={["/home","/"]} >
          <HomePage />
      </Route>

      <Route path="/BeginnerPlants" >
        <BeginnerPlants />
      </Route>

    </div>
  );
}

export default App;
