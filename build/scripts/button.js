webpackJsonp([7],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),r=a(6),s=l(r),i=a(27),m=l(i),d=a(38),f=a(39),E=l(f),p=a(425),y={React:s["default"],ReactDOM:m["default"],Button:d.Button,Icon:d.Icon},B=function(e){function t(){return n(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),o(t,[{key:"render",value:function(){return s["default"].createElement("div",null,s["default"].createElement("h1",{className:"site-headline"},"Buttons"),s["default"].createElement("section",{className:"site-section"},s["default"].createElement("h3",{className:"site-subheadline"},"Button Types"),s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,null,"Default"),s["default"].createElement(d.Button,{type:"primary"},"Primary"),s["default"].createElement(d.Button,{type:"secondary"},"Secondary"),s["default"].createElement(d.Button,{outline:!0},"Default Outline"),s["default"].createElement(d.Button,{type:"primary",outline:!0},"Primary Outline"),s["default"].createElement(d.Button,{type:"link"},"Link"))),s["default"].createElement("section",{className:"site-section"},s["default"].createElement("h3",{className:"site-subheadline"},"Button Sizes"),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{size:"large"},"Large"),s["default"].createElement(d.Button,null,"Default"),s["default"].createElement(d.Button,{size:"small"},"Small"))),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{size:"large"},"Large"),s["default"].createElement(d.Button,{size:"large"},s["default"].createElement(d.Icon,{icon:"cog"})," Large"),s["default"].createElement(d.Button,{size:"large",iconOnly:!0},s["default"].createElement(d.Icon,{icon:"cog"})))),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,null,"Default"),s["default"].createElement(d.Button,null,s["default"].createElement(d.Icon,{icon:"cog"})," Default"),s["default"].createElement(d.Button,{iconOnly:!0},s["default"].createElement(d.Icon,{icon:"cog"})))),s["default"].createElement("div",null,s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{size:"small"},"Small"),s["default"].createElement(d.Button,{size:"small"},s["default"].createElement(d.Icon,{icon:"cog"})," Small"),s["default"].createElement(d.Button,{size:"small",iconOnly:!0},s["default"].createElement(d.Icon,{icon:"cog"}))))),s["default"].createElement("section",{className:"site-section"},s["default"].createElement("h3",{className:"site-subheadline"},"Button Modifiers"),s["default"].createElement("div",{className:"u-m-b-md"},s["default"].createElement("h5",{className:"site-miniheadline"},"Block Buttons"),s["default"].createElement("p",{className:"site-copy"},"Add ",s["default"].createElement("code",null,"block=","{true}")," to create a block level button."),s["default"].createElement(d.Button,{block:!0},"Block Button")),s["default"].createElement("div",null,s["default"].createElement("h5",{className:"site-miniheadline"},"Icon-Only Buttons"),s["default"].createElement("p",{className:"site-copy"},"Add ",s["default"].createElement("code",null,"iconOnly=","{true}")," when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance."),s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{iconOnly:!0},s["default"].createElement(d.Icon,{icon:"sms"})),s["default"].createElement(d.Button,{type:"primary",iconOnly:!0},s["default"].createElement(d.Icon,{icon:"email"})),s["default"].createElement(d.Button,{type:"secondary",iconOnly:!0},s["default"].createElement(d.Icon,{icon:"cog"})),s["default"].createElement(d.Button,{outline:!0,iconOnly:!0},s["default"].createElement(d.Icon,{icon:"clock"})),s["default"].createElement(d.Button,{outline:!0,type:"primary",iconOnly:!0},s["default"].createElement(d.Icon,{icon:"pencil"}))))),s["default"].createElement("section",{className:"site-section"},s["default"].createElement("h3",{className:"site-subheadline"},"Button States"),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,null,"Default"),s["default"].createElement(d.Button,{className:"active"},"Default Active"),s["default"].createElement(d.Button,{className:"disabled"},"Default Disabled"))),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{type:"primary"},"Primary"),s["default"].createElement(d.Button,{type:"primary",className:"active"},"Primary Active"),s["default"].createElement(d.Button,{type:"primary",className:"disabled"},"Primary Disabled"))),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{type:"secondary"},"Secondary"),s["default"].createElement(d.Button,{type:"secondary",className:"active"},"Secondary Active"),s["default"].createElement(d.Button,{type:"secondary",className:"disabled"},"Secondary Disabled"))),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{outline:!0},"Default Outline"),s["default"].createElement(d.Button,{outline:!0,className:"active"},"Default Outline Active"),s["default"].createElement(d.Button,{outline:!0,className:"disabled"},"Default Outline Disabled"))),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement("div",{className:"site-example-buttons"},s["default"].createElement(d.Button,{type:"primary",outline:!0},"Primary Outline"),s["default"].createElement(d.Button,{type:"primary",outline:!0,className:"active"},"Primary Outline Active"),s["default"].createElement(d.Button,{type:"primary",outline:!0,className:"disabled"},"Primary Outline Disabled")))),s["default"].createElement("section",{className:"site-section"},s["default"].createElement("h3",{className:"site-subheadline"},"Button Ellipsis"),s["default"].createElement("h5",{className:"site-miniheadline"},"Long Text Inside Buttons"),s["default"].createElement("p",null,"Wrap long button text in ",s["default"].createElement("code",null,"u-text-overflow")," utility class in order to allow ellipsis. This rule applies to dropdowns as well."),s["default"].createElement("div",{className:"u-m-b"},s["default"].createElement(d.Button,{className:"u-m-b-sm"},s["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name")),s["default"].createElement("br",null),s["default"].createElement(d.Button,null,s["default"].createElement(d.Icon,{icon:"lock"})," ",s["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name and Icon")))),s["default"].createElement("section",null,s["default"].createElement("h3",{className:"site-subheadline"},"Playground"),s["default"].createElement(E["default"],{codeText:p,scope:y,noRender:!1})))}}]),t}(s["default"].Component);B.displayName="Rhinostyle Button Example",m["default"].render(s["default"].createElement(B,null),document.getElementById("js-app"))},425:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buttons">\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary" iconOnly={true}><Icon icon="cog" /></Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
