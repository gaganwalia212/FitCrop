import React from 'react';
import classes from './CropRecommendation.module.css';
import Loading from '../../components/Loading/Loading';
const CropRecommendationForm = (props) => {
  const { isLoading, dataLoaded, result } = props;
  return (
    <form onSubmit={props.onSubmit}>
      <section className="table">
        <div className={classes.div__input}>
          <label htmlFor="N">Ratio of Nitrogen Content</label>
          <input className={classes.input} name="N" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="P">Ratio of Phosphorus Content</label>
          <input className={classes.input} name="P" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="K">Ratio of Potassium Content</label>
          <input className={classes.input} name="K" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="temp">Temperature (°C)</label>
          <input
            className={classes.input}
            name="temp"
            type="number"
            step="0.001"
          />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="hum">Humidity (%)</label>
          <input
            className={classes.input}
            name="hum"
            type="number"
            step="0.001"
            min="0"
            max="100"
          />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="ph">pH value</label>
          <input
            className={classes.input}
            name="ph"
            type="number"
            min="1"
            max="7"
            step="0.1"
          />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="rain">Rainfall (mm)</label>
          <input
            className={classes.input}
            name="rain"
            type="number"
            step="0.001"
          />
        </div>
      </section>
      {isLoading && <Loading />}
      {!isLoading && dataLoaded && (
        <p className={classes.result}> Predicted Crop is : <span className={classes.result_val}>{result}</span></p>
      )}
      <div className={classes.divBtn}>
        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CropRecommendationForm;
