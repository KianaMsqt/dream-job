import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  
  // Request to jsearch and print the results on the console
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: 'Python developer in Texas, USA',
      num_pages: '1'
    },
    headers: {
      'X-RapidAPI-Key': '28a99368c8msh158d941b1a4bd17p16d687jsn5202245154cb',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
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
