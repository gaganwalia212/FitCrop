import React from 'react';
import classes from './DiseaseRecognitionResponse.module.css';
const DiseaseRecognitionResponse = (props) => {
  const image = props.image;
  const { probability, result } = props.response;
  return (
    <div className={classes.container}>
      <h2 className={classes.head}>Disease Prediction</h2>
      <img className={classes.image} src={image} alt={result} />

      <p className={classes.result}>Predicted Result : <span>{result}</span></p>
      <table>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(probability).map((key, keyIdx) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{probability[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DiseaseRecognitionResponse;
