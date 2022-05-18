import React from 'react';
import classes from './DiseaseRecognitionResponse.module.css';
const DiseaseRecognitionResponse = (props) => {
  const image = props.image;
  const { probability, result } = props.response;
  return (
    <div>
      <img src={image} alt={result} />
      <p>{result}</p>
      <ul>
        {Object.keys(probability).map((key, keyIdx) => {
          return (
            <li key={key}>
              {key} - {probability[key]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DiseaseRecognitionResponse;
