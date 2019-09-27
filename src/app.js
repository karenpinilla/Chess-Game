import React from 'react';
import Board from './components/Board/Board';

import './app.module.scss';

const App = () => {
  return (
    <div className='App'>
      <h1>Knight's Journey</h1>
      <Board></Board>
    </div>
  );
};

export default App;
