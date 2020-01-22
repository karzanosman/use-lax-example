import React from 'react';

function SectionOne() {
  return (
    <div id="section1" className="section">
      <div className="left">
        <div
          className="lax bubble a"
          style={{ background: '#EDD943' }}
          data-lax-preset="lazy-250"
        />

        <div
          className="lax bubble c"
          style={{ background: '#ED2471', marginLeft: '80pt' }}
          data-lax-preset="lazy-100"
        />

        <div
          className="lax bubble b"
          style={{ background: '#35D5E5', marginLeft: '160pt' }}
          data-lax-preset="lazy-300"
        />

        <h3
          data-lax-preset="driftRight"
          data-lax-optimize="true"
          className="lax chunkyText"
          style={{ color: '#35D5E5' }}
        >
          oooh!
        </h3>
      </div>

      <div className="right">
        <div
          className="lax bubble a"
          style={{ background: '#35D5E5', marginLeft: '120pt' }}
          data-lax-preset="lazy-200"
        />

        <div
          className="lax bubble c"
          style={{ background: '#EDD943', marginLeft: '-20pt' }}
          data-lax-preset="lazy-150"
        />

        <div
          className="lax bubble b"
          style={{
            background: '#ED2471',
            marginLeft: '20pt',
            marginTop: '200pt',
          }}
          data-lax-preset="lazy-350"
        />
        <h3
          data-lax-optimize="true"
          data-lax-preset="driftLeft"
          className="lax chunkyText"
          style={{ color: '#ED2471', marginTop: '200pt' }}
        >
          aaah!
        </h3>
      </div>

      <h3
        data-lax-preset="crazy zoomInOut"
        className="lax crazyText"
        data-lax-optimize="true"
      >
        sooo crazy
      </h3>
    </div>
  );
}

export default SectionOne;
