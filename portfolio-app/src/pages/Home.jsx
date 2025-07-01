import React from 'react';
import About from '../Component/About/Abouts';
import { Cards } from '../Component/Cards/Cards';

const Home = () => {
  return (
    <div className='main'>
      <About isPreview={true} />
      <h1 className='contact--title'>Projecten</h1>
      <Cards limit={3} />
     
    </div>
  );
};

export { Home };



// import React from 'react'
// import AboutHome from '../Component/About/AboutHome';
// import { Cards } from '../Component/Cards/Cards'
// import { Footer } from '../Component/Footer/Footer';
// const Home = () => {
//   return (
//     <div className='main'>
//       <AboutHome/>
//       <h1 className='contact--title'>Projecten</h1>
//       <Cards limit={3} />
//       <Footer/>
     
//     </div>
//   )
// }
// export {Home}