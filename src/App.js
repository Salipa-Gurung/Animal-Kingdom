import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { DetailPage, HomePage, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/detail/:id/:selectedCategory">
              <DetailPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
