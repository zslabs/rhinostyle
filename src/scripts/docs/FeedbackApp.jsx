import React    from 'react';
import ReactDOM from 'react-dom';

import { Alert, Button, Icon, NotificationActions, SystemAlert, Toast } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const alertExample = require('raw!./examples/Alert.example.txt');
const alertDocs = {
  className: '[Optional] - Include additional class name(s)',
  dismissible: '[Optional] - Include close button used to dismiss alert',
  onDismiss: '[Optional] - Include dismiss function',
  title: '[Required] - Alert title text',
  titleIcon: '[Optional] - Alert title icon',
  type: '[Optional] - Alert type, as a string -  [danger | default | info | success | warning | outline-danger | outline-default | outline-info | outline-success | outline-warning ]',
};


const toastExample = require('raw!./examples/Toast.example.txt');
const toastDocs = {
  body: '[Required] - Toast body text',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Include icon name',
  onDismiss: '[Required] - Include dismiss function',
  type: '[Optional] - Toast type, as a string -  [danger | default | success]',
};
const systemAlertExample = require('raw!./examples/SystemAlert.example.txt');
const systemAlertDocs = {
  body: '[Required] - SystemAlert body text',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Include icon name',
  onDismiss: '[Required] - Include dismiss function',
  type: '[Optional] - SystemAlert type, as a string -  [danger | default | info | success]',
  url: '[Optional] - SystemAlert url, as a string',
};

const alertScope = {
  React,
  ReactDOM,
  Alert,
  Button,
  Icon,
};
const toastScope = {
  React,
  ReactDOM,
  Toast,
  Icon,
};
const systemAlertScope = {
  React,
  ReactDOM,
  SystemAlert,
  Icon,
};


class FeedbackApp extends React.Component {
  static displayName = 'Rhinostyle Feedback Examples';

  onClick = (event) => {
    event.preventDefault();

    NotificationActions.addNotification({
      body: 'This is an alert in a toast notification',
      icon: 'warning',
      type: 'danger',
      onDismiss() {
        /* eslint no-console:0 */
        console.log('I run when the notification was dismissed');
      },
    });
  }

  render() {
    return (
      <div>
        <h1 className="site-headline">Feedback</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Feedback</h3>
          <p className="site-text-lead">Numberous components make up our feedback system: Alert, SystemAlert, and Toast.</p>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Alert</h3>
          <div className="u-m-b-lg">
            <div className="site-example-alerts">
              <Alert title="This is a danger alert!" titleIcon="star" type="danger" dismissible>This is a danger alert for dangerous stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a defualt  alert!" titleIcon="star" dismissible>This is a default alert for defualt stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a info alert!" titleIcon="star" type="info" dismissible>This is a info alert for info stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a success alert!" titleIcon="star" type="success" dismissible>This is a success alert for success stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a warning alert!" titleIcon="star" type="warning" dismissible>This is a warning alert for warning stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a outline danger alert!" titleIcon="star" type="outline-danger" dismissible>This is a danger alert for dangerous stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a outline defualt  alert!" titleIcon="star" type="outline-default" dismissible>This is a default alert for defualt stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a outline info alert!" titleIcon="star" type="outline-info" dismissible>This is a info alert for info stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a outline success alert!" titleIcon="star" type="outline-success" dismissible>This is a success alert for success stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
              <Alert title="This is a outline warning alert!" titleIcon="star" type="outline-warning" dismissible>This is a warning alert for warning stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
            </div>
          </div>
          <h3 className="site-subheadline">Alert Playground</h3>
          <Playground docClass={Alert} propDescriptionMap={alertDocs} codeText={alertExample} scope={alertScope} noRender={false} />
        </section>
        <section className="site-section">
          <h3 className="site-subheadline">SystemAlert</h3>
          <div className="u-m-b-lg">
            <div className="site-example-systemalerts">
              <SystemAlert type="danger" body="Danger System Alert" />
              <SystemAlert type="default" body="Default System Alert" />
              <SystemAlert type="info" body="Info System Alert" />
              <SystemAlert type="success" body="Success System Alert" />
            </div>
          </div>
          <h3 className="site-subheadline">SystemAlert Playground</h3>
          <Playground docClass={SystemAlert} propDescriptionMap={systemAlertDocs} codeText={systemAlertExample} scope={systemAlertScope} noRender={false} />
        </section>
        <section>
          <h3 className="site-subheadline">Toast</h3>
          <p className="site-copy">To see a toast in action, <a href="#" onClick={this.onClick}>click here</a>.</p>
          <div className="site-example-toasts u-m-b-lg">
            <Toast type="default" body="Default toast notification" />
            <Toast type="success" icon="checkmark" body="Success toast notification" />
            <Toast type="danger" body="Danger toast notification" />
          </div>
          <h3 className="site-subheadline">Toast Playground</h3>
          <Playground docClass={Toast} propDescriptionMap={toastDocs} codeText={toastExample} scope={toastScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<FeedbackApp />, document.getElementById('js-app'));
