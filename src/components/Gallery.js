import React from "react";
import CardComp from "./CardComp";

const data = [
  {
    id: 1,
    title: "monkey",
    desc: "a bitcoin with bla bla",
    subtitle: "leedong wwook",
  },
  {
    id: 2,
    title: "rakooon",
    desc: "an ether with bla bla",
    subtitle: "doraemon nobitahahahhaaaa",
  },
  {
    id: 3,
    title: "bandar",
    desc: "a phooti kaudi with bla bla",
    subtitle: "tereku kyu",
  },
  {
    id: 4,
    title: "banddsfdar",
    desc: "a phoosdvti kaudi with bla bla",
    subtitle: "tereku kyu",
  },
  {
    id: 11,
    title: "monkey",
    desc: "a bitcoin with bla bla",
    subtitle: "leedong wwook",
  },
  {
    id: 22,
    title: "rakooon",
    desc: "an ether with bla bla",
    subtitle: "doraemon nobitahahahhaaaa",
  },
  {
    id: 43,
    title: "bandar",
    desc: "a phooti kaudi with bla bla",
    subtitle: "tereku kyu",
  },
  {
    id: 44,
    title: "banddsfdar",
    desc: "a phoosdvti kaudi with bla bla",
    subtitle: "tereku kyu",
  },
];

const Gallery = () => {
  return (
    <div className="container-fluid m-0" style={{padding:'45px'}} >
       <div className="row">
       { data.map(record=><CardComp coin={record} key={record.id}/>)
        }
       </div>
    </div>
  );
};

export default Gallery;
