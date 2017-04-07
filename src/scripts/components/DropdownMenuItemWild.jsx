import React from 'react';
import cx from 'classnames';

import { Close } from '../components';

class DropdownMenuItemWild extends React.Component {
  static displayName = 'RhinoDropdownMenuItemWild';

  static propTypes = {
    children:        React.PropTypes.node,
    className:       React.PropTypes.string,
    handleToggle:    React.PropTypes.func,
    toggleDropdown:  React.PropTypes.bool,
  };

  static defaultProps = {
    handleToggle:    () => {},
    toggleDropdown:  false,
  };

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, (child) => {
      if (!child) return false;

      if (!child.type) {
        returnChild = child;
      } else if (child.type === Close) {
        returnChild = React.cloneElement(child, {
          onClick: this.handleCloseClick,
          className: cx(child.props.className, 'dropdown__menu__close'),
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  /**
   * Close dropdown with `<Close />` click
   * @return {void}
   */
  handleCloseClick = () => {
    this.props.handleToggle();
  }

  /**
   * Enable closing dropdown with click on wild content if `toggleDropdown` prop is passed
   * @return {void}
   */
  handleClick = () => {
    if (this.props.toggleDropdown) {
      this.props.handleToggle();
    }
  }

  render() {
    const { className } = this.props;
    const classes = cx('dropdown__menu__container', className);

    return (
      <div className={classes} onClick={this.handleClick}>
        {this.getChildren()}
      </div>
    );
  }
}

export default DropdownMenuItemWild;
