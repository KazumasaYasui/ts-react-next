import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import ContainerSample from './components/ContainerSample';
import ContextSample from './components/ContextSample';
import { Counter as Counter1 } from './components/CounterWithUseState';
import { Counter as Counter2 } from './components/CounterWithUseReducer';
import { Parent } from './components/Parent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Hello />
    <Name />
    <Message />
    <ContainerSample />
    <ContextSample />
    <Counter1 initialValue={0} />
    <Counter2 initialValue={0} />
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
