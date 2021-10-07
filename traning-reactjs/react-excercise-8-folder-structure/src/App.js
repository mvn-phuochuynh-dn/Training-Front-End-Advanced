import logo from './logo.svg';
import './App.css';
import Features from './pages/Features';
import { Footer, Header } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Features />
      </main>
      <Footer />
    </>

  );
}

export default App;
