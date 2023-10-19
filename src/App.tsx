import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './containers/Home';
import SimpleAppBar from './components/navbar';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <SimpleAppBar></SimpleAppBar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
