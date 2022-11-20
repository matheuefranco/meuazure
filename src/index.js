import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header'
import Banner from './components/Banner'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Banner
          videoTitle={"Meu Video"}
          url={"https://www.youtube.com/watch?v=3BhkeY974Rg"}
          videoDescription={"IFSULDEMINAS"}
          />

    </div>
);


