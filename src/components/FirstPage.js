import React, { useRef, useState } from "react";

const FirstPage = () => {
  const [file, setFile] = useState();
  const fileRef = useRef();

  const handleFile = (e) => {
    const filesUploaded = e.target.files;
    if (filesUploaded?.length) {
      setFile(filesUploaded[0]);
    } else {
      setFile();
    }
  };

  return (
    <div className="firstpage">
      <nav className="navbar navbar-expand-lg  m-0 d-flex justify-content-center">
        <a className="navbar-brand" href="#">
          <img src="/assets/logo.png" className="logo-brand" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav">
            <div id="marker"></div>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Top
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bodyof">
        <div className="dropbox">
          {!file && (
            <img
              src="assets/drag_box.png"
              className="dropboximg hidden"
              alt="dragbox"
            />
          )}
          {file && (
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="pictureFrame">
                            <img
                                src="assets/Rectangle 2.png"
                                className="photoFrame"
                                alt="frame"
                            />
                            <img className="uploadedPhoto" src={URL.createObjectURL(file)} alt="display" />
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
        {!file && (
          <>
            <div className="globe">
              <img
                src="assets/globe clear.png"
                className="globeimg hidden"
                alt="globe"
              />
            </div>
            <div className="blocks">
              <img
                src="assets/blocks clear.png"
                className="blocksimg hidden"
                alt="blocks"
              />
            </div>
          </>
        )}
        <div className="container">
          <div className="panel">
            <div className="button_outer">
              <input
                ref={fileRef}
                type="file"
                id="upload_file"
                name=""
                onChange={handleFile}
              />
              {file ? <div
                className="btn_upload"
                onClick={() => {}}
              >
                 Generate NFT
              </div> :
              <div
                className="btn_upload"
                onClick={() => fileRef.click()}
              >
                 Upload
              </div>
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
