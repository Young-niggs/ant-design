(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["38cac6f8"],{"38cac6f8":function(e,d,t){"use strict";t.d(d,"__esModule",{value:!0}),t.d(d,"default",{enumerable:!0,get:function(){return r;}});var a=t("f19d2b93");t("6c5bfed1");var l=t("a9d1a279"),n=t("3835a2b7");let s=(0,n.createStyles)(({css:e,token:d})=>{let{antCls:t}=d;return{customTable:e`
      ${t}-table {
        ${t}-table-container {
          ${t}-table-body,
          ${t}-table-content {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `};}),i=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1",width:150},{title:"Column 2",dataIndex:"address",key:"2",width:150},{title:"Column 3",dataIndex:"address",key:"3",width:150},{title:"Column 4",dataIndex:"address",key:"4",width:150},{title:"Column 5",dataIndex:"address",key:"5",width:150},{title:"Column 6",dataIndex:"address",key:"6",width:150},{title:"Column 7",dataIndex:"address",key:"7",width:150},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Column 9",dataIndex:"address",key:"9"},{title:"Column 10",dataIndex:"address",key:"10"},{title:"Column 11",dataIndex:"address",key:"11"},{title:"Column 12",dataIndex:"address",key:"12"},{title:"Column 13",dataIndex:"address",key:"13"},{title:"Column 14",dataIndex:"address",key:"14"},{title:"Column 15",dataIndex:"address",key:"15"},{title:"Column 16",dataIndex:"address",key:"16"},{title:"Column 17",dataIndex:"address",key:"17"},{title:"Column 18",dataIndex:"address",key:"18"},{title:"Column 19",dataIndex:"address",key:"19"},{title:"Column 20",dataIndex:"address",key:"20"},{title:"Action",key:"operation",fixed:"right",width:100,render:()=>(0,a.jsx)("a",{children:"action"})}],o=Array.from({length:100}).map((e,d)=>({key:d,name:`Edward King ${d}`,age:32,address:`London, Park Lane no. ${d}`}));var r=()=>{let{styles:e}=s();return(0,a.jsx)(l.Table,{className:e.customTable,columns:i,dataSource:o,scroll:{x:"max-content",y:275}});};}}]);