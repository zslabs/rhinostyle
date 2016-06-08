import React    from 'react';
import ReactDOM from 'react-dom';

import { LoaderPulse, LoaderLine } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const lineExample  = require('raw!./examples/LoaderLine.example.txt');
const pulseExample = require('raw!./examples/LoaderPulse.example.txt');
const lineScope = {
  React,
  ReactDOM,
  LoaderLine,
};
const pulseScope = {
  React,
  ReactDOM,
  LoaderPulse,
};

const LoaderApp = () =>
  <div>
    <h1 className="site-headline">Loaders</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Loader Pulse</h3>
      <LoaderPulse /><br />
      <LoaderPulse type="accent" /><br />
      <LoaderPulse type="secondary" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={pulseExample} scope={pulseScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Loader Line</h3>
      <LoaderLine />
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={lineExample} scope={lineScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<LoaderApp />, document.getElementById('js-app'));
