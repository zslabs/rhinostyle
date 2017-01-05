webpackJsonp([14],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(3),o=n(u),d=a(8),r=n(d),m=a(12),f=a(15),v=n(f),p=a(634),b={activeKey:"[Optional] - Include active key",className:"[Optional] - Include additional class name(s)",justified:"[Optional] - Justified options -  [auto | equal | none]",select:"[Optional] - Include select function"},y={React:o["default"],ReactDOM:r["default"],NavTabs:m.NavTabs,NavTabsItem:m.NavTabsItem},N=function(e){function t(){var e,a,n,c;s(this,t);for(var i=arguments.length,u=Array(i),o=0;o<i;o++)u[o]=arguments[o];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={activeKey:1,activeStackedKey:3,activeEqualKey:1,activeAutoKey:1},n.updateActiveKey=function(e){n.setState({activeKey:e})},n.updateActiveStackedKey=function(e){n.setState({activeStackedKey:e})},n.updateActiveEqualKey=function(e){n.setState({activeEqualKey:e})},n.updateActiveAutoKey=function(e){n.setState({activeAutoKey:e})},c=a,l(n,c)}return c(t,e),i(t,[{key:"render",value:function(){return o["default"].createElement("div",null,o["default"].createElement("h1",{className:"site-headline"},"Navigation"),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Navigation"),o["default"].createElement("p",{className:"site-text-lead"},"Below you will find our set of navigation components. This page exists to demonstrate the UI of each - appearance, layout, animation, and active states. Some of these components may be used in conjunction with other components - see ",o["default"].createElement("a",{href:"../tabs"}," Tabs")," for example.")),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"NavTabs Types"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("p",{className:"site-copy"},o["default"].createElement("code",null,'type="default"')),o["default"].createElement(m.NavTabs,{activeKey:this.state.activeKey,onSelect:this.updateActiveKey},o["default"].createElement(m.NavTabsItem,{id:1},"Code"),o["default"].createElement(m.NavTabsItem,{id:2},"Issues"),o["default"].createElement(m.NavTabsItem,{id:3},"Pull Requests")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"NavTabs Modifiers"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Justifed, Equal Width"),o["default"].createElement("p",{className:"site-copy"},o["default"].createElement("code",null,'justified="equal"')),o["default"].createElement(m.NavTabs,{activeKey:this.state.activeEqualKey,onSelect:this.updateActiveEqualKey,justified:"equal"},o["default"].createElement(m.NavTabsItem,{id:1},"Code"),o["default"].createElement(m.NavTabsItem,{id:2},"Issues"),o["default"].createElement(m.NavTabsItem,{id:3},"Pull Requests"))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Justified, Auto Width"),o["default"].createElement("p",{className:"site-copy"},o["default"].createElement("code",null,'justified="auto"')),o["default"].createElement(m.NavTabs,{activeKey:this.state.activeAutoKey,onSelect:this.updateActiveAutoKey,justified:"auto"},o["default"].createElement(m.NavTabsItem,{id:1},"Code"),o["default"].createElement(m.NavTabsItem,{id:2},"Issues"),o["default"].createElement(m.NavTabsItem,{id:3},"Pull Requests")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"NavTabs Helper Class"),o["default"].createElement("p",{className:"site-copy"},"Use ",o["default"].createElement("code",null,".nav-tabs--stacked")," helper/modifier class (with CSS media queries) when necessary to collapse tabs into stacked layout. This is particularly useful on small screens."),o["default"].createElement("div",{style:{maxWidth:"32rem"}},o["default"].createElement(m.NavTabs,{activeKey:this.state.activeStackedKey,onSelect:this.updateActiveStackedKey,className:"nav-tabs--stacked"},o["default"].createElement(m.NavTabsItem,{id:1},"Code"),o["default"].createElement(m.NavTabsItem,{id:2},"Issues"),o["default"].createElement(m.NavTabsItem,{id:3},"Pull Requests")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"NavTabs Playground"),o["default"].createElement(v["default"],{docClass:m.NavTabs,propDescriptionMap:b,codeText:p,scope:y,noRender:!1})))}}]),t}(o["default"].Component);r["default"].render(o["default"].createElement(N,null),document.getElementById("js-app"))},634:function(e,t){e.exports="class ComponentExample extends React.Component {\n\n  state = {\n    activeKey: 1,\n  };\n\n  updateActiveKey = (index) => {\n    this.setState({\n      activeKey: index,\n    });\n  };\n\n  render() {\n    return (\n    <div>\n      <NavTabs activeKey={this.state.activeKey} onSelect={this.updateActiveKey}>\n        <NavTabsItem id={1}>Tab One</NavTabsItem>\n        <NavTabsItem id={2}>Tab Two</NavTabsItem>\n        <NavTabsItem id={3}>Tab Three</NavTabsItem>\n      </NavTabs>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"}});