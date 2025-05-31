import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "keen-slider/keen-slider.min.css";
import "./index.css"; // Your Tailwind setup

import App from './App.jsx'
import { MainProvider } from './context/MainContext.jsx';

createRoot(document.getElementById('root')).render(
  <MainProvider>
    <App />
  </MainProvider>,
)
