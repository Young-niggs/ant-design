(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a8ffb7bf"],{a8ffb7bf:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return c;}});var l=o("f19d2b93");o("54a4af1b");var n=o("5b220c3d"),a=o("a9d1a279");let r=Array.from({length:20}).map((e,t)=>({key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`})),s=r.filter(e=>Number(e.key)>10).map(e=>e.key);var c=()=>{let[e,t]=(0,n.useState)(s),[o,c]=(0,n.useState)([]);return(0,l.jsx)(a.Transfer,{dataSource:r,titles:["Source","Target"],targetKeys:e,selectedKeys:o,onChange:(e,o,l)=>{console.log("targetKeys:",e),console.log("direction:",o),console.log("moveKeys:",l),t(e);},onSelectChange:(e,t)=>{console.log("sourceSelectedKeys:",e),console.log("targetSelectedKeys:",t),c([...e,...t]);},onScroll:(e,t)=>{console.log("direction:",e),console.log("target:",t.target);},render:e=>e.title});};}}]);