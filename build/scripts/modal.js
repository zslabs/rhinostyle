webpackJsonp([3],{0:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=t(3),l=a(o),d=t(10),s=a(d),r=t(8),i=t(15),c=a(i),m=t(650),u=t(653),p=t(651),M=t(652),f={className:"[Optional] - Additional class to add to modal div",size:"[Optional] - Modal size -  [ sm | lg ] - defaults to a normal sized modal"},h={icon:"[Optional] - Attaches an Icon to the Modal Header",iconClassName:"[Optional] - Adds a class to the Modal Header icon",onClose:"[Optional] - Callback function to execute in addition to closing the modal",title:"[Optional] - Modal Title -  String to represent the Modal Header"},N={React:l.default,ReactDOM:s.default,Button:r.Button,Input:r.Input,Modal:r.Modal,ModalSystem:r.ModalSystem,ModalHeader:r.ModalHeader,ModalBody:r.ModalBody,ModalFooter:r.ModalFooter,Icon:r.Icon},C=function(){return l.default.createElement("div",null,l.default.createElement("h1",{className:"site-headline"},"Modals"),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"Modal Example"),l.default.createElement("p",{className:"site-copy"},"You can inject a modal by calling ",l.default.createElement("code",null,"ModalSystem.addModal(modal)"),", where ",l.default.createElement("code",null,"modal")," can be ",l.default.createElement("code",null,"Modal")," containing ",l.default.createElement("code",null,"ModalHeader"),", ",l.default.createElement("code",null,"ModalBody"),", ",l.default.createElement("code",null,"ModalFooter"),"."),l.default.createElement(c.default,{docClass:r.Modal,propDescriptionMap:f,codeText:m,scope:N,noRender:!1})),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"ModalHeader"),l.default.createElement(c.default,{docClass:r.ModalHeader,propDescriptionMap:h,codeText:u,scope:N,noRender:!1})),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"ModalBody"),l.default.createElement(c.default,{docClass:r.ModalBody,codeText:p,scope:N,noRender:!1})),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"ModalFooter"),l.default.createElement(c.default,{docClass:r.ModalFooter,codeText:M,scope:N,noRender:!1})))};s.default.render(l.default.createElement(C,null),document.getElementById("js-app"))},650:function(e,n){e.exports='class ComponentExample extends React.Component {\n  state = {\n    firstName: \'\',\n    lastName: \'\',\n  }\n\n  onClick = () => {\n    ModalSystem.addModal(this.renderContent());\n  };\n\n  closeModal = () => {\n    ModalSystem.removeModal();\n  }\n\n  handleChange = (name, value) => {\n    const newState = {};\n\n    newState[name] = value;\n    this.setState(newState);\n  }\n\n  saveChanges = () => {\n    const errors = {};\n\n    if (!this.state.firstName) {\n      errors.firstName = \'FirstName is required!\';\n    }\n\n    if (!this.state.lastName) {\n      errors.lastName = \'LastName is required!\';\n    }\n\n    const errorCount  = Object.keys(errors).length\n\n    if (errorCount > 0) {\n      ModalSystem.refreshModal(this.renderContent(errors));\n    } else {\n      alert(\'Changes were saved!\');\n      this.closeModal();\n    }\n  }\n\n  renderContent = (errors) => {\n    const errorList = errors || {};\n\n    return (\n      <Modal>\n        <ModalHeader icon="pencil" title="Sample Modal" />\n        <ModalBody>\n          <div className="form">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n              <Input className="u-m-b-0" label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n          </div>\n        </ModalBody>\n        <ModalFooter>\n          <div className="u-text-right">\n            <Button type="default" onClick={this.closeModal}>Close</Button>&nbsp;\n            <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n          </div>\n        </ModalFooter>\n      </Modal>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.onClick}>Launch Modal</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},651:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <ModalBody>\n        <div className="form">\n          <div className="form__group">\n            <Input label="First Name" name="firstName" validationMessage="FirstName is required!" required />\n          </div>\n          <div>\n            <Input label="Last Name" name="lastName" />\n          </div>\n        </div>\n      </ModalBody>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},652:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <ModalFooter>\n        <div className="u-text-right">\n          <Button type="default">Close</Button>&nbsp;\n          <Button type="secondary">Save Changes</Button>\n        </div>\n      </ModalFooter>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},653:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <ModalHeader icon="pencil" title="This is a sample ModalHeader" />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});