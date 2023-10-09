import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FetchDetails } from './components/fetchDetails';
function App() {
  return (
    <div className="App bg-dark container-fluid">
      <h1 className='text-center fs-2 pt-3 bg-dark text-light'>Dummy Data</h1>
      <FetchDetails />
    </div>
  );
}

export default App;
