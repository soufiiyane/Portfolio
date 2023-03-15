import './assets/css/App.css';
import Menu from './components/Menu';
import Socials from './components/Socials';
import FloatingEmail from './components/FloatingEmail';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      <Menu/>
      <div className='body-Container'>
          <div className='right'>
            <FloatingEmail/>
          </div>
          <main>
            <Hero/>
          </main>
          <div className='left'>
            <Socials/>
          </div>
      </div>
    </div>
  );
}

export default App;
