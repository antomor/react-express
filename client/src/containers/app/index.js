import React from 'react';
import { Route} from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Header from '../../components/Header';
const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App