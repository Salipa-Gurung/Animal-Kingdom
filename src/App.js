import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Errorpage.css'
import { DetailPage, HomePage, Navbar } from './components';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <div className="App">
      
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
            <Navbar />
              <HomePage />
            </Route>
            <Route path="/detail/:id/:selectedCategory">
            <Navbar />
              <DetailPage />
            </Route>
            <Route>
              <Errorpage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
