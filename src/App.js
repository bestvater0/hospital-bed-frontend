import logo from './logo.svg';
import './App.css';
import hospital_bed from './resources/hospital_bed.jpg';

import ReactSlider from 'react-slider';
import * as React from 'react';

function App() {
  const [bedHeight, setBedHeight] = React.useState(0);
  const [legHeight, setLegHeight] = React.useState(20);

  const headerComponent = () => {
    return <div>Hospital Bed Lift Interface</div>
  }

  const imgContainer = () => {
    return <img src={hospital_bed} height={200} width={200} style={{padding: "2rem"}}/>
  }

  const handleBedHeightChange = (index) => {
    setBedHeight(index);
  }

  const handleLegHeightChange = (index) => {
    setLegHeight(index);
  }

  const bedHeightSlider = () => {
    return (
      <ReactSlider
        className="vertical-slider"
        thumbClassName="thumb"
        trackClassName="track"
        orientation="vertical"
        invert
        min={0}
        max={30}
        defaultValue={0}
        value={bedHeight}
        renderThumb={(props, state) => <div {...props} > {bedHeight}</div>}
        onChange={handleBedHeightChange}
      />
    )
  }

  const patientLegHeightSlider = () => {
    return (
      <ReactSlider
        className="vertical-slider"
        thumbClassName="thumb"
        trackClassName="track"
        orientation="vertical"
        invert
        min={0}
        max={30}
        defaultValue={0}
        value={legHeight}
        renderThumb={(props, state) => <div {...props} > {legHeight}</div>}
        onChange={handleLegHeightChange}
      />
    )
  }

  return (
    <div className="App">
      <header className="header">
        { headerComponent() }
      </header>
      <body className="body">
        <div>
          <div className="container">
            Bed Height
          </div>
          <div className="paddedContainer">
            { bedHeightSlider() }
          </div>
        </div>
        <div>
          <div className="container">
            Patient Lower Leg Length
          </div>
          <div className="paddedContainer">
            { patientLegHeightSlider() }
          </div>
        </div>
        { imgContainer() }
        <div style={{padding: "4rem"}}>
          <div>Adjust slider to move bed height as desired<br/>Current bed height is {bedHeight} cm</div>
          <div>Ideal safe bed height is {(legHeight * 1.2).toFixed(1)} cm</div>
        </div>
      </body>
    </div>
  );
}

export default App;
