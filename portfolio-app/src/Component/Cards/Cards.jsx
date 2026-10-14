import React from 'react';
import projectsData from '../../data/projects.json';
import Card from '../Card/Card';
import './Cards.css';

export const Cards = ({ limit = null, filterYear = null }) => {
  let projects = projectsData.projects;

  if (filterYear !== null && filterYear !== '') {
    projects = projects.filter(
      (project) => String(project.year) === String(filterYear)
    );
  }

  if (limit !== null) {
    projects = projects.slice(0, limit);
  }

  return (
    <section className="Cards" aria-label="Mijn projecten">
      {projects.length === 0 ? (
        <p className="Cards__empty">Geen projecten gevonden.</p>
      ) : (
        projects.map((project) => (
          <Card key={project.id} data={project} />
        ))
      )}
    </section>
  );
};


// import React from 'react';
// import projectsData from '../../data/projects.json'; // pas pad aan indien nodig
// import Card from '../Card/Card';
// import "./Cards.css"
// export const Cards = ({ limit = null, filterYear = null }) => {
//   // projects uit import
//   let projects = projectsData.projects;

//   // filter op jaar indien meegegeven
//   if (filterYear) {
//     projects = projects.filter(project => project.year === filterYear);
//   }

//   // limiet op aantal cards indien meegegeven
//   if (limit) {
//     projects = projects.slice(0, limit);
//   }

//   return (
//     <div className="Cards">
//       {projects.length === 0 && <p>Geen projecten gevonden.</p>}
//       {projects.map(data => (
//         <Card key={data.id} data={data} />
//       ))}
//     </div>
//   );
// };


