(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},229:function(e,t){},247:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(79),n=a.n(s),i=a(17),r=a(3),l=(a(115),a(5)),j=(a(116),a(0)),o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{className:"main-footer",children:Object(j.jsx)("div",{className:"copy-right",children:"\xa92021 Created by Ahmed"})})})},d=a(42),h=a(51),b=a(32),m={fadeInRightBig:{animation:"x 1s",animationName:d.a.keyframes(b.fadeInRightBig,"fadeInRightBig")}},u=function(e){var t=e.children,a=e.isSidebarOpen,c=e.openSidebar;return Object(j.jsxs)("header",{className:"main-header",children:[Object(j.jsxs)("div",{className:"header-wrapper",children:[Object(j.jsx)("div",{className:"site-name",children:Object(j.jsx)(i.b,{to:"/",children:"Muhammad Ahmed"})}),Object(j.jsx)(h.a,{children:Object(j.jsx)("div",{className:"site-nav",style:m.fadeInRightBig,children:t})})]}),!a&&Object(j.jsx)("div",{className:"open-sidebar",onClick:function(){c()},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"#fff",className:"bi bi-justify line-svg",viewBox:"0 0 12 12",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})})})]})},O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"link",children:Object(j.jsx)(i.b,{to:"/",children:"Home"})}),Object(j.jsx)("div",{className:"link",children:Object(j.jsx)(i.b,{to:"/contact",children:"Contact"})})]})},x=function(e){e.children;var t=e.closeSidebar;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"sidebar-panel",children:[Object(j.jsx)("div",{className:"close-sidebar-btn",children:Object(j.jsx)("svg",{onClick:function(){t()},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#fff",className:"bi bi-x",viewBox:"0 0 12 12",children:Object(j.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})}),Object(j.jsx)("div",{className:"main-sidebar",children:Object(j.jsx)(O,{})})]})})},f=function(e){var t=e.children,a=Object(c.useState)(!1),s=Object(l.a)(a,2),n=s[0],i=s[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{isSidebarOpen:n,openSidebar:function(){i(!0)},children:Object(j.jsx)(O,{})}),n&&Object(j.jsx)(x,{closeSidebar:function(){i(!1)},children:Object(j.jsx)(O,{})}),Object(j.jsx)("main",{children:t}),Object(j.jsx)(o,{})]})},g=a(41),p=a.n(g),v=a(23),N=(a(247),a.p+"static/media/contact-background.bdd8160f.jpg"),w=a(7),k=a.n(w),C="https://new-ahmed.herokuapp.com";var y=function(){var e=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],j=i[1];return Object(c.useEffect)((function(){var e=k.a.CancelToken.source();return k.a.get("".concat(C,"/api-urls/about/"),{cancelToken:e.token}).then((function(e){s(e.data),j(!0)})).catch((function(e){k.a.isCancel(e)||console.log(e)})),function(){e.cancel()}}),[]),{state:a,hasLoaded:r}}(),t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],h=Object(c.useState)(""),b=Object(l.a)(h,2),m=b[0],u=b[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),f=x[0],g=x[1],w=Object(c.useState)(!1),y=Object(l.a)(w,2),S=y[0],L=y[1],z=Object(v.a)({threshold:0}),B=z.ref,F=z.inView;return Object(j.jsxs)("div",{className:"contact-page",ref:B,children:[Object(j.jsxs)("div",{className:"about-section",children:[Object(j.jsx)("div",{className:"background-image",children:Object(j.jsx)("img",{src:N,alt:"Contact Background",width:"100%",height:"auto"})}),e.hasLoaded&&Object(j.jsxs)("div",{className:"about-details w3-animate-opacity",children:[Object(j.jsx)("h2",{children:"About"}),e.state.map((function(e,t){return Object(j.jsx)("div",{className:"about",children:p()(e.detail)},t)})),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/muhammad-ahmed-sheraz-51a70a202/",className:"icon",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#0B5ED7",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),Object(j.jsx)("a",{href:"https://www.instagram.com/code.it2002/",className:"icon",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"red",className:"bi bi-instagram",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})})]})]}),Object(j.jsxs)("div",{className:"contact-section",children:[Object(j.jsxs)("div",{className:"contact-details ".concat(F&&"w3-animate-left"),children:[Object(j.jsx)("h2",{children:"Contact Details"}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("span",{children:"DHA Phase 7, Karachi."}),Object(j.jsx)("span",{children:"+92-3178546151"}),Object(j.jsx)("span",{children:"mahmed743454@gmail.com"})]})]}),Object(j.jsx)("div",{className:"contact-form ".concat(F&&"w3-animate-right"),children:S?Object(j.jsxs)("div",{className:"form-sent",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"green",className:"bi bi-check-circle-fill",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})," ","Contact form is submitted."]}):Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a,c){k.a.post("".concat(C,"/api-urls/contact/"),{firstName:e,lastName:t,email:a,message:c}).then((function(e){return e.data})).catch((function(e){return e}))}(s,o,m,f),L(!0)},children:[Object(j.jsxs)("div",{className:"form-name",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"firstName",children:"First Name "}),Object(j.jsx)("input",{className:"input",type:"text",value:s,onChange:function(e){return n(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"lastName",children:"Last Name "}),Object(j.jsx)("input",{className:"input",type:"text",value:o,onChange:function(e){return d(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email *"}),Object(j.jsx)("input",{className:"input",type:"email",required:!0,value:m,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)("label",{htmlFor:"message",children:"Message *"}),Object(j.jsx)("textarea",{className:"input",value:f,onChange:function(e){return g(e.target.value)},name:"message",id:"message",cols:"30",rows:"8",required:!0})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-red",children:"Send"})})]})})]})]})},S=a(110),L=(a(268),a.p+"static/media/background.161851fb.jpg");a(269);var z=function(){var e=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],j=i[1];return Object(c.useEffect)((function(){var e=k.a.CancelToken.source();return k.a.get("".concat(C,"/api-urls/project/"),{cancelToken:e.token}).then((function(e){s(e.data),j(!0)})).catch((function(e){k.a.isCancel(e)||console.log(e)})),function(){e.cancel()}}),[]),{state:a,hasLoaded:r}}(),t=Object(v.a)({threshold:.5}),a=t.ref,s=t.inView;return Object(j.jsxs)("div",{className:"projects",children:[Object(j.jsxs)("div",{className:"project-quotes w3-animate-top",children:[Object(j.jsx)("h1",{children:"Let Your Website Take Your Business to Higher Grounds"}),Object(j.jsx)("p",{children:"I can make professional high quality appealing and responsive website for you."})]}),e.hasLoaded&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"project-cards",ref:a,children:e.state.map((function(e,t){return Object(j.jsxs)("div",{className:"project-card w3-animate-opacity",children:[e.image&&Object(j.jsx)("img",{className:"project-logo",src:e.image,alt:"Logo",width:"80px"}),Object(j.jsx)("h3",{className:"project-name ".concat(s&&"w3-animate-left"),children:Object(j.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.name})}),Object(j.jsx)("div",{className:"project-details ".concat(s&&"w3-animate-left"),children:p()(e.details)}),Object(j.jsx)("hr",{})]},t)}))})})]})},B={slideInLeft:{animation:"x 1s",animationName:d.a.keyframes(b.slideInLeft,"slideInLeft")}},F=function(){var e=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],j=i[1];return Object(c.useEffect)((function(){var e=k.a.CancelToken.source();return k.a.get("".concat(C,"/api-urls/technology/"),{cancelToken:e.token}).then((function(e){s(e.data),j(!0)})).catch((function(e){k.a.isCancel(e)||console.log(e)})),function(){e.cancel()}}),[]),{state:a,hasLoaded:r}}(),t=Object(v.a)({threshold:.5}),a=t.ref,s=t.inView;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("img",{src:L,alt:"Background",width:"100%"}),Object(j.jsxs)("div",{className:"animated-text",children:[Object(j.jsxs)("div",{className:"typical",children:["Full Stack Web De",Object(j.jsx)(S.a,{steps:["veloper.",1e3,"signer.",1e3],loop:1/0,wrapper:"b"})]}),Object(j.jsx)(h.a,{children:Object(j.jsx)("div",{className:"quote",style:B.slideInLeft,children:"Design your Imagination."})})]})]}),Object(j.jsx)("div",{className:"technologies",children:e.hasLoaded&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)("div",{className:"cards",ref:a,children:s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"card-1",children:"Technologies I work with"}),e.state.map((function(e,t){return Object(j.jsx)("div",{className:"card",style:B.slideInLeft,content:e.details,children:e.name},t)}))]})})})})}),Object(j.jsx)("div",{class:"skew-cc"}),Object(j.jsx)(z,{}),Object(j.jsx)("div",{class:"skew-c"})]})})};var I=function(){return Object(j.jsxs)(f,{children:[Object(j.jsx)(r.a,{path:"/",exact:!0,component:F}),Object(j.jsx)(r.a,{path:"/contact",exact:!0,component:y})]})},T=Object(j.jsx)(i.a,{children:Object(j.jsx)(I,{})});n.a.render(T,document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.b16c0936.chunk.js.map