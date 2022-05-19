import React, { useState } from 'react';
import classes from './FertilizerRecommendation.module.css';
// import Loading from '../../components/Loading/Loading';
// import CropRecommendationResponse from '../../components/CropRecommendationResponse/CropRecommendationResponse';
import axios from 'axios';
import FertilizerRecommendationForm from './FertilizerRecommendationForm';
const FertilizerRecommendation = () => {
  // const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('Submitting Form');

    const formData = {
      "Temperature": event.target.temp.value,
      "Humidity ": event.target.hum.value,
      "Moisture": event.target.moisture.value,
      "Soil Type": event.target.soil_type.value,
      "Crop Type": event.target.crop_type.value,
      "Nitrogen": event.target.N.value,
      "Potassium": event.target.K.value,
      "Phosphorous": event.target.P.value,
    };

    try {
      setIsLoading(true);
      const bckend_data = await axios.post(
        'http://localhost:5000/fertilizer_recommend',
        formData
      );
      // setResult(bckend_data.data.result);
      setResult(bckend_data.data.result);
      setDataLoaded(true);
      setIsLoading(false);
      console.log(bckend_data.data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  // const onImageChange = (image) => {
  //   setImage(image);
  // };

  return (
    <>
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>Fertilizer Recommendation</h1>
          {/* <div className={classes.box}> */}
          <FertilizerRecommendationForm
            isLoading={isLoading}
            dataLoaded={dataLoaded}
            result={result}
            onSubmit={formSubmitHandler}
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default FertilizerRecommendation;
