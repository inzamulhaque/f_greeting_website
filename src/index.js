import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";

const cssStyle = {

}

if (curDate >= 6 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "	#42ba96";
} else if (curDate >= 12 && curDate < 18) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else if (curDate >= 18 && curDate < 19) {
  greeting = "Good Evening";
  cssStyle.color = "blue";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1 >Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
    </div>
  </>,
  document.getElementById("root")
);