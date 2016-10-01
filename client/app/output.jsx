// a placeholder for our output (button, run items) component
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';
import OutputLine from './outputLine.jsx';

var Promise = require('bluebird');

var Output = ({output}) => {
		return (
      <div id="console">
        Program Response:
        {output.map((line, index) => <OutputLine key={index} line={line}/>)}
      </div>
		)
}

export default Output;
