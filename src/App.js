import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Router />
      <ScrollTop/>
    </BrowserRouter>
  );
}

export default App;
