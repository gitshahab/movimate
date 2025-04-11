import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from './components';
import { ThemeProvider } from "./context/ThemeContext";
import { FavProvider } from './context/FavContext';
import { LoadingBarContainer } from "react-top-loading-bar";
import { LoadingProvider } from './context/LoadingContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <FavProvider>
          <LoadingProvider>
          <LoadingBarContainer>
            <App/>
          </LoadingBarContainer>
          </LoadingProvider>
        </FavProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

