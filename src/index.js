import React from 'react';
import ReactDOM from 'react-dom/client';
import  {App}  from './components/app/App';
// import './index.css'
// import {creativeGlobalStyle} from "styled-components"

// const Global = creativeGlobalStyle`
// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: Consolas
// }
//   `


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    
    <App />
    </>
  </React.StrictMode>
);



// ReactDOM.render(
//   <React.StrictMode>
//     <>
//     {/* <Global/> */}
//      <App />
//     </>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
      
          
    

