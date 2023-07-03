import React, { Fragment } from 'react';
import logo from './logo.svg';
import './style/App.css';
import { TitleImg } from './module/MTitle';
import { Router, useRoutes } from 'react-router-dom';
import router from './router'

function App() {
  return (
    <div className='root'>
      <div className='centerrange'>
        <div className='title'>
          <TitleImg></TitleImg>
        </div>
        <div className='formrange'>
          {useRoutes(router)}
        </div>
      </div>
    </div>
  )
}

export default App;
