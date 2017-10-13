import React from 'react';
import toastr from './toastr';
import 'toastr/build/toastr.min.css';

import { Panel, Button } from 'react-bootstrap';

function success() {
  toastr.success('Success!');
}

function info() {
  toastr.info('Keep trying...');
}

function warning() {
  toastr.warning("You are getting warmer.");
}

function error() {
  toastr.error("Better luck next time.");
}


const ToasterApp = (props) => {
  return (
    <Panel header='Toastr Demo' className="example">
      <p><b>toastr</b> is a Javascript library for non-blocking notifications.</p>
      <p>A demo illustrating all of toastr's features can be found <a href="http://codeseven.github.io/toastr/demo.html" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <p>This is a simple demo. The configuration for toastr in ./toastr.js and it is also listed below.</p>
      <p>NOTE: since <b>toastr</b> is a pure JavaScript API with some CSS, there is no need for a "react-toaster".</p>
      <hr/>
      <div>
        <Button bsStyle='warning' onClick={warning}>Click Me</Button>
        <Button bsStyle='info' onClick={info}>Click Me</Button>
        <Button bsStyle='success' onClick={success}>Click Me</Button>
        <Button bsStyle='danger' onClick={error}>Click Me</Button>
      </div>

      <h4>Here we are using the following toastr config:</h4>
      <pre style={{ textAlign: 'left' }}>
        {`
        {
          closeButton: false,
          debug: false,
          newestOnTop: false,
          progressBar: false,
          positionClass: 'toast-top-center',
          preventDuplicates: false,
          onclick: null,
          showDuration: 300,
          hideDuration: 1000,
          timeOut: '2000',
          extendedTimeOut: '1000',
          showEasing: 'swing',
          hideEasing: 'linear',
          showMethod: 'fadeIn',
          hideMethod: 'fadeOut'
        }`}
      </pre>
    </Panel>
  );
};

export default ToasterApp;
