webpackJsonp([21],{0:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=t(3),m=l(n),r=t(8),s=l(r),i=t(12),c=t(15),u=l(c),d=t(605),o={className:"[Optional] - Include additional class name(s)",image:"[Optional] - Include source to image",name:"[Optional] - Name of Avatar, as a string",size:"[Optional] - Size of Avatar, as a string - [small | large]",type:"[Optional] - Type of Avatar, as a string -  [default | member]"},p={React:m["default"],ReactDOM:s["default"],Avatar:i.Avatar,Icon:i.Icon},f=function(){return m["default"].createElement("div",null,m["default"].createElement("h1",{className:"site-headline"},"Avatars"),m["default"].createElement("section",{className:"site-section"},m["default"].createElement("h3",{className:"site-subheadline"},"Avatar Types"),m["default"].createElement("div",{className:"u-m-b-md"},m["default"].createElement("h5",{className:"site-miniheadline"},"Default Avatar"),m["default"].createElement("p",{className:"site-copy"},m["default"].createElement("code",null,'type="default"')),m["default"].createElement("div",{className:"site-example-avatar"},m["default"].createElement(i.Avatar,{image:"//source.unsplash.com/category/people/200x200",name:"Ben Bruning"}),m["default"].createElement(i.Avatar,{name:"Ben Bruning"}),m["default"].createElement(i.Avatar,null))),m["default"].createElement("div",{className:"u-m-b-md"},m["default"].createElement("h5",{className:"site-miniheadline"},"Member Avatar"),m["default"].createElement("p",{className:"site-copy"},m["default"].createElement("code",null,'type="member"')),m["default"].createElement("div",{className:"site-example-avatar"},m["default"].createElement(i.Avatar,{image:"//source.unsplash.com/category/people/200x200",name:"Ben Bruning",type:"member"}),m["default"].createElement(i.Avatar,{name:"Ben Bruning",type:"member"}),m["default"].createElement(i.Avatar,{type:"member"})))),m["default"].createElement("section",{className:"site-section"},m["default"].createElement("h3",{className:"site-subheadline"},"Avatar Sizes"),m["default"].createElement("div",{className:"u-m-b-md"},m["default"].createElement("h5",{className:"site-miniheadline"},"Large Avatar"),m["default"].createElement("p",{className:"site-copy"},m["default"].createElement("code",null,'size="large"')),m["default"].createElement("div",{className:"site-example-avatar"},m["default"].createElement(i.Avatar,{image:"//bit.ly/1UfJ6KF",name:"Craig Anthony",size:"large",type:"member"}),m["default"].createElement(i.Avatar,{name:"Craig Anthony",size:"large",type:"member"}),m["default"].createElement(i.Avatar,{type:"member",size:"large"}))),m["default"].createElement("div",null,m["default"].createElement("h5",{className:"site-miniheadline"},"Small Avatar"),m["default"].createElement("p",{className:"site-copy"},m["default"].createElement("code",null,'size="small"')),m["default"].createElement("div",{className:"site-example-avatar"},m["default"].createElement(i.Avatar,{image:"//bit.ly/1UfJ6KF",name:"Craig Anthony",size:"small",type:"member"}),m["default"].createElement(i.Avatar,{name:"Craig Anthony",size:"small",type:"member"}),m["default"].createElement(i.Avatar,{type:"member",size:"small"})))),m["default"].createElement("section",null,m["default"].createElement("h3",{className:"site-subheadline"},"Playground"),m["default"].createElement(u["default"],{docClass:i.Avatar,propDescriptionMap:o,codeText:d,scope:p,noRender:!1})))};s["default"].render(m["default"].createElement(f,null),document.getElementById("js-app"))},605:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-avatar">\n        <div className="u-m-b">\n          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ben Bruning" size="large" type="member" />\n          <Avatar image="//brokenimage.jpg" name="Ben Bruning" size="large" type="member" />\n          <Avatar name="Ben Bruning" size="large" type="member" />\n          <Avatar size="large" type="member" />\n        </div>\n        <div className="u-m-b">\n          <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" />\n          <Avatar image="//badimage.jpg" name="Craig Anthony" />\n          <Avatar name="Craig Anthony" />\n          <Avatar />\n        </div>\n        <div>\n          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ian Greulich" size="small" type="member" />\n          <Avatar image="//badimage.jpg" name="Ian Greulich" size="small" type="member" />\n          <Avatar name="Ian Greulich" size="small" type="member" />\n          <Avatar size="small" type="member" />\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});