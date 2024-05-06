"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(g,l(l({ref:t},s),{},{components:n})):i.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const r={},l="ZoomWidget",a={unversionedId:"api-reference/widgets/zoom-widget",id:"api-reference/widgets/zoom-widget",title:"ZoomWidget",description:"This widget controls the zoom level of a deck.gl view. Click '+' to zoom in by 1, click '-' to zoom out by 1. Supports controlling Map and Globe views.",source:"@site/../docs/api-reference/widgets/zoom-widget.md",sourceDirName:"api-reference/widgets",slug:"/api-reference/widgets/zoom-widget",permalink:"/docs/api-reference/widgets/zoom-widget",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/widgets/zoom-widget.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@deck.gl/widgets",permalink:"/docs/api-reference/widgets/overview"},next:{title:"CompassWidget",permalink:"/docs/api-reference/widgets/compass-widget"}},p={},d=[{value:"Props",id:"props",level:2},{value:"<code>id</code> (string)",id:"id",level:4},{value:"<code>viewId</code> (string, optional)",id:"viewid",level:4},{value:"<code>placement</code> (string, optional)",id:"placement",level:4},{value:"<code>orientation</code> (string, optional)",id:"orientation",level:4},{value:"<code>zoomInLabel</code> (string, optional)",id:"zoominlabel",level:4},{value:"<code>zoomOutLabel</code> (string, optional)",id:"zoomoutlabel",level:4},{value:"<code>transitionDuration</code> (number, optional)",id:"transitionduration",level:4},{value:"<code>style</code> (object, optional)",id:"style",level:4},{value:"<code>className</code> (string, optional)",id:"classname",level:4}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zoomwidget"},"ZoomWidget"),(0,o.kt)("p",null,"This widget controls the zoom level of a deck.gl view. Click '+' to zoom in by 1, click '-' to zoom out by 1. Supports controlling Map and Globe views."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (string)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'zoom'")),(0,o.kt)("p",null,"Unique identifier of the widget."),(0,o.kt)("h4",{id:"viewid"},(0,o.kt)("inlineCode",{parentName:"h4"},"viewId")," (string, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null")),(0,o.kt)("p",null,"The widget is attached to the view identified by this ",(0,o.kt)("inlineCode",{parentName:"p"},"viewId"),". When assigned, the widget is placed within the specified view, and  exclusively interacts with it. Required when using ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer-guide/views#using-multiple-views"},"multiple views"),"."),(0,o.kt)("h4",{id:"placement"},(0,o.kt)("inlineCode",{parentName:"h4"},"placement")," (string, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'top-left'")),(0,o.kt)("p",null,"Widget position within the view relative to the map container. Valid options are ",(0,o.kt)("inlineCode",{parentName:"p"},"top-left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"top-right"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom-left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom-right"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"fill"),"."),(0,o.kt)("h4",{id:"orientation"},(0,o.kt)("inlineCode",{parentName:"h4"},"orientation")," (string, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'vertical'")),(0,o.kt)("p",null,"Widget button orientation. Valid options are ",(0,o.kt)("inlineCode",{parentName:"p"},"vertical")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal"),"."),(0,o.kt)("h4",{id:"zoominlabel"},(0,o.kt)("inlineCode",{parentName:"h4"},"zoomInLabel")," (string, optional)"),(0,o.kt)("p",null,"Tooltip message displayed while hovering a mouse over the zoom in button."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Zoom In'")),(0,o.kt)("h4",{id:"zoomoutlabel"},(0,o.kt)("inlineCode",{parentName:"h4"},"zoomOutLabel")," (string, optional)"),(0,o.kt)("p",null,"Tooltip message displayed while hovering a mouse over the zoom out button."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Zoom Out'")),(0,o.kt)("h4",{id:"transitionduration"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionDuration")," (number, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"200")),(0,o.kt)("p",null,"Zoom transition duration in milliseconds."),(0,o.kt)("h4",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h4"},"style")," (object, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")),(0,o.kt)("p",null,"Additional CSS styles for the canvas."),(0,o.kt)("h4",{id:"classname"},(0,o.kt)("inlineCode",{parentName:"h4"},"className")," (string, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"Class name to attach to the widget element. The element has the default class name of ",(0,o.kt)("inlineCode",{parentName:"p"},"deck-widget deck-zoom-widget"),"."))}u.isMDXComponent=!0}}]);