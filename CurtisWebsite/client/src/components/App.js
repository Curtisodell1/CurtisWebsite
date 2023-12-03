import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
      <div id="TopRowContainer">
        <div id="BoxOne"></div>
        <div id="SpacerLeft"></div>
        <div id="BoxTwo"></div>
        <div id="SpacerRight"></div>
        <div id="BoxThree"></div>
      </div>
      <div id="BodyContainer">
        <div id="LeftColumnContainer">
          <div id="BoxFourAndSevenContainer">
            <div id="BoxFour"></div>
            <div id="BoxSeven"></div>
          </div>
        </div>
        <div id="MiddleAndMiddleBottom">
          <div id="MiddleAndRightContainer">
              <div id="MiddleLeftSpacer"></div>
              <div id="BoxFive"></div>
              <div id="MiddleRightSpacer"></div>
            <div id="BoxSixAndEightContainer">
              <div id="BoxSix"></div>
              <div className="RightColumnVerticalSpacer"></div>
              <div id="BoxEight"></div>
              <div className="RightColumnVerticalSpacer"></div>
              <div id="BoxEleven"></div>
              <div className="RightColumnVerticalSpacer"></div>
            </div>
          </div>
          <div id="MiddleBottomContainer">
          <div id="BoxNineTenAndElevenContainer">
            <div id="BoxNine"></div>
            <div id="NineTenSpacer"></div>
            <div id="BoxTen"></div>
          </div>
          </div>
        </div>
      </div>

      
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <h1>Hi</h1>
    </div>
  )
}

export default App;
