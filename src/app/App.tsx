import React from 'react';
import AppRouter from './providers/router/AppRouter';
import Sidebar from '../shared/ui/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <AppRouter />
    </div>
  );
}

export default App;
