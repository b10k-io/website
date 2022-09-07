import './App.css';
import Header from './components/Header';
import PanelGrid from './components/panels/PanelGrid';

function App() {
  return (
    <div className="container mx-auto mt-32 px-16 font-mono">
      <div className='flex flex-col gap-16'>
        <Header />
        <PanelGrid />
      </div>
    </div>
  );
}

export default App;
