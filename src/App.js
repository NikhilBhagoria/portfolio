import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
const Home = React.lazy(() => import("./components/Home"));

function App() {
  return (
    <Router>
      <Route path='/home' name="home" element={<Home />} />
    </Router>
  );
}

export default App;
