webpackJsonp([5],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(3),r=a(u),b=n(15),l=a(b),d=n(21),T=n(22),v=a(T),p=n(560),f={className:"[Optional] - Include additional class name(s)",select:"[Optional] - Include"},y={React:r["default"],ReactDOM:l["default"],Tabs:d.Tabs,TabsContent:d.TabsContent,TabContentPane:d.TabContentPane,NavTabs:d.NavTabs,NavTabsItem:d.NavTabsItem},m=function(e){function t(){var e,n,a,i;o(this,t);for(var c=arguments.length,u=Array(c),r=0;c>r;r++)u[r]=arguments[r];return n=a=s(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={activeKey:1,activeAutoKey:1,activeEqualKey:1},a.updateActiveKey=function(e){a.setState({activeKey:e})},a.updateActiveAutoKey=function(e){a.setState({activeAutoKey:e})},a.updateActiveEqualKey=function(e){a.setState({activeEqualKey:e})},i=n,s(a,i)}return i(t,e),c(t,[{key:"render",value:function(){return r["default"].createElement("div",null,r["default"].createElement("h1",{className:"site-headline"},"Tabs"),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"Tabs Playground"),r["default"].createElement(v["default"],{docClass:d.Tabs,propDescriptionMap:f,codeText:p,scope:y,noRender:!1})))}}]),t}(r["default"].Component);l["default"].render(r["default"].createElement(m,null),document.getElementById("js-app"))},560:function(e,t){e.exports='class ComponentExample extends React.Component {\n  state = {\n    activeKey: 1,\n    activeSubKey: 1,\n  };\n\n  updateActiveKey = (index) => {\n    this.setState({\n      activeKey: index,\n    });\n  };\n\n  updateActiveSubKey = (index) => {\n    this.setState({\n      activeSubKey: index,\n    });\n  };\n\n  render() {\n    return (\n    <div>\n      <Tabs activeKey={this.state.activeKey} select={this.updateActiveKey}>\n        <NavTabs>\n          <NavTabsItem id={1}>Tab One</NavTabsItem>\n          <NavTabsItem id={2}>Tab Two</NavTabsItem>\n          <NavTabsItem id={3}>Nested Tabs</NavTabsItem>\n        </NavTabs>\n        <TabsContent>\n          <TabContentPane id={1}>\n            Content 1\n          </TabContentPane>\n          <TabContentPane id={2}>Content 2</TabContentPane>\n          <TabContentPane id={3}>\n            <p className="u-m-b-lg">Nested tabs require a new updateActiveKey function!</p>\n            <Tabs activeKey={this.state.activeSubKey} select={this.updateActiveSubKey}>\n              <NavTabs>\n                <NavTabsItem id={1}>Nested Tab One</NavTabsItem>\n                <NavTabsItem id={2}>Nested Tab Two</NavTabsItem>\n              </NavTabs>\n              <TabsContent>\n                <TabContentPane id={1}>As well as a new activeSubKey!</TabContentPane>\n                <TabContentPane id={2}>Content 2</TabContentPane>\n              </TabsContent>\n            </Tabs>\n          </TabContentPane>\n        </TabsContent>\n      </Tabs>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});