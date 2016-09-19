webpackJsonp([18],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(3),c=a(i),u=n(10),d=a(u),f=n(12),m=n(16),v=a(m),p=n(604),C={body:"[Required] - Cover Body - Typically represented by a renderBody function that returns JSX",footer:"[Required] - Cover Footer - Typically represented by a renderFooter function that returns JSX",icon:"[Optional] - Attaches an Icon to the Cover Header",iconClassName:"[Optional] - Adds a class to the Cover Header icon",size:"[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body",title:"[Required] - Cover Title -  String to represent the Cover Header"},h={React:c["default"],ReactDOM:d["default"],Button:f.Button,Input:f.Input,CoverSystem:f.CoverSystem,Icon:f.Icon},y=function(e){function t(){var e,n,a,l;r(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return n=a=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={firstName:"",lastName:""},a.onClick=function(){f.CoverSystem.addCover(a.renderContent())},a.handleChange=function(e,t){var n={};n[e]=t,a.setState(n)},a.closeCover=function(){f.CoverSystem.removeCover()},a.saveChanges=function(){var e={};a.state.firstName||(e.firstName="FirstName is required!");var t=Object.keys(e).length;t>0?f.CoverSystem.refreshCover(a.renderContent(e)):a.closeCover()},a.renderContent=function(e){var t=e||{};return c["default"].createElement("div",null,c["default"].createElement(f.CoverHeader,{title:"This is a sample Cover"}),c["default"].createElement(f.CoverBody,null,c["default"].createElement("div",{className:"form"},c["default"].createElement("div",{className:"form__group"},c["default"].createElement(f.Input,{label:"First Name",name:"firstName",initialValue:a.state.firstName,validationMessage:t.firstName,required:!0,onChange:a.handleChange})),c["default"].createElement("div",null,c["default"].createElement(f.Input,{label:"Last Name",name:"lastName",initialValue:a.state.lastName,validationMessage:t.lastName,required:!0,onChange:a.handleChange})))),c["default"].createElement(f.CoverFooter,null,c["default"].createElement("div",{className:"u-text-right"},c["default"].createElement(f.Button,{type:"default",onClick:a.closeCover},"Close")," ",c["default"].createElement(f.Button,{type:"secondary",onClick:a.saveChanges},"Save Changes"))))},l=n,o(a,l)}return l(t,e),s(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Covers"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Cover Example"),c["default"].createElement("p",{className:"site-copy"},"To see a cover in action, ",c["default"].createElement("a",{href:"#",onClick:this.onClick},"click here"),".")),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement("p",{className:"site-copy"},"The following properties can be used in the object you pass into CoverSystem.addCover()."),c["default"].createElement(v["default"],{docClass:f.CoverContainer["default"],propDescriptionMap:C,codeText:p,scope:h,noRender:!1})))}}]),t}(c["default"].Component);d["default"].render(c["default"].createElement(y,null),document.getElementById("js-app"))},604:function(e,t){e.exports='class ComponentExample extends React.Component {\n  onClick = (event) => {\n    event.preventDefault();\n    CoverSystem.addCover({\n      body:         this.renderBody(),\n      footer:       this.renderFooter(),\n      title:        \'This is a sample Cover\',\n      icon:         \'cog\',\n    });\n  };\n\n  closeCover = () => {\n    CoverSystem.removeCover();\n  }\n\n  saveChanges = () => {\n    alert(\'the changes have been saved\');\n    this.closeCover();\n  }\n\n  renderBody = () => {\n    return (\n      <div className="form">\n        <div className="form__group">\n          <Input label="First Name" />\n        </div>\n        <div>\n          <Input label="Last Name" className="u-m-b-0" />\n        </div>\n      </div>\n    );\n  }\n\n  renderFooter = () => {\n    return (\n      <div className="u-text-right">\n        <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;\n        <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n      </div>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.onClick}>Launch Cover</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});