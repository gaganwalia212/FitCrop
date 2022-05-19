import React from 'react';
import classes from './FertilizerRecommendation.module.css';
import Loading from '../../components/Loading/Loading';
const FertilizerRecommendationForm = (props) => {
  const { isLoading, dataLoaded, result } = props;
  return (
    <form onSubmit={props.onSubmit}>
      <section className="table">
        <div className={classes.div__input}>
          <label htmlFor="temp">Temperature</label>
          <input className={classes.input} name="temp" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="hum">Humidity</label>
          <input className={classes.input} name="hum" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="moisture">Moisture</label>
          <input className={classes.input} name="moisture" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="soil_type">Soil Type</label>
          <select name="soil_type" className={classes.input} id="soil_choice">
            <option value="Sandy">Sandy</option>
            <option value="Loamy">Loamy</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Clayey">Clayey</option>
          </select>
        </div>
        <div className={classes.div__input}>
          <label htmlFor="crop_type">Crop Type</label>
          <select name="crop_type" id="crop_choice" className={classes.input}>
            <option value="Maize">Maize</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Cotton">Cotton</option>
            <option value="Tobacco">Tobacco</option>
            <option value="Paddy">Paddy</option>
            <option value="Barley">Barley</option>
            <option value="Wheat">Wheat</option>
            <option value="Millets">Millets</option>
            <option value="Oil seeds">Oil Seeds</option>
            <option value="Pulses">Pulses</option>
            <option value="Ground Nuts">Ground Nuts</option>
          </select>
        </div>
        <div className={classes.div__input}>
          <label htmlFor="N">Nitrogen</label>
          <input className={classes.input} name="N" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="K">Potassium</label>
          <input className={classes.input} name="K" type="number" />
        </div>
        <div className={classes.div__input}>
          <label htmlFor="P">Phosphorus</label>
          <input className={classes.input} name="P" type="number" />
        </div>
      </section>
      {isLoading && <Loading />}
      {!isLoading && dataLoaded && (
        <p className={classes.result}> Most Suitable Fertilizer is : <span className={classes.result_val}>{result}</span></p>
      )}
      <div className={classes.divBtn}>
        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FertilizerRecommendationForm;
