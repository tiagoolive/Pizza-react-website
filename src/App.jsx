import { BrowserRouter as Router } from 'react-router-dom'
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Products';
import { ProductsData, ProductsData2 } from './components/Products/data';
import { GlobalStyles } from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Escolha a sua favorita" data={ProductsData} />
      <Feature />
      <Products heading="Doces feitos pra você!" data={ProductsData2} />
      <Footer />
    </Router>
  );
}

export default App;
