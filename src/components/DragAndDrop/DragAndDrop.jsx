import React from 'react';
import './DragAndDrop.css';
import uploadImg from '../../assets/cloud_upload.png';
import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import imgLogo from '../../assets/file-image-solid.svg';

const DragAndDrop = (props) => {
  const wrapperRef = useRef(null);

  const [file, setFile] = useState(null);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      console.log('newfile', newFile);
      setFile(newFile);
    }
  };

  useEffect(() => {
    props.onFileChange(file);
    console.log('use Effect called')
  }, [props, file]);

  const fileRemove = () => {
    setFile(null);
  };
  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag and Drop your files here</p>
        </div>
        <input type="file" name="file" value="" onChange={onFileDrop} />
      </div>

      {file != null ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          {
            <div className="drop-file-preview__item">
              <img src={imgLogo} alt="" />
              <div className="drop-file-preview__item__info">
                <p>{file.name}</p>
                <p>{file.size}B</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={fileRemove}
              >
                X
              </span>
            </div>
          }
        </div>
      ) : null}
    </>
  );
};

DragAndDrop.propTypes = {
  onFileChange: PropTypes.func,
};

export default DragAndDrop;
