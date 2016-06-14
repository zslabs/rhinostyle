webpackJsonp([5],{0:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var l=a(3),n=s(l),r=a(18),c=s(r),m=a(26),d=a(27),i=s(d),o=a(440),u={React:n["default"],ReactDOM:c["default"],Message:m.Message},f=function(){return n["default"].createElement("div",null,n["default"].createElement("h1",{className:"site-headline"},"Messages"),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Message Types"),n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'type="default | primary | secondary | note"')),n["default"].createElement("div",{className:"site-example-messages u-bg-gray-lighter u-p-a"},n["default"].createElement(m.Message,null,"Default Message ",n["default"].createElement("a",{href:"#"},"www.linktosomething.com")),n["default"].createElement(m.Message,{type:"primary"},"Primary Message ",n["default"].createElement("a",{href:"#"},"www.linktosomething.com")),n["default"].createElement(m.Message,{type:"secondary"},"Secondary Message ",n["default"].createElement("a",{href:"#"},"www.linktosomething.com")),n["default"].createElement(m.Message,{type:"note"},"Note Message ",n["default"].createElement("a",{href:"#"},"www.linktosomething.com")))),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Message Direction"),n["default"].createElement("div",{className:"u-m-b-md"},n["default"].createElement("h5",{className:"site-miniheadline"},"From Message"),n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'direction="from"')),n["default"].createElement("div",{className:"site-example-messages u-bg-gray-lighter u-p-a"},n["default"].createElement(m.Message,{direction:"from"},"Default Message"),n["default"].createElement(m.Message,{direction:"from",type:"primary"},"Primary Message"),n["default"].createElement(m.Message,{direction:"from",type:"secondary"},"Secondary Message"),n["default"].createElement(m.Message,{direction:"from",type:"note"},"Note Message"))),n["default"].createElement("div",{className:"u-m-b-md"},n["default"].createElement("h5",{className:"site-miniheadline"},"To Message"),n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'direction="to"')),n["default"].createElement("div",{className:"site-example-messages u-bg-gray-lighter u-p-a"},n["default"].createElement(m.Message,{direction:"to"},"Default Message"),n["default"].createElement(m.Message,{direction:"to",type:"primary"},"Primary Message"),n["default"].createElement(m.Message,{direction:"to",type:"secondary"},"Secondary Message"),n["default"].createElement(m.Message,{direction:"to",type:"note"},"Note Message")))),n["default"].createElement("section",null,n["default"].createElement("h3",{className:"site-subheadline"},"Playground"),n["default"].createElement(i["default"],{codeText:o,scope:u,noRender:!1})))};c["default"].render(n["default"].createElement(f,null),document.getElementById("js-app"))},440:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-messages u-bg-gray-lighter u-p-a">\n        <Message direction="to">\n          This is a default message.\n        </Message>\n        <Message direction="from" type="note">\n          This is a note.\n        </Message>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});