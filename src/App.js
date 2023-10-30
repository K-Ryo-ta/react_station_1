import { useState ,useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [Threads,setThreads] = useState([])
  
  useEffect(() => {
    fetch("https://" + process.env.REACT_APP_API + "/threads?offset=0",{method : "GET"})
      .then(res => res.json())
      .then(data => setThreads(data));
  }, []);

  console.log(Threads)
  
    return (
      <div className="App">
        <div className='head'>
          <div className='title'>
            <h1>掲示板</h1>
            <hr/>
          </div>
          <div className='create'>
            <Link className='button' to="/createNewThreads">スレッドを立てる</Link>
          </div>
        </div>
       
  
        <div className='sredList'>
          {Threads.map((Thread)=>(
          <div key = {Thread.id} className='sred'>
              <h1>{Thread.title}</h1>
          </div>))}
        </div>
      </div>
    );
  }
  
  export default App;
  
