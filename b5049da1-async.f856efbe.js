(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b5049da1"],{b5049da1:function(e,s,r){"use strict";r.d(s,"__esModule",{value:!0}),r.d(s,"default",{enumerable:!0,get:function(){return i;}});var l=r("f19d2b93");r("73f951cb");var n=r("5b220c3d"),o=r("e22febe0"),a=r("a9d1a279"),i=()=>{let[e]=a.Form.useForm(),[s,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{r(!0);},[]),(0,l.jsxs)(a.Form,{form:e,name:"horizontal_login",layout:"inline",onFinish:e=>{console.log("Finish:",e);},children:[(0,l.jsx)(a.Form.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,l.jsx)(a.Input,{prefix:(0,l.jsx)(o.UserOutlined,{}),placeholder:"Username"})}),(0,l.jsx)(a.Form.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,l.jsx)(a.Input,{prefix:(0,l.jsx)(o.LockOutlined,{}),type:"password",placeholder:"Password"})}),(0,l.jsx)(a.Form.Item,{shouldUpdate:!0,children:()=>(0,l.jsx)(a.Button,{type:"primary",htmlType:"submit",disabled:!s||!e.isFieldsTouched(!0)||!!e.getFieldsError().filter(({errors:e})=>e.length).length,children:"Log in"})})]});};}}]);