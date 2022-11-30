import React from "react";
import CardComp from "./CardComp";

const data = [
  {
    image:"Rectangle 25.png",
    id: 1,
    title: "001284829 ETH",
    desc: "Rakoon",
  },
  {
    image:"Rectangle 10.png",
    id: 2,
    title: "0284924849 ETH",
    desc: "Chimtu",
  },
  {
    image:"Rectangle 13.png",
    id: 3,
    title: "0284924849 ETH",
    desc: "Shocoa",
  },
  {
    id: 4,
    image:"Rectangle 10.png",
    title: "0284924849 ETH",
    desc: "Ramboo",
  },
  {
    id: 11,
    title: "0284924849 ETH",
    desc: "Kriyum",

  }
];

const Gallery = () => {
  return (
    <div className="container-fluid m-0" style={{padding:'45px', height:"500px", overflow:"auto"}} >
       <div className="row">
       { data.map(record=><CardComp image={record.img} coin={record} key={record.id}/>)
        }
       </div>
    </div>
  );
};

export default Gallery;
