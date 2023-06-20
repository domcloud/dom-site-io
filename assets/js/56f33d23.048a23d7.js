/*! For license information please see 56f33d23.048a23d7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1858],{9337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(5893),s=n(1151);const i={title:"Our Guarantees",sidebar_position:3},o=void 0,r={unversionedId:"intro/guarantees",id:"intro/guarantees",title:"Our Guarantees",description:"We want everyone make use of our services for a better experience with putting things online. Personally, the reason I (the founder) created this service because I once struggled to find a web hosting service that's good enough for a university project.",source:"@site/docs/intro/guarantees.mdx",sourceDirName:"intro",slug:"/intro/guarantees",permalink:"/docs/intro/guarantees",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/intro/guarantees.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Our Guarantees",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Our Free Plan",permalink:"/docs/intro/free-plan"},next:{title:"Deployments",permalink:"/docs/deployment/"}},l={},c=[{value:"The NOT guarantees",id:"the-not-guarantees",level:2},{value:"It will not be scalable",id:"it-will-not-be-scalable",level:3},{value:"It will not be always tolerable",id:"it-will-not-be-always-tolerable",level:3},{value:"It will not be always available",id:"it-will-not-be-always-available",level:3},{value:"Guarantees",id:"guarantees",level:2},{value:"File Access",id:"file-access",level:3},{value:"Incremental Build",id:"incremental-build",level:3},{value:"Simple Hot Fixes",id:"simple-hot-fixes",level:3},{value:"As close as running locally",id:"as-close-as-running-locally",level:3},{value:"Support",id:"support",level:2}];function d(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",em:"em",strong:"strong",a:"a",code:"code"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"We want everyone make use of our services for a better experience with putting things online. Personally, the reason I (the founder) created this service because I once struggled to find a web hosting service that's good enough for a university project."}),"\n",(0,a.jsx)(t.p,{children:"With that said, we have to be honest that we can't provide everything. We have to draw a line between what we can and can't do. This page is about that."}),"\n",(0,a.jsx)(t.h2,{id:"the-not-guarantees",children:"The NOT guarantees"}),"\n",(0,a.jsx)(t.p,{children:"These are the things that we will not guarantee:"}),"\n",(0,a.jsx)(t.h3,{id:"it-will-not-be-scalable",children:"It will not be scalable"}),"\n",(0,a.jsxs)(t.p,{children:["Roughly saying, a system can be defined as ",(0,a.jsx)(t.em,{children:"scalable"})," if it can handle a large number of users, say, hundred thousands of visitor every day; or it's targeted for worldwide audience and visitor wouldn't worry about latency wherever they are."]}),"\n",(0,a.jsxs)(t.p,{children:["Honestly, our platform won't solve that problem, because our servers is ",(0,a.jsx)(t.strong,{children:"monolithic"})," by design. Monolithic means only one machine located in one place will handle your website. It will ",(0,a.jsx)(t.strong,{children:"never"})," can be ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/basics/horizontal-vs-vertical-scaling#what-is-horizontal-scaling",children:"scaled horizontally"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Scaling horizontally means using some advanced techniques like load balancing, edge servers, edge functions, containerizations etc. We believe adding technical complexity will just make developers life harder. We want to keep things simple and easy to use."}),"\n",(0,a.jsx)(t.h3,{id:"it-will-not-be-always-tolerable",children:"It will not be always tolerable"}),"\n",(0,a.jsx)(t.p,{children:"We given users a raw access (SSH) to the server, so they can do whatever they want with it. Practically, one can use our servers train a machine learning mode here, but it's discouraged. We have to draw a line where we can't tolerate a website that takes too much CPU or RAM resources."}),"\n",(0,a.jsxs)(t.p,{children:["In addition of training ML models, we don't allow crypto, phising, DoS, spam, and other malicious activities. We have a ",(0,a.jsx)(t.a,{href:"/service",children:"terms of service"})," that you should read."]}),"\n",(0,a.jsx)(t.p,{children:"We don't measure nor limit RAM/CPU usage because it's nature. But, we have an alert if the CPU usage is too high continously. If it does happen, we have to kill the process forcibly so it doesn't impact other websites for too long. We could terminate an account if it comes again repeatedly."}),"\n",(0,a.jsx)(t.p,{children:"If your website has too much traffic, memory or CPU usage, but your website is legitimate, we may contact you so we can take an alternate agreement such that your website resource usage doesn't impact other websites."}),"\n",(0,a.jsx)(t.h3,{id:"it-will-not-be-always-available",children:"It will not be always available"}),"\n",(0,a.jsxs)(t.p,{children:["By design of monolithic system, it's prune to single point of failure. Maintenance sometimes happen. We do have a ",(0,a.jsx)(t.a,{href:"https://stats.uptimerobot.com/AA77Xt9Jx8",children:"uptime status monitoring system"})," and we strive to keep the uptime as high as possible."]}),"\n",(0,a.jsx)(t.p,{children:"If your website runs for a mission critical project, you might need to consider alternate cloud provider that guarantees uptime and scalability."}),"\n",(0,a.jsx)(t.h2,{id:"guarantees",children:"Guarantees"}),"\n",(0,a.jsx)(t.p,{children:"Don't mind will all the drawbacks above? Great! Here are the things that we think you will like:"}),"\n",(0,a.jsx)(t.h3,{id:"file-access",children:"File Access"}),"\n",(0,a.jsx)(t.p,{children:"File access is often underrated in today's cloud computing world. The reason you wouldn't see people running PHP web-apps inside containers often is because this language is heavily depends with local file operations (e.g. for sessions and file uploads)."}),"\n",(0,a.jsx)(t.p,{children:"Having file access is the simplest way to avoid cache and store data problem. If you're not choosing a monolithic service then you would have take alternative solutions like Redis or Memcached for cache and S3 storages for file uploads. Most people gave up using horizontally scalable system because it's too complex to manage."}),"\n",(0,a.jsx)(t.h3,{id:"incremental-build",children:"Incremental Build"}),"\n",(0,a.jsxs)(t.p,{children:["If your web app have a particularly large packages depedency, this will help you a lot. Unlike standard CI/CD, when you do e.g. ",(0,a.jsx)(t.code,{children:"npm install"}),", the existing ",(0,a.jsx)(t.code,{children:"node_modules"})," will not be cleared, thus speeding up the overall build time."]}),"\n",(0,a.jsx)(t.h3,{id:"simple-hot-fixes",children:"Simple Hot Fixes"}),"\n",(0,a.jsx)(t.p,{children:"If you spot a bug in production, you have the option to fix it directly by editing the live server. This may risky and inconvenient for large sites. But for those who with little technical human resources, it greatly simplifies the process of bug fixing. When things cooling down, one can see the diff and then reapply a proper fix to stream (git) repository."}),"\n",(0,a.jsx)(t.h3,{id:"as-close-as-running-locally",children:"As close as running locally"}),"\n",(0,a.jsx)(t.p,{children:"Our servers is literally just a Linux server and you have a full access (non-sudo) to it. You can install any packages you want, run any commands you want, and do anything you want. It's as close as running a server locally."}),"\n",(0,a.jsx)(t.h2,{id:"support",children:"Support"}),"\n",(0,a.jsx)(t.p,{children:"Currently, DOM Cloud run as a service for community. Core developer resources is minimal but we strive to make this platform autonomous and easy to use. You welcome to ask in the discussion forum or emails."})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},5251:(e,t,n)=>{n(7418);var a=n(7294),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;s=i("react.element"),t.Fragment=i("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:o.current}}t.jsx=c,t.jsxs=c},5893:(e,t,n)=>{e.exports=n(5251)},1151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>i});var a=n(7294);const s=a.createContext({});function i(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:i(e),a.createElement(s.Provider,{value:r},t)}}}]);