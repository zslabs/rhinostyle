webpackJsonp([5],{0:function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var n=l(3),c=t(n),r=l(19),d=t(r),s=l(29),u=l(30),m=t(u),b=l(434),i={React:c["default"],ReactDOM:d["default"],Label:s.Label},o=function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Labels"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Label Types"),c["default"].createElement("div",{className:"site-example-labels"},c["default"].createElement(s.Label,{label:"default label"}),c["default"].createElement(s.Label,{type:"primary",label:"primary label"}),c["default"].createElement(s.Label,{type:"secondary",label:"secondary label"}),c["default"].createElement(s.Label,{type:"accent",label:"accent label"}))),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(m["default"],{codeText:b,scope:i,noRender:!1})))};d["default"].render(c["default"].createElement(o,null),document.getElementById("js-app"))},434:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-labels">\n        <Label label="ben bruning" />\n        <Label type="primary" label="craig anthony" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});