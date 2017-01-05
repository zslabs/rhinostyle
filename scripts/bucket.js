webpackJsonp([7],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var u=a(3),c=n(u),l=a(8),r=n(l),d=a(12),i=a(15),s=n(i),o=a(607),m={className:"[Optional] - Include additional class name(s)",size:"[Optional] - Bucket size -  [small]",type:"[Optional] - Bucket type -  [default | light | primary]"},B={React:c["default"],ReactDOM:r["default"],Bucket:d.Bucket,BucketBody:d.BucketBody,BucketHeader:d.BucketHeader,Icon:d.Icon,Table:d.Table},k=a(608),p={className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Icon name",iconClassName:"[Optional] - Include additional class name(s) for icon",title:"[Optional] - Include tile for header"},y={React:c["default"],ReactDOM:r["default"],BucketHeader:d.BucketHeader,Icon:d.Icon},f=function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Buckets"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Buckets"),c["default"].createElement("p",{className:"site-text-lead"},"Buckets are used to contain and separate portions of content. Buckets are most often constructed using ",c["default"].createElement("span",{className:"u-text-accent"},"BucketHeader")," and ",c["default"].createElement("span",{className:"u-text-accent"},"BucketBody")," child components.")),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Bucket Types"),c["default"].createElement("p",{className:"site-copy"},c["default"].createElement("code",null,'type="default | light | primary"')),c["default"].createElement("div",{className:"site-example-buckets"},c["default"].createElement(d.Bucket,null,c["default"].createElement(d.BucketHeader,{title:"Bucket Default",icon:"pencil"}),c["default"].createElement(d.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")),c["default"].createElement(d.Bucket,{type:"light"},c["default"].createElement(d.BucketHeader,{title:"Bucket Light",icon:"cog"}),c["default"].createElement(d.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")),c["default"].createElement(d.Bucket,{type:"primary"},c["default"].createElement(d.BucketHeader,{title:"Bucket Primary",icon:"sms"}),c["default"].createElement(d.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Bucket Sizes"),c["default"].createElement("div",null,c["default"].createElement("p",{className:"site-copy"},c["default"].createElement("code",null,'size="small"')),c["default"].createElement("div",{className:"site-example-buckets"},c["default"].createElement(d.Bucket,{size:"small"},c["default"].createElement(d.BucketHeader,{title:"Bucket Header",icon:"pencil"}),c["default"].createElement(d.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros."))))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Bucket Playground"),c["default"].createElement(s["default"],{docClass:d.Bucket,propDescriptionMap:m,codeText:o,scope:B,noRender:!1})),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Bucket Header Playground"),c["default"].createElement(s["default"],{docClass:d.BucketHeader,propDescriptionMap:p,codeText:k,scope:y,noRender:!1})))};r["default"].render(c["default"].createElement(f,null),document.getElementById("js-app"))},607:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buckets">\n\n        <Bucket>\n          <BucketHeader avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Robert Plant", type: "member"}} title="Bucket Header" />\n          <BucketBody>Bucket body.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader title="Bucket Header" icon="pencil" />\n          <BucketBody>Bucket body.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader title="Bucket Header With Background" icon="pencil" className="u-bg-gray-lightest" />\n          <BucketBody>Bucket body.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader className="u-flex-justify-between" title="Bucket Header With Extra Content" icon="pencil">\n            <div>\n              <a href="" className="u-text-underline">Edit</a> | <a href="" className="u-text-underline">Delete</a>\n            </div>\n          </BucketHeader>\n          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader className="u-bg-gray-lightest" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Robert Plant", type: "member"}}>Bucket Header Without Title Property</BucketHeader>\n          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>\n        </Bucket>\n        \n        <Bucket>\n          <BucketBody>Bucket body in a default bucket.</BucketBody>\n        </Bucket>\n\n        <Bucket type="light">\n          <BucketBody>Bucket body in a light bucket.</BucketBody>\n        </Bucket>\n\n\n        <Bucket type="primary">\n          <BucketBody>Bucket body in a primary bucket.</BucketBody>\n        </Bucket>\n\n        <Bucket size="small">\n          <BucketBody>Bucket body in a small bucket.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketBody className="u-bg-gray-lightest">Bucket body with background.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <Table>\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1</td>\n              <td>Ben</td>\n              <td>Bruning</td>\n              <td>@bruning</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>Blake</td>\n              <td>Guilloud</td>\n              <td>@guilloud</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>Keaton</td>\n              <td>Foster</td>\n              <td>@foster</td>\n            </tr>\n          </tbody>\n        </Table>\n        </Bucket>\n        \n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},608:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-bucketheaders">\n\n        <BucketHeader title="Bucket Header" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Robert Plant", type: "member"}} />\n\n        <BucketHeader title="Bucket Header" avatar={{image: "//badimage.jpg", name: "Robert Plant", type: "member"}} />\n\n        <BucketHeader title="Bucket Header" avatar={{name: "Robert Plant", type: "member"}} />\n\n        <BucketHeader title="Bucket Header" avatar={{type: "member"}} />\n        \n        <BucketHeader title="Bucket Header" icon="pencil" />\n\n        <BucketHeader title="Bucket Header With Color" icon="pencil" className="u-text-danger" />\n\n        <BucketHeader title="Bucket Header With Colored Icon" icon="pencil" iconClassName="u-text-success" />\n\n        <BucketHeader title="Bucket Header Without Icon" />\n\n        <BucketHeader className="u-flex-justify-between" title="Bucket Header With Extra Content" icon="sms">\n          <div>\n            <a href="" className="u-text-underline">Edit</a> | <a href="" className="u-text-underline">Delete</a>\n          </div>\n        </BucketHeader>\n\n        <BucketHeader>\n          <Icon icon="sms" className="u-m-r-sm" /> Bucket Header Without Title or Icon Props\n        </BucketHeader>\n\n        <BucketHeader>\n          Bucket Header Without Title or Icon Props\n        </BucketHeader>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});