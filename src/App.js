import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>DAY 1</h1>
      {`from server=> ${message}`}
    </div>
  );
}

export default App;
