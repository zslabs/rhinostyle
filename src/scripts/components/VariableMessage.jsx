import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Button, FormLabel, FormExplanationMessage, FormValidationMessage, Message, Select, UtilitySystem } from '../components';

class VariableMessage extends React.Component {
  state = {
    message: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({
        message: this.props.initialValue,
      });
    }
  }

  componentDidMount() {
    if (this.props.initialValue) {
      this.compose.textContent = this.props.initialValue;
      this.handleInitValue();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        message: nextProps.initialValue,
      }, this.handleInitValue); // we need to run the init function everytime the component receives props to properly set the content edittable values.
    }
  }

  /**
   * Retrieves variables
   * Puts them in a flat-level array since some could be inside of `<optgroup>`s
   * @param  {array} array
   * @return {array}
   */
  getVariables = array => array.filter(item => item.id !== -1).reduce((a, b) => a.concat(b.options || b), []);

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  /**
   * Update variable insertion point and cursor position
   * @param  {string} text
   * @return {void}
   */
  insertTextAtCursor = (text, paste = false) => {
    const sel = window.getSelection();
    let range = document.createRange();

    // Make sure we're focused on the compose element
    this.compose.focus();

    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      //range.insertNode($space);
      if (paste) {
        range.insertNode(document.createTextNode(text));
      } else {
        range.insertNode(text);
      }

      // Move caret
      range.setStartAfter(text);
      range.setEndAfter(text);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  /**
   * Transform `{}` into styled component
   * @param  {string} text
   * @return {node}
   */
  transformVar = (text) => {
    // Re-assign text value for processing
    let value = text;

    // Replace text contents of variable to hide squigglies
    const regexSquiggles = /{(.*)?}/g;
    value = value.replace(regexSquiggles, '<i>{</i>$1<i>}</i>');

    // Replace text contents of variable to hide underscore
    const regexUnderscores = /_/g;
    value = value.replace(regexUnderscores, '<b>_</b>');

    // Build variable UI
    const $variable = document.createElement('span');
    // Disable spell-checker
    $variable.setAttribute('spellcheck', false);
    // Do not allow the variable to be edited
    $variable.setAttribute('contenteditable', false);
    $variable.classList.add('variable-message__variable');
    $variable.innerHTML = value;

    if (!this.props.readOnly) {
      const $close = document.createElement('span');
      $close.classList.add('variable-message__close');
      $variable.appendChild($close);
    }

    return $variable;
  }

  /**
   * Insert variable in cursor position
   * @param  {string} text
   * @return {void}
   */
  insertVariable = (text) => {
    const $variable = this.transformVar(text);

    this.insertTextAtCursor($variable);

    // Manually trigger `input` update
    this.handleComposeInput();
  }

  handleInitValue = () => {
    const { initialValue } = this.props;
    // Get flat-level list of all variables
    const variables = this.getVariables(this.props.variables);

    // Split `initialValue` to target variables
    const split = initialValue.split(/({\w+})/g);

    // Loop through variables
    variables.forEach((value) => {
      const { variable } = value;
      const foundVariable = split.indexOf(variable);

      // See if we've found one in our `initialValue`
      if (foundVariable !== -1) {
        // If so, transform the variable into HTML
        split[foundVariable] = this.transformVar(variable).outerHTML;
      }
    });

    // Set message content equal to new mixed content
    this.compose.innerHTML = split.join('');

    // Manually trigger `input` update
    this.handleComposeInput();
  }

  /**
   * Handle variable selection from `<Select>`
   * @param  {string} name  input[name]
   * @param  {string} value input[value]
   * @return {void}
   */
  handleVariableSelection = (name, value) => {
    // Get flat-level list of all variables
    // and variable context
    const variable = this.getVariables(this.props.variables).find(el => el.id === value);

    // If we're on a valid variable
    if (variable.variable) {
      // Get variable value
      const variableContext = variable.variable;

      // Insert variable
      this.insertVariable(variableContext);

      // Reset position
      this.select.setState({
        selected: 0,
      });

      // Focus back on compose element
      this.compose.focus();
    }
  }

  /**
   * Disable `<enter>` within compose window
   * @param  {event} e
   * @return {void}
   */
  handleComposeKeypress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
    }
  }

  /**
   * IE11 does not support the `input` event on `contenteditable` elements, so `keyup` is used instead to update
   * @return {void}
   */
  handleKeyUp = () => {
    // IE11 check
    if (!!window.MSInputMethodContext && !!document.documentMode) {
      this.handleComposeInput();
    }
  }

  /**
   * Make sure we force plain-text on paste
   * @param  {event} e
   * @return {void}
   */
  handlePaste = (e) => {
    e.preventDefault();

    if (e.clipboardData && e.clipboardData.getData) {
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
    } else if (window.clipboardData && window.clipboardData.getData) {
      const text = window.clipboardData.getData('Text');

      this.insertTextAtCursor(text, true);
    }
  }

  /**
   * Handle updating live-preview and variable swap
   * @return {void}
   */
  handleComposeInput = () => {
    const { variables } = this.props;
    // Get the rawMessage content to return onInput
    const rawMessage = this.compose.textContent.trim();

    // Get only the text representation of the message
    // so we can update our DB with it
    let message = rawMessage;
    const $select = ReactDOM.findDOMNode(this.select);
    const $preview = ReactDOM.findDOMNode(this.preview);

    // Update state
    this.setState({
      message,
    });

    if ($select) {
      // Search text to determine if variables are found in it
      this.getVariables(variables).forEach((value) => {
        const { variable } = value;

        if (variable) {
          // We found the text
          if (message.search(variable) !== -1) {
            // Disable option in select
            $select.querySelector(`[value="${value.id}"]`).setAttribute('disabled', 'disabled');

            // Swap out variables for data
            const regex = new RegExp(variable);
            message = message.replace(regex, value.variableValue);
          } else {
            // Enable option in select
            $select.querySelector(`[value="${value.id}"]`).removeAttribute('disabled');
          }
        }
      });
    }

    // Take away any trailing space
    if (message === ' ') {
      message = '';
    }

    // Update preview
    // May not be there based on `readOnly` prop
    if ($preview) {
      $preview.innerHTML = message;
    }

    if (this.props.onInput) {
      this.props.onInput(this.props.name, rawMessage, message);
    }
  }

  /**
   * Clicking on a variable inside the compose window should remove it
   * @param  {event} e
   * @return {void}
   */
  handleVariableClick = (e) => {
    if (e.target.classList.contains('variable-message__close')) {
      const $parent = e.target.parentNode;

      // Remove variable
      $parent.parentElement.removeChild($parent);

      // Manually trigger `input` update
      this.handleComposeInput();
    }
  }

  /**
   * Determine if we should show reset option
   * Tests for both the reset prop and if the initialValue is not equal to the current message state
   * @return {boolean}
   */
  showReset = () => this.props.reset && this.props.initialValue && (this.props.initialValue !== this.state.message);

  render() {
    const { characterCountTitle, characterCountWarningLength, className, composeLabel, explanationMessage, variableExplanationMessage, previewLabel, name, variables, readOnly, required, showCharacterCounter, validationMessage } = this.props;
    const classes = cx('form__group variable-message', className);
    const { message } = this.state;
    const characterCounterClasses = cx('variable-message__character-count', {
      'variable-message__character-count--warning': message.length >= characterCountWarningLength,
    });

    const variableMessageInputName = `variable-message-input-${this.id}`;
    const variableMessageSelectName = `variable-message-select-${this.id}`;
    const variableMessagePreviewName = `variable-message-preview-${this.id}`;

    return (
      <div className={classes} onClick={this.handleVariableClick}>
        {!readOnly &&
          <div className="variable-message__header">
            <FormLabel className="variable-message__label" id={variableMessageInputName} required={required}>{composeLabel}</FormLabel>
            {this.showReset() &&
              <div className="variable-message__reset">
                <Button reset className="u-text-muted u-text-small" onClick={this.handleInitValue}>Undo</Button>
              </div>
            }
          </div>
        }
        <div
          id={variableMessageInputName}
          className="variable-message__compose"
          contentEditable={!readOnly}
          onInput={this.handleComposeInput}
          onKeyPress={this.handleComposeKeypress}
          onKeyUp={this.handleKeyUp}
          onPaste={this.handlePaste}
          name={name}
          ref={ref => (this.compose = ref)}
        />
        <FormExplanationMessage explanationMessage={explanationMessage} />
        <FormValidationMessage validationMessage={validationMessage} />
        {!readOnly &&
          <Fragment>
            <div className="variable-message__footer">
              <div className="variable-message__footer__left">
                <Select
                  name={variableMessageSelectName}
                  options={variables}
                  onSelect={this.handleVariableSelection}
                  ref={ref => (this.select = ref)}
                />
                {variableExplanationMessage &&
                  <div className="variable-message__explanation">{variableExplanationMessage}</div>
                }
              </div>
              {showCharacterCounter &&
                <div title={characterCountTitle} className={characterCounterClasses}>
                  {message.length}
                </div>
              }
            </div>

            <div className="variable-message__preview">
              <FormLabel className="u-block" id={variableMessagePreviewName}>{previewLabel}</FormLabel>
              <Message type="primary" direction="inbound" ref={ref => (this.preview = ref)} />
            </div>
          </Fragment>
        }
      </div>
    );
  }
}

VariableMessage.propTypes = {
  characterCountTitle: PropTypes.string,
  characterCountWarningLength: PropTypes.number,
  className: PropTypes.string,
  composeLabel: PropTypes.string,
  explanationMessage: PropTypes.string,
  variableExplanationMessage: PropTypes.string,
  previewLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  reset: PropTypes.bool,
  variables: PropTypes.array.isRequired,
  onInput: PropTypes.func,
  initialValue: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  showCharacterCounter: PropTypes.bool,
  validationMessage: PropTypes.string,
};

VariableMessage.defaultProps = {
  composeLabel: 'Message',
  previewLabel: 'Preview',
  variableExplanationMessage: 'Select a variable to insert into the template',
};

export default VariableMessage;
