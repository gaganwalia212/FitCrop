import React, { useState } from 'react';
import DragAndDrop from '../../components/DragAndDrop/DragAndDrop';
import classes from './CropRecognition.module.css';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
const CropRecognition = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('Submitting Form');

    console.log(event.target);
    console.log(event.target.file);
    // console.log(file)

    // const formData = new FormData();
    // formData.append('inputfile',file)
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
        'http://localhost:5000/crop_recognition',
        new FormData(event.target)
      );
      setData(bckend_data.data.result);
      setDataLoaded(true);
      setIsLoading(false);
      console.log(bckend_data.data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  const onImageChange = (image) => {
    setImage(image);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Crop Recognition</h1>
        <div className={classes.box}>
          <form onSubmit={formSubmitHandler} encType="multipart/form-data">
            <DragAndDrop onChange={onImageChange} />
            {/* <input name="file" type="file" /> */}
            {isLoading && <Loading />}

            {!isLoading && dataLoaded && (
              <p className={classes.result}>
                Predicted Crop is :
                <span className={classes.result_val}>{data}</span>
              </p>
            )}
            <div className={classes.divBtn}>
              <button type="submit" className={classes.btn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CropRecognition;
