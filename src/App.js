import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import VerbList from './pages/VerbList';
import HomePage from './pages/HomePage';
import VerbPage from './pages/VerbPage';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/list" exact element={<VerbList />} />
        <Route path="/:verb" exact element={<VerbPage />} />
      </Routes>
    </Router>
  );
}

export default App;
