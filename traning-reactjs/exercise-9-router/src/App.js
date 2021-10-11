import './assets/scss/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Header, HeaderBanner } from './components';
import { Blog, Home, ProductDetail, Products } from './pages/Features';
import { Login } from './pages/Auth';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Account/Profile';

function App() {
  return (
    <Router>
      <HeaderBanner />
      <Header />
      <main>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/home' component={Home} />
          <Route exact path='/products' component={Products} />
          {/* dùng props.math để tạo param cho route */}
          <Route exact path='/products/:productId' component={ProductDetail} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/' component={Home} />
          <Route exact path='*' component={PageNotFound}/>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
