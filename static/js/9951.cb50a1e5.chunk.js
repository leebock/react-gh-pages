"use strict";(globalThis.webpackChunkreact_gh_pages=globalThis.webpackChunkreact_gh_pages||[]).push([[9951],{71277:(e,t,a)=>{function l(e){return e=e||globalThis.location.hostname,i.some((t=>{var a;return null!=(null==(a=e)?void 0:a.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(r)||null!=t.match(o)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)||null!=t.match(m)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,{XO:()=>l,pJ:()=>n});const r=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,o=/^[\w-]*\.mapsdevext.arcgis.com$/,m=/^[\w-]*\.mapsqa.arcgis.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r,s,/^jsapps.esri.com$/,o,m]},19951:(e,t,a)=>{a.r(t),a.d(t,{fetchSymbolFromStyle:()=>g,resolveWebStyleSymbol:()=>h});var l=a(76626),n=a(71277),r=a(10064),s=a(35995),o=a(70032),m=a(53283),i=a(42283),c=a(1472),u=a(86423),p=a(81854);function h(e,t,a,l){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){const l=u.wm.replace(/\{SymbolName\}/gi,e.name);return(0,u.EJ)(l,a).then((e=>{const a=(0,u.KV)(e.data);return(0,i.im)(a,{portal:t.portal,url:(0,s.mN)((0,s.Yd)(l)),origin:"portal-item"})}))}(e,t,l):(0,u.n2)(e,t,l).then((n=>g(n,e.name,t,a,l))):Promise.reject(new r.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function g(e,t,a,h,g){const y=e.data,b={portal:a&&a.portal||o.Z.getDefault(),url:(0,s.mN)(e.baseUrl),origin:"portal-item"},d=y.items.find((e=>e.name===t));if(!d){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new r.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let f=(0,m.f)((0,u.v9)(d,h),b),w=d.thumbnail&&d.thumbnail.href;const N=d.thumbnail&&d.thumbnail.imageData;(0,n.XO)()&&(f=(0,n.pJ)(f),w=(0,n.pJ)(w));const v={portal:a.portal,url:(0,s.mN)((0,s.Yd)(f)),origin:"portal-item"};return(0,u.EJ)(f,g).then((n=>{const r="cimRef"===h?(0,u.KV)(n.data):n.data,s=(0,i.im)(r,v);if(s&&(0,l.dU)(s)){if(w){const e=(0,m.f)(w,b);s.thumbnail=new p.p({url:e})}else N&&(s.thumbnail=new p.p({url:`data:image/png;base64,${N}`}));e.styleUrl?s.styleOrigin=new c.Z({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new c.Z({portal:a.portal,styleName:e.styleName,name:t}))}return s}))}}}]);
//# sourceMappingURL=9951.cb50a1e5.chunk.js.map