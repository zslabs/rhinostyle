webpackJsonp([4],{0:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(6),u=l(c),s=n(27),f=l(s),d=n(38),p=n(39),m=l(p),b=n(431),y={React:u["default"],ReactDOM:f["default"],Pill:d.Pill},h=function(e){function t(){return a(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement("h1",{className:"site-headline"},"Pills"),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Pill Types"),u["default"].createElement("div",{className:"site-example-pills"},u["default"].createElement(d.Pill,{label:"Ben Bruning"}),u["default"].createElement(d.Pill,{label:"Craig Anthony"}))),u["default"].createElement("section",null,u["default"].createElement("h3",{className:"site-subheadline"},"Playground"),u["default"].createElement(m["default"],{codeText:b,scope:y,noRender:!1})))}}]),t}(u["default"].Component);h.displayName="Rhinostyle Pill Example",f["default"].render(u["default"].createElement(h,null),document.getElementById("js-app"))},431:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-pills">\n        <Pill label="Ben" />\n        <Pill label="Click Me" click={() => alert(\'clicked!\')} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
