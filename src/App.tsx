import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './containers/Home';
import SimpleAppBar from './components/Navbar';
import SearchPage from './containers/SearchPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <SimpleAppBar></SimpleAppBar>
        <Routes>SearchPage
          <Route path="/" element={<Home />} />
          <Route path="/SearchPage" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
