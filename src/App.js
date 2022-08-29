import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './components/home/Home';
import FirstLayer from './components/firstLayer/FirstLayer';
import SecondLayer from './components/secondLayer/SecondLayer';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="first-layer" element={<FirstLayer />} />
      <Route path="second-layer" element={<SecondLayer />} />
    </Routes>
  </>
);

export default App;
