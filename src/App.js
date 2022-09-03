import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './components/home/Home';
import FirstLayer from './components/firstLayer/FirstLayer';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="first-layer" element={<FirstLayer />} />
    </Routes>
  </BrowserRouter>
);

export default App;
