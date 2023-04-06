import './App.css';
import Dates from './components/Dates.js'
import Dashboard from './components/Dashboard.js'

function App() {
  return (
    <div className="App">
      <h1>Fuensanta</h1>
      <Dashboard/>
      <Dates date1="18 march 2023"></Dates>
    </div>
  );
}

export default App;
