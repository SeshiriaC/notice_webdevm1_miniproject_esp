import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

;

function App() {
  const [event, setEvent] = useState()

  useEffect(() => {
    getEvent()
  }, [])

  const getEvent = () => {
    setEvent()
  }
  

  return (
    <div className="App">
      <div>
       
      </div>
    </div>
  );
}

export default App;
