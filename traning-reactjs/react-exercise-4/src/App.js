import './scss/styles.scss';
import Header_Banner from './components/Header-Banner';
import Header from './components/Header';
import Page_Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header_Banner />
      <Header />
      <Main/>
      <Page_Footer />
    </>
  );
}

export default App;
