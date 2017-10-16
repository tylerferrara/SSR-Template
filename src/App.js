import React from 'react';

let lis = [];
function addLi() {
  lis.push('+');
}

function App() {

  return (
    <div>
      <h1>Im the App</h1>
      <button onClick={() => {
        alert('This is reactive!!!')
      }}>Is this reactive?</button>
    </div>
  )
}

export default App
