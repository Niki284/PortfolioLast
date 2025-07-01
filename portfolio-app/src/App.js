import {Routes, Route, Link, Router} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Contact }from './pages/Contact';
import {Header} from './Component/Header/Header';
import { Projecten } from './pages/Projecten';
import { Detailproject } from './pages/DetailProjet';
import { Footer } from './Component/Footer/Footer';


import './App.css';

function App() {
   const data = 
  [
    {path:"/", name: 'Home', element:<Home/>},
    {path:"/about", name: 'About', element:<About/>},
    {path:"/projecten", name: 'Projecten', element:<Projecten/>},
    {path:"/contact", name: 'Contact', element:<Contact/>},
    {path:"/detail/:id", name: 'Detail', element:<Detailproject/>}
  ]

  return (
    <div>
      <Header links = {data}/>
      <Routes>
        {data.map(e=><Route key = {e.path} path = {e.path} element = {e.element}/>)}
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
