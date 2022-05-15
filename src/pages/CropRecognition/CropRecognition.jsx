// import React, { useState,useRef } from 'react';
// import DragAndDrop from '../../components/DragAndDrop/DragAndDrop';
import classes from './CropRecognition.module.css';
import axios from 'axios'
const CropRecognition = () => {
  // const [file, setFile] = useState(null);
  
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('Submitting Form');
    
    console.log(event.target)
    console.log(event.target.file)
    console.log(event.target.crop)
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
    const data = await axios.post('http://localhost:5000/crop_rec',new FormData(event.target))
    console.log(data)


  };

  // const onFileChange = (newFile) => {
  //   setFile(newFile);
  // };

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Crop Recognition</h1>
        <div className={classes.box}>
          <form onSubmit={formSubmitHandler} encType="multipart/form-data">
            {/* <DragAndDrop onFileChange={(files) => onFileChange(files)} /> */}
            <input name="file" type="file" />
            <div className={classes.choices}>
              <label htmlFor="crop">Choose Crop : </label>
              <select name="crop" id="crop_choice">
                <option value="Apple">Apple</option>
                <option value="Cherry">Cherry</option>
                <option value="Corn">Corn</option>
                <option value="Grapes">Grapes</option>
                <option value="Peach">Peach</option>
                <option value="Bell Pepper">Bell Pepper</option>
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
  );
};

export default CropRecognition;
