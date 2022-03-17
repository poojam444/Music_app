import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Card from "./components/Card";
// import Sdata from "./components/Sdata";

// function mCard(val) {
//   console.log(val);
//   return (
//     <Card
//       title={val.title}
//       artist={val.artist}
//       img_src={val.img_src}
//       src={val.src}
//     />
//   );
// }
ReactDOM.render(
  <>
    <App />
    {/* <Card />
    {Sdata.map(function mCard(val){
      return(
        <Card
      title={val.title}
      artist={val.artist}
      img_src={val.img_src}
      src={val.src}
    />
      )
    })} */}
  </>,
  document.getElementById("root")
);
