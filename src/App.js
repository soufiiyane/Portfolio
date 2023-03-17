import './assets/css/App.css';
import Menu from './components/Menu';
import Socials from './components/Socials';
import FloatingEmail from './components/FloatingEmail';
import Hero from './components/Hero';
import About from './components/About'; 
import Experience from './components/Experience';
import Work from './components/Work';
function App() {
  return (
    <div className="App">
      <Menu/>
      <div className='body-Container'>
          <div className='right-email'>
            <FloatingEmail/>
          </div>
          <main>
            <Hero/>
            <About/>
            <Experience/>
            <Work/>
          </main>
          <div className='left'>
            <Socials/>
          </div>
      </div>
    </div>
  );
}

export default App;
