import React from 'react';
import cx    from 'classnames';

class Textarea extends React.Component {
  static displayName = 'RhinoTextarea';

  static propTypes = {
    label:        React.PropTypes.string,
    name:         React.PropTypes.string,
    placeholder:  React.PropTypes.string,
    rows:         React.PropTypes.number,
    initialValue: React.PropTypes.string,
  };

  static defaultProps = {
    label:       '',
    name:        '',
    placeholder: '',
    rows:        3,
  };

  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { label, name, placeholder, rows } = this.props;
    const classes = cx('form__control');

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label}</label>;
      }

      return false;
    };

    return (
      <div className="form__group">
        {showLabel()}
        <textarea className={classes} rows={rows} placeholder={placeholder} value={this.state.value} onChange={this._handleChange}></textarea>
      </div>
    );
  }
}

export default Textarea;
