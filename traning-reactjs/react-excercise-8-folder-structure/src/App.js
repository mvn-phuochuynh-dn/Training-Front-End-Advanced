import logo from './logo.svg';
import './assets/scss/styles.scss'
import Features from './pages/Features';
import { Footer, Header, HeaderBanner } from './components';

function App() {
  return (
    <>
      <HeaderBanner />
      <Header />
      <main>
        <Features />
      </main>
      <Footer />
    </>

  );
}

export default App;
