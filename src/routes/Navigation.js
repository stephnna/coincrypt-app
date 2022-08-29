import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <h1>Financial Sentiments App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/first-layer">First Layer</Link></li>
        <li><Link to="/second-layer">Second Layer</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
