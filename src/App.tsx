import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageIndicator from './PageIndicator/PageIndicator'

interface Props {
  readonly activePage ?: number;
}

const App: React.FC = () => {
  return (
    <div >
     <PageIndicator activePage = {1}/>
    </div>
  );
}

export default App;
