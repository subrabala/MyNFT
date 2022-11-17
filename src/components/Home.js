import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Globe from "../assets/globe clear.png"
import Block from "../assets/blocks clear.png"
const Home=()=>{
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

        <div className="bodyof">
        <div className="dropbox">
          {!file && (
            <div className="contentmain" ><div className="maintext">Generate your own<span>NFTs</span>now!</div></div>

          )}
          {file && (
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="pictureFrame">
                            <img
                                src="./assets/Rectangle 2.png"
                                className="photoFrame"
                                alt="frame"
                            />                                          

                            {/* Generated image here */}

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
                src={Globe}
                className="globeimg hidden"
                alt="globe"
              />
            </div>
            <div className="blocks">
              <img
                src={Block}
                className="blocksimg hidden"
                alt="blocks"
              />
            </div>
          </>
        )}
        <div className="container">
          <div className="panel">
            <div className="button_outer">
              <Link className="btn_upload" onClick={() => {
                
              }}>
                 Generate NFT
              </Link> 
            </div>
          </div>
        </div>
      </div>
    
    )

}

export default Home