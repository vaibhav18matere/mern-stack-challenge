import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './pages/Navbar';
import UserForm from './components/UserForm';

function App() {

  const [message, setMessage] = useState("");
  const [name, setName] = useState('Vaibhav')

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  

  return (
    <div className="App">
      <h1>DAY 1</h1>
      {`from server=> ${message}`}
      <Navbar name={name} setName={setName}/>
      <UserForm/>
    </div>
  );
}

export default App;
