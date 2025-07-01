import React from 'react';
import About from '../Component/About/Abouts';
import Diensten from '../Component/Dienst/Diensten';
import Tech from '../Component/Tech/Tech';

const AboutPage = () => {
  return (
    <div className='main'>
      <About isPreview={false} />
      <h1 className='contact--title'>Technologie</h1>
      <Tech />
      <Diensten />
    </div>
  );
};

export { AboutPage as About };



// import React from 'react'
// import Abouts from '../Component/About/Abouts';
// import Diensten from '../Component/Dienst/Diensten';
// import { Footer } from '../Component/Footer/Footer';
// import Tech from '../Component/Tech/Tech';
// const About = () => {
//   return (
//     <div className='main'>
//       <Abouts />
//       <h1 className='contact--title'>Technologie</h1>
//       <Tech />
//       <Diensten/>
//       <Footer/>
//     </div>
//   )
// }
// export {About}