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
import Movie from './containers/Movie';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <SimpleAppBar></SimpleAppBar>
        <Routes>SearchPage
          <Route path="/" element={<Home />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
