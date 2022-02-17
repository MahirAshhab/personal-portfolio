import './App.css';
import Education from './components/Education/Education';
import Languages from './components/Languages/Languages';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App tracking-widest text-zinc-500">
      <Navbar />
      <Education />
      <Languages />
      <Projects />
    </div>
  );
}

export default App;
