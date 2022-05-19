import React, { useState } from 'react';
import classes from './CropRecommendation.module.css';
// import Loading from '../../components/Loading/Loading';
// import CropRecommendationResponse from '../../components/CropRecommendationResponse/CropRecommendationResponse';
import axios from 'axios';
import CropRecommendationForm from './CropRecommendationForm';
const CropRecommendation = () => {
  // const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('Submitting Form');

    const formData = {
      N: event.target.N.value,
      P: event.target.P.value,
      K: event.target.K.value,
      temperature: event.target.temp.value,
      humidity: event.target.hum.value,
      ph: event.target.ph.value,
      rainfall: event.target.rain.value,
    };

    // console.log(event.target.N.value);
    // console.log(event.target.P);
    // console.log(event.target.K);
    // console.log(event.target.temp);
    // console.log(event.target.hum);
    // console.log(event.target.ph);
    // console.log(event.target.rain);

    // console.log(event.target.file);
    // console.log(event.target.crop);
    // console.log(file)

    // const formData = new FormData();
    // formData.append('N',event.target.N)
    // formData.append('file',event.target.file)
    // formData.append('crop',event.target.crop)
    // formData.append()
    // formData.append('file', file);
    // formData.append('crop', event.target[1].value);
    // console.log(formData);
    // console.log(formData.get('file'));
    try {
      setIsLoading(true);
      const bckend_data = await axios.post(
        'http://localhost:5000/crop_recommend',
        formData
      );
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
          <h1 className={classes.title}>Crop Recommendation</h1>
          <div className={classes.box}>
            <CropRecommendationForm
              isLoading={isLoading}
              dataLoaded={dataLoaded}
              result={result}
              onSubmit={formSubmitHandler}
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CropRecommendation;
