import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import { GlobalStyles } from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
}

export default App;
