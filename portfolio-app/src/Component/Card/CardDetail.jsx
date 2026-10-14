import React from 'react';
import './CardDetail.css';

const CardDetail = ({ data }) => {
  return (
    <article className="CardDetail">
      <div className="CardDetail__image">
        <img
          src={process.env.PUBLIC_URL + data.picture}
          alt={`Project: ${data.name}`}
        />
      </div>

      <div className="CardDetail__content">
        <div className="CardDetail__header">
          {data.year && (
            <span className="CardDetail__year">{data.year}</span>
          )}

          <h2>{data.name}</h2>
        </div>

        <p className="CardDetail__description">{data.info}</p>

        {(data.github || data.website) && (
          <div className="CardDetail__links">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}

            {data.website && (
              <a
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Bekijk website</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default CardDetail;


// import React from "react";
// import "./CardDetail.css"
// const CardDetail = ({ data }) => {
//   return (
//     <div className="CardDetail">
//       <div className="CardDetail__image">
//         <img src={process.env.PUBLIC_URL + data.picture} alt={data.name} />
//       </div>
//       <div className="CardDetail__content">
//         <h2>{data.name}</h2>
//         <p>{data.info}</p>
//         <div className="CardDetail__links">
//           {data.github && (
//             <a href={data.github} target="_blank" rel="noopener noreferrer">
//               GitHub
//             </a>
//           )}
//           {data.website && (
//             <a href={data.website} target="_blank" rel="noopener noreferrer">
//               Website
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetail;
