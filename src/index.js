import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Space',
//   lastName: 'Bun'
// };

// function getGreeting(user) {
//   if(user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>hello, stranger</h1>;
// }

// const element = (
//   <h1>{getGreeting(user)}</h1>
// )

// root.render(element)
// ===============================================
// const element2 = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here, SPACEBUN!</h2>
//   </div>

// );

// root.render(element2)

//=========================================

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);

//=========================================

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h3>{console.log(new Date().toLocaleTimeString())}</h3>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
