import './App.css';
import Education from './components/Education/Education';
import Languages from './components/Languages/Languages';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App tracking-widest text-zinc-500">
      <Navbar />
      <Education />
      <Languages />
    </div>
  );
}

export default App;
