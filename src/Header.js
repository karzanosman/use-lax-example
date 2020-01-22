import React from 'react';
import X from './img/x.png'
import A from './img/x.png'

function Header() {
  return (
    <div id="header" className="section">
      <img
        className="lax"
        alt="Letter L"
        src={X}
        style={{
          width: '103pt',
          marginLeft: '26pt',
          marginBottom: '-4pt',
        }}
        data-lax-translate-x="0 0, vh 200"
      />
      <img
        className="lax"
        alt="Letter A"
        src={A}
        data-lax-translate-x="0 0, vh -200"
      />
      <img
        className="lax"
        alt="Letter X"
        src={X}
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        className="lax"
        alt="Letter X"
        src={X}
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 200"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        className="lax"
        alt="Letter X"
        src={X}
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 400"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        className="lax"
        alt="Letter X"
        src={X}
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 600"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        className="lax"
        alt="Letter X"
        src={X}
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 800"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        className="lax"
        alt="Letter X"
        src={X}
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 1000"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <h2
        className="lax"
        data-lax-scale="0 1, vh 0.2"
        data-lax-translate-y="0 0, vh 1200"
        data-lax-opacity="0 1, (vh*0.5) 0"
      >
        awesum scroll effects
      </h2>

      <h4 className="lax" data-lax-opacity="0 1, (vh*0.05) 0">
        scroll down
      </h4>
      <i
        className="lax fas fa-chevron-down"
        data-lax-opacity="0 1, (vh*0.1) 0"
        data-lax-translate-y="0 0, 200 100"
      />
    </div>
  );
}

export default Header;
