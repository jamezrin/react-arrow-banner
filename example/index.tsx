import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ArrowBanner } from '../.';

const App = () => {
  return (
    <div>
      <ArrowBanner
        bgColor="#28227d"
        color="#ffffff"
        height="300px"
        skewDeg={40}
        width="300px"
      >
        Sample text
      </ArrowBanner>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
