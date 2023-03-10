import logo from './logo.svg';
import './App.css';
import { fakeApiReturnData, makeFakeApiRequest } from './utils/fakeApi';
//import axios from 'axios';

function App() {
  
  // Request to jsearch and print the results on the console
  // const options = {
  //   method: 'GET',
  //   url: 'https://jsearch.p.rapidapi.com/search',
  //   params: {
  //     query: 'Node developer London, UK',
  //     num_pages: '1'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '',
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //   }
  // };
  
  
  // axios.request(options)
  makeFakeApiRequest(true, 2000, fakeApiReturnData)
  .then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
