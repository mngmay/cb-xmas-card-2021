import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import PageCover from "./components/PageCover";
import Page from "./components/Page";
import Interest from "./components/Interest";
import tree from "./assets/tree.png";
import chinCartoon from "./assets/cartoon-chin.png";
import baoCartoon from "./assets/cartoon-bao.png";
import c1 from "./assets/c1.jpeg";
import m from "./assets/m.jpeg";
import c2 from "./assets/c2.jpeg";
import cb from "./assets/cb.jpeg";
import tesla from "./assets/tesla.jpeg";
import stonks from "./assets/paperhands.jpeg";
import tacos from "./assets/cheaptacos.jpeg";
import date from "./assets/date.jpeg";
import cloy from "./assets/cloy.png";
import worms from "./assets/worms.jpeg";
import excel from "./assets/excel.jpeg";
import santa from "./assets/santa.png";
import {
  hideSnowflakes,
  showSnowflakes,
  startSnowflakes,
  stopSnowflakes,
} from "./snowflakes";

import "./styles.scss";

function App() {
  // constants
  const chinInterests = [
    {
      img: tesla,
      text: "Tesla & Elon",
    },
    {
      img: stonks,
      text: "Stonks & The Market",
    },
    {
      img: tacos,
      text: "Really Bad Cheap Tacos",
    },
  ];

  const baoInterests = [
    {
      img: cloy,
      text: "K-Dramas & Media",
    },
    {
      img: worms,
      text: "Gardening & Worms",
    },
    {
      img: excel,
      text: "Organizing & Excel",
    },
  ];

  const snowMsgs = {
    start: "Let it Snow!",
    stop: "Stop the Snow",
    show: "Show Snow",
    hide: "Hide Snow",
  };

  // state
  const [portrait, setPortrait] = useState(true);
  const [snow, setSnow] = useState(true);
  const [hideSnow, setHideSnow] = useState(false);
  const scrnWidth = window.innerWidth;
  const scrnHeight = window.innerHeight;

  useEffect(() => {
    function checkPortrait() {
      return scrnWidth <= 500 || scrnHeight <= 500;
    }
    setPortrait(checkPortrait());
  }, [scrnWidth, scrnHeight]);

  useEffect(() => {
    snow ? startSnowflakes() : stopSnowflakes();
    hideSnow ? hideSnowflakes() : showSnowflakes();
  }, [snow, hideSnow]);

  // button spacing

  return (
    <div className="container col">
      <div className="title">
        <h1>Ng Family Secret Santa 2021</h1>
      </div>
      <div className="buttons">
        <button
          className={snow && "active"}
          type="button"
          onClick={() => setSnow(!snow)}
        >
          {snow ? snowMsgs.stop : snowMsgs.start}
        </button>
        <button
          className={!hideSnow && "active"}
          type="button"
          onClick={() => setHideSnow(!hideSnow)}
        >
          {hideSnow ? snowMsgs.show : snowMsgs.hide}
        </button>
      </div>

      <div className="card-container row">
        <HTMLFlipBook
          size="stretch"
          width={600}
          height={600}
          minWidth={350}
          minHeight={350}
          maxWidth={600}
          maxHeight={600}
          showCover="true"
          showPortrait={portrait}
          mobileScrollSupport={true}
          drawShadow={false}
          ref={(el) => (HTMLFlipBook.flipBook = el)}
        >
          <PageCover type="front">
            <h2 className="cover-title">Merry Christmas</h2>
            <div className="avatar-container row">
              <div className="avatar col">
                <img
                  className="full-img"
                  src={chinCartoon}
                  alt="cartoon of a chin"
                />
                <h2 className="name">Chin</h2>
              </div>
              <span>&</span>
              <div className="avatar col">
                <img
                  className="full-img"
                  src={baoCartoon}
                  alt="cartoon of a bao"
                />
                <h2 className="name">Bao</h2>
              </div>
            </div>
            <img className="tree" src={tree} alt="christmas tree" />
          </PageCover>

          <Page pg="1">
            <h2>We thought of things that bring you joy</h2>
            <div className="row">
              <img className="main-img round camille" src={c1} alt="camille" />
            </div>
          </Page>

          <Page pg="2">
            <div className="row">
              <img className="half-img round clara" src={c2} alt="clara" />
              <img className="half-img round marcus" src={m} alt="marcus" />
            </div>
            <h2 className="pos-right">...besides your kids</h2>
          </Page>

          <Page pg="3">
            <h2>Chin finds joy in...</h2>
            <div className="interests col">
              {chinInterests.map(({ img, text }) => (
                <Interest key={`chin-${img}`} img={img} text={text} />
              ))}
            </div>
          </Page>

          <Page pg="4">
            <h2>Bao finds joy in...</h2>
            <div className="interests col">
              {baoInterests.map(({ img, text }) => (
                <Interest key={`bao-${img}`} img={img} text={text} />
              ))}
            </div>
          </Page>

          <Page pg="5">
            <h2>But we knew that over all those things...</h2>
            <img className="main-img" src={cb} alt="chin & bao" />
            <h2> ...you two bring each other the most joy!</h2>
          </Page>

          <Page pg="6">
            <h2>So enjoy a romantic date on us</h2>
            <img className="main-img" src={date} alt="romantic date" />
            <h2>with complimentary babysitting</h2>
          </Page>

          <PageCover type="back">
            <div className="col">
              <img className="main-img" src={santa} alt="secret santa" />
              <h2>Love, Secret Santas</h2>
            </div>
          </PageCover>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;
