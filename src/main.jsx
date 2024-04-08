import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode >
        <HashRouter basename='/book-react-tailwind' >
            <App />
        </HashRouter>
  </React.StrictMode>
);
// basename='/BooksMultipages-Tailwind'