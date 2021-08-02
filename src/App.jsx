import { BrowserRouter as Router } from 'react-router-dom'
import Feature from './components/Feature';
import Hero from './components/Hero';
import Products from './components/Products';
import { ProductsData } from './components/Products/data';
import { GlobalStyles } from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Escolha a sua favorita" data={ProductsData} />
      <Feature />
    </Router>
  );
}

export default App;
