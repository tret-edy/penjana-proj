//import logo from './logo.svg';//
import './App.css';
import './index.css';
import React from 'react';
import useNavigate from 'react-router-dom';

function App() {

  let navigate = useNavigate();

  return (
   <div className="">
      <p className='font-bold text-3xl text-center'>Project Penjana</p>

      <button className='border-2'>Go to landing page</button>
    </div>>
  );
}

export default App;
