import React, { useState, useRef } from 'react';
import DragAndDrop from '../../components/DragAndDrop/DragAndDrop';
import classes from './DiseaseRecognition.module.css';
import Loading from '../../components/Loading/Loading';
import DiseaseRecognitionResponse from '../../components/DiseaseRecognitionResponse/DiseaseRecognitionResponse';
import axios from 'axios';
const DiseaseRecognition = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('Submitting Form');

    console.log(event.target);
    console.log(event.target.file);
    console.log(event.target.crop);
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
        'http://localhost:5000/disease_rec',
        new FormData(event.target)
      );
      setData(bckend_data.data);
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
    <>
      {isLoading && <Loading />}
      {!isLoading && !dataLoaded && (
        <div className={classes.container}>
          <div>
            <h1 className={classes.title}>Disease Recognition</h1>
            <div className={classes.box}>
              <form onSubmit={formSubmitHandler} encType="multipart/form-data">
                <DragAndDrop onChange={onImageChange} />
                {/* <input name="file" type="file" /> */}
                <div className={classes.choices}>
                  <label htmlFor="crop">Choose Crop : </label>
                  <select name="crop" id="crop_choice">
                    <option value="Apple">Apple</option>
                    <option value="Cherry">Cherry</option>
                    <option value="Corn">Corn</option>
                    <option value="Grape">Grapes</option>
                    <option value="Peach">Peach</option>
                    <option value="PepperBell">Bell Pepper</option>
                    <option value="Tomato">Tomato</option>
                    <option value="Potato">Potato</option>
                  </select>
                </div>
                <div className={classes.divBtn}>
                  <button type="submit" className={classes.btn}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {!isLoading && dataLoaded && (
        <DiseaseRecognitionResponse image={image} response={data} />
      )}
    </>
  );
};

export default DiseaseRecognition;
