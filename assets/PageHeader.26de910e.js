import{d as h,m as k,E as g,b as p,o,k as C,w as S,f as x,u as a,c as _,G as B,F as w,e as n,t as d,J as y,K as I}from"./vendor.95e22531.js";import{_ as P,S as b,C as R}from"./index.6ece5b19.js";const j=e=>(y("data-v-36ece47e"),e=e(),I(),e),E=["onClick"],F=j(()=>n("div",{class:"slash"},"/",-1)),H={class:"title"},N=h({props:{title:null},setup(e){const v=k(),c=g(),t=p(()=>v.fullPath.split("/")),m=p(()=>t.value[t.value.length-1]),f=r=>{const s=t.value.slice(0,r+1).join("/");c.push(s)};return(r,s)=>(o(),C(R,{class:"navigator"},{default:S(()=>{var l;return[x(b,{icon:"arrow-left",size:"20px",onClick:s[0]||(s[0]=u=>a(c).back())}),(o(!0),_(w,null,B(a(t).slice(0,a(t).length-1),(u,i)=>(o(),_("div",{class:"route",key:i},[n("span",{onClick:V=>f(i)},d(u),9,E),F]))),128)),n("span",H,d((l=e.title)!=null?l:a(m)),1)]}),_:1}))}});var D=P(N,[["__scopeId","data-v-36ece47e"]]);export{D as P};
