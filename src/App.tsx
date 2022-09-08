import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PanelGrid from './components/panels/PanelGrid';

function App() {
  return (
    <>
      <div className="container mx-auto my-32 px-4 lg:px-16 font-mono">
        <div className='flex flex-col gap-16'>
          <Header />
          <PanelGrid />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
