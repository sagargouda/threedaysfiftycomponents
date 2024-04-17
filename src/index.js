import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Provider} from "react-redux";
// import youtubeStore from "./components/livecomments/redux/youtubeStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<Provider store={youtubeStore}>*/}
          <App />
      {/*</Provider>*/}

  </React.StrictMode>
);

