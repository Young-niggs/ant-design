(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["7f468ce4"],{"7f468ce4":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return c;}});var a=n("f19d2b93");n("c6dd677d");var t=n("5b220c3d"),d=n("e22febe0"),o=n("a9d1a279");let i=()=>{let[e,l]=(0,t.useState)(!1),n=()=>{l(!1);};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Button,{type:"primary",onClick:()=>{l(!0);},children:"Modal"}),(0,a.jsxs)(o.Modal,{title:"Modal",open:e,onOk:n,onCancel:n,okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",children:[(0,a.jsx)("p",{children:"Bla bla ..."}),(0,a.jsx)("p",{children:"Bla bla ..."}),(0,a.jsx)("p",{children:"Bla bla ..."})]})]});};var c=()=>{let[e,l]=o.Modal.useModal();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Space,{children:[(0,a.jsx)(i,{}),(0,a.jsx)(o.Button,{onClick:()=>{e.confirm({title:"Confirm",icon:(0,a.jsx)(d.ExclamationCircleOutlined,{}),content:"Bla bla ...",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88"});},children:"Confirm"})]}),l]});};}}]);