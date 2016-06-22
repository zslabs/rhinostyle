webpackJsonp([7],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(3),o=n(u),d=a(15),r=n(d),b=a(21),T=a(22),m=n(T),f=a(555),v={React:o["default"],ReactDOM:r["default"],Tabs:b.Tabs,TabsContent:b.TabsContent,TabContentPane:b.TabContentPane,NavTabs:b.NavTabs,NavTabsItem:b.NavTabsItem},E=function(e){function t(){var e,a,n,i;l(this,t);for(var c=arguments.length,u=Array(c),o=0;c>o;o++)u[o]=arguments[o];return a=n=s(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={activeKey:1,activeAutoKey:1,activeEqualKey:1},n.updateActiveKey=function(e){n.setState({activeKey:e})},n.updateActiveAutoKey=function(e){n.setState({activeAutoKey:e})},n.updateActiveEqualKey=function(e){n.setState({activeEqualKey:e})},i=a,s(n,i)}return i(t,e),c(t,[{key:"render",value:function(){return o["default"].createElement("div",null,o["default"].createElement("h1",{className:"site-headline"},"Navigation"),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Nav Tabs"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Default Tabs"),o["default"].createElement("p",{className:"site-copy"},"Default Tabs require a ",o["default"].createElement("code",null,"Tabs")," wrapper with ",o["default"].createElement("code",null,"NavTabs")," and ",o["default"].createElement("code",null,"TabsContent")," as children"),o["default"].createElement(b.Tabs,{activeKey:this.state.activeKey,select:this.updateActiveKey},o["default"].createElement(b.NavTabs,null,o["default"].createElement(b.NavTabsItem,{id:1},"Tab One"),o["default"].createElement(b.NavTabsItem,{id:2},"Tab Two"),o["default"].createElement(b.NavTabsItem,{id:3},"Tab Three")),o["default"].createElement(b.TabsContent,null,o["default"].createElement(b.TabContentPane,{id:1},"Content for Tab One"),o["default"].createElement(b.TabContentPane,{id:2},"Content for Tab Two"),o["default"].createElement(b.TabContentPane,{id:3},"Content for Tab Three"))))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Tab Modifiers"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Justifed, Equal Width Tabs"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,"nav-tabs--justified-equal")," class to ",o["default"].createElement("code",null,"nav-tabs"),". Each tab item will have equal width."),o["default"].createElement(b.Tabs,{activeKey:this.state.activeEqualKey,select:this.updateActiveEqualKey},o["default"].createElement(b.NavTabs,{justified:"equal"},o["default"].createElement(b.NavTabsItem,{id:1},"Tab One"),o["default"].createElement(b.NavTabsItem,{id:2},"Tab Two"),o["default"].createElement(b.NavTabsItem,{id:3},"Tab Three")),o["default"].createElement(b.TabsContent,null,o["default"].createElement(b.TabContentPane,{id:1},"Content for Tab One of Equal Width Tabs"),o["default"].createElement(b.TabContentPane,{id:2},"Content for Tab Two of Equal Width Tabs"),o["default"].createElement(b.TabContentPane,{id:3},"Content for Tab Three of Equal Width Tabs")))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Justified, Auto Width Tabs"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,"nav-tabs--justified-auto")," class to ",o["default"].createElement("code",null,"nav-tabs"),". Each tab item will have automatically determined width based on content."),o["default"].createElement(b.Tabs,{activeKey:this.state.activeAutoKey,select:this.updateActiveAutoKey},o["default"].createElement(b.NavTabs,{justified:"auto"},o["default"].createElement(b.NavTabsItem,{id:1},"Tab One - With a Really Long Title"),o["default"].createElement(b.NavTabsItem,{id:2},"Tab Two"),o["default"].createElement(b.NavTabsItem,{id:3},"Tab Three")),o["default"].createElement(b.TabsContent,null,o["default"].createElement(b.TabContentPane,{id:1},"Content for Tab One of Auto Width Tabs"),o["default"].createElement(b.TabContentPane,{id:2},"Content for Tab Two of Auto Width Tabs"),o["default"].createElement(b.TabContentPane,{id:3},"Content for Tab Three of Auto Width Tabs"))))),o["default"].createElement("div",null,o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Tab Types"),o["default"].createElement(m["default"],{codeText:f,scope:v,noRender:!1}))))}}]),t}(o["default"].Component);r["default"].render(o["default"].createElement(E,null),document.getElementById("js-app"))},555:function(e,t){e.exports='class ComponentExample extends React.Component {\n  state = {\n    activeKey: 1,\n    activeSubKey: 1,\n  };\n\n  updateActiveKey = (index) => {\n    this.setState({\n      activeKey: index,\n    });\n  };\n\n  updateActiveSubKey = (index) => {\n    this.setState({\n      activeSubKey: index,\n    });\n  };\n\n  render() {\n    return (\n    <div>\n      <Tabs activeKey={this.state.activeKey} select={this.updateActiveKey}>\n        <NavTabs>\n          <NavTabsItem id={1}>Tab One</NavTabsItem>\n          <NavTabsItem id={2}>Tab Two</NavTabsItem>\n          <NavTabsItem id={3}>Tab Three</NavTabsItem>\n        </NavTabs>\n        <TabsContent>\n          <TabContentPane id={1}>\n            Content 1\n          </TabContentPane>\n          <TabContentPane id={2}>Content 2</TabContentPane>\n          <TabContentPane id={3}>\n            <div className="u-m-b-md">\n              <h5 className="site-miniheadline">Nested Tabs: </h5>\n              <p className="site-copy">Nesting Tabs requires a new updateActiveKey function</p>\n              <Tabs activeKey={this.state.activeSubKey} select={this.updateActiveSubKey}>\n                <NavTabs>\n                  <NavTabsItem id={1}>Tab One</NavTabsItem>\n                  <NavTabsItem id={2}>Tab Two</NavTabsItem>\n                </NavTabs>\n                <TabsContent>\n                  <TabContentPane id={1}>As well as a new activeSubKey</TabContentPane>\n                  <TabContentPane id={2}>Content 2</TabContentPane>\n                </TabsContent>\n              </Tabs>\n            </div>\n          </TabContentPane>\n        </TabsContent>\n      </Tabs>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});