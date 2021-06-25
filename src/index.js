import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Listview} from '../src/ListComponent/Listview';

const MainComponent = () => {
  return( <>
        <Listview />
      </>
  );  
}


ReactDOM.render(<MainComponent/>,document.getElementById("root"));


