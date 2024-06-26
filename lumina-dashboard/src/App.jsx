import { Switch, Route } from 'react-router-dom';

import SideBar from './components/SideBar';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import Categories from './pages/Categories';
import Users from './pages/Users';
import Sales from './pages/Sales';
import NotFound from './pages/NotFound';

import './App.css';
import '../public/css/luminaStyles.css';

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <Switch >
        <Route path='/' exact component={Home} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/categories' component={Categories} />
        <Route path='/users' component={Users}/>
        <Route path='/sales' component={Sales}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
