import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Hero from './components/Hero';

const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path="/" element={<Home />}>
    <Route index element={<Hero />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="contact" element={<Contact />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
