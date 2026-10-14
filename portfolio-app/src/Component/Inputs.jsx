import React from 'react';

export default function Inputs({ data }) {
  const [name, label] = data;

  const inputTypes = {
    Firstname: 'text',
    Lastname: 'text',
    Email: 'email',
    Gsm: 'tel',
  };

  const fieldNames = {
    Firstname: 'name',
    Lastname: 'lastname',
    Email: 'email',
    Gsm: 'phone',
  };

  const autoCompleteValues = {
    Firstname: 'given-name',
    Lastname: 'family-name',
    Email: 'email',
    Gsm: 'tel',
  };

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        type={inputTypes[name] || 'text'}
        name={fieldNames[name] || name}
        placeholder={label}
        autoComplete={autoCompleteValues[name] || 'off'}
        required={name !== 'Gsm'}
      />
    </div>
  );
}





// eerste versie 
// import React from 'react';

// export default function Inputs({ data }) {
//   const [name, label] = data;

//   const inputTypes = {
//     Firstname: 'text',
//     Lastname: 'text',
//     Email: 'email',
//     Gsm: 'tel',
//   };
//   const fieldNames = {
//   Firstname: 'name',
//   Lastname: 'lastname',
//   Email: 'email',
//   Gsm: 'phone',
// };

//   const inputType = inputTypes[name] || 'text';

//   return (
//     <div className="input-group">
//       <label htmlFor={name}>{label}</label>

//       <input
//         id={name}
//         type={inputType}
//         name={name}
//         placeholder={label}
//         autoComplete={
//           name === 'Firstname' ? 'given-name' :
//           name === 'Lastname' ? 'family-name' :
//           name === 'Email' ? 'email' :
//           name === 'Gsm' ? 'tel' : 'off'
//         }
//         required={name !== 'Gsm'}
//       />
//       <input
//   id={name}
//   type={inputType}
//   name={fieldNames[name]}
//   placeholder={label}
//   required={name !== 'Gsm'}
// />
//     </div>
//   );
// }




// import React from 'react';

// export default function Inputs({ data }) {
//   return (
//     <div className="input-group">
//       <label htmlFor={data[0]}>{data[1]}</label>
//       <input type="text" name={data[0]} placeholder={data[1]} />
//     </div>
//   );
// }
