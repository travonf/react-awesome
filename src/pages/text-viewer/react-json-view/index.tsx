import React from 'react';
// import ReactDOM from 'react-dom';
import ReactJson from 'react-json-view';
import { data } from './data';
// import './styles.css';

function App() {
  return (
    <div className="App">
      <ReactJson
        src={data}
        style={{ padding: 20 }}
        theme="google"
        iconStyle="circle"
        enableClipboard={false}
      />
    </div>
  );
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
export default App;
