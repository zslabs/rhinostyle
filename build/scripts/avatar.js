webpackJsonp([8],{0:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=t(6),m=n(r),l=t(27),i=n(l),c=t(38),p=t(39),s=n(p),d=t(424),o={React:m["default"],ReactDOM:i["default"],Avatar:c.Avatar,Icon:c.Icon},u=function(){return m["default"].createElement("div",null,m["default"].createElement("h1",{className:"site-headline"},"Avatars"),m["default"].createElement("section",null,m["default"].createElement("h3",{className:"site-subheadline"},"Playground"),m["default"].createElement(s["default"],{codeText:d,scope:o,noRender:!1})))};i["default"].render(m["default"].createElement(u,null),document.getElementById("js-app"))},424:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      	<div className="site-example-avatar">\n          <Avatar image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" name="IG" size="large" type="member"></Avatar>\n          <Avatar image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105edE_400x400.jpeg" name="IG" size="large" type="member"></Avatar>\n          <Avatar name="IG" size="large" type="member"></Avatar>\n          <Avatar size="large" type="member"></Avatar>\n\n          <Avatar image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" name="IG"  type="patient"></Avatar>\n          <Avatar image="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105edE_400x400.jpeg" name="IG" type="patient"></Avatar>\n          <Avatar name="IG" type="patient"></Avatar>\n          <Avatar type="patient"></Avatar>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});