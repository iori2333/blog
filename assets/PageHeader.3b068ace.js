import{d as f,l as g,D as k,a as p,o,j as C,w as S,e as x,u as a,c as _,E as B,F as I,b as n,t as d,I as w,J as y}from"./vendor.e2c1fbe9.js";import{_ as P,S as b,C as j}from"./index.e7b1b274.js";const R=e=>(w("data-v-36ece47e"),e=e(),y(),e),D=["onClick"],E=R(()=>n("div",{class:"slash"},"/",-1)),F={class:"title"},H=f({props:{title:null},setup(e){const v=g(),c=k(),t=p(()=>v.fullPath.split("/")),m=p(()=>t.value[t.value.length-1]),h=r=>{const s=t.value.slice(0,r+1).join("/");c.push(s)};return(r,s)=>(o(),C(j,{class:"navigator"},{default:S(()=>{var l;return[x(b,{icon:"arrow-left",size:"20px",onClick:s[0]||(s[0]=u=>a(c).back())}),(o(!0),_(I,null,B(a(t).slice(0,a(t).length-1),(u,i)=>(o(),_("div",{class:"route",key:i},[n("span",{onClick:N=>h(i)},d(u),9,D),E]))),128)),n("span",F,d((l=e.title)!=null?l:a(m)),1)]}),_:1}))}});var z=P(H,[["__scopeId","data-v-36ece47e"]]);export{z as P};
