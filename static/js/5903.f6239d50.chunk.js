"use strict";(globalThis.webpackChunkreact_gh_pages=globalThis.webpackChunkreact_gh_pages||[]).push([[5903],{76551:(e,t,n)=>{n.d(t,{Z:()=>b});var l=n(27366),a=n(43404),i=n(49861),o=(n(63780),n(93169),n(25243),n(69912)),r=n(46784),s=n(57634),u=n(22061);const c=new a.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let d=class extends r.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,l._)([(0,i.Cb)({type:u.Z,json:{write:!0}})],d.prototype,"baseSymbol",void 0),(0,l._)([(0,i.Cb)({types:s.V,json:{read:{reader:s.i},write:!0}})],d.prototype,"colorRamp",void 0),(0,l._)([(0,i.Cb)({json:{read:c.read,write:c.write}})],d.prototype,"type",void 0),d=(0,l._)([(0,o.j)("esri.rest.support.ClassificationDefinition")],d);const f=d,m=new a.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),p=new a.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let h=class extends f{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"breakCount",void 0),(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"classificationField",void 0),(0,l._)([(0,i.Cb)({type:String,json:{read:m.read,write:m.write}})],h.prototype,"classificationMethod",void 0),(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"normalizationField",void 0),(0,l._)([(0,i.Cb)({json:{read:p.read,write:p.write}})],h.prototype,"normalizationType",void 0),(0,l._)([(0,i.Cb)({value:null,json:{write:!0}})],h.prototype,"standardDeviationInterval",null),(0,l._)([(0,i.Cb)({value:null,json:{write:!0}})],h.prototype,"definedInterval",null),(0,l._)([(0,i.Cb)()],h.prototype,"type",void 0),h=(0,l._)([(0,o.j)("esri.rest.support.ClassBreaksDefinition")],h);const b=h},15903:(e,t,n)=>{n.d(t,{G2:()=>D,oF:()=>k,XL:()=>V,i5:()=>v,H0:()=>b,eT:()=>F,Qm:()=>M,Lq:()=>y,fk:()=>C,S5:()=>h,F_:()=>T,DL:()=>I});var l=n(76551);function a(e,t){return Number(e.toFixed(t))}function i(e){const{normalizationTotal:t}=e;return{classBreaks:o(e),normalizationTotal:t}}function o(e){const t=e.definition,{classificationMethod:n,breakCount:l,normalizationType:i,definedInterval:o}=t,c=[];let d=e.values;if(0===d.length)return[];d=d.sort(((e,t)=>e-t));const f=d[0],m=d[d.length-1];if("equal-interval"===n)if(d.length>=l){const e=(m-f)/l;let t=f;for(let n=1;n<l;n++){const l=a(f+n*e,6);c.push({minValue:t,maxValue:l,label:r(t,l,i)}),t=l}c.push({minValue:t,maxValue:m,label:r(t,m,i)})}else d.forEach((e=>{c.push({minValue:e,maxValue:e,label:r(e,e,i)})}));else if("natural-breaks"===n){const t=s(d),n=e.valueFrequency||t.valueFrequency,o=u(t.uniqueValues,n,l);let p=f;for(let e=1;e<l;e++)if(t.uniqueValues.length>e){const n=a(t.uniqueValues[o[e]],6);c.push({minValue:p,maxValue:n,label:r(p,n,i)}),p=n}c.push({minValue:p,maxValue:m,label:r(p,m,i)})}else if("quantile"===n)if(d.length>=l&&f!==m){let e=f,t=Math.ceil(d.length/l),n=0;for(let a=1;a<l;a++){let o=t+n-1;o>d.length&&(o=d.length-1),o<0&&(o=0),c.push({minValue:e,maxValue:d[o],label:r(e,d[o],i)}),e=d[o],n+=t,t=Math.ceil((d.length-n)/(l-a))}c.push({minValue:e,maxValue:m,label:r(e,m,i)})}else{let e=-1;for(let t=0;t<d.length;t++){const n=d[t];n!==e&&(e=n,c.push({minValue:e,maxValue:n,label:r(e,n,i)}),e=n)}}else if("standard-deviation"===n){const e=function(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/=e.length,t}(d),t=function(e,t){let n=0;for(let l=0;l<e.length;l++){const a=e[l];n+=(a-t)*(a-t)}return n/=e.length,Math.sqrt(n)}(d,e);if(0===t)c.push({minValue:d[0],maxValue:d[0],label:r(d[0],d[0],i)});else{const n=function(e,t,n,l,a){let i=Math.max(l-e,t-l)/a/n;return i=i>=1?1:i>=.5?.5:.25,i}(f,m,l,e,t)*t;let o=0,s=f;for(let t=l;t>=1;t--){const l=a(e-(t-.5)*n,6);c.push({minValue:s,maxValue:l,label:r(s,l,i)}),s=l,o++}let u=a(e+.5*n,6);c.push({minValue:s,maxValue:u,label:r(s,u,i)}),s=u,o++;for(let t=1;t<=l;t++)u=o===2*l?m:a(e+(t+.5)*n,6),c.push({minValue:s,maxValue:u,label:r(s,u,i)}),s=u,o++}}else if("defined-interval"===n){if(!o)return c;const e=d[0],t=d[d.length-1],n=Math.ceil((t-e)/o);let l=e;for(let s=1;s<n;s++){const t=a(e+s*o,6);c.push({minValue:l,maxValue:t,label:r(l,t,i)}),l=t}c.push({minValue:l,maxValue:t,label:r(l,t,i)})}return c}function r(e,t,n){let l=null;return l=e===t?n&&"percent-of-total"===n?e+"%":e.toString():n&&"percent-of-total"===n?e+"% - "+t+"%":e+" - "+t,l}function s(e){const t=[],n=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let o=0;o<e.length;o++){const r=e[o];r===l?(a++,n[i]=a):null!==r&&(t.push(r),l=r,a=1,n.push(a),i++)}return{uniqueValues:t,valueFrequency:n}}function u(e,t,n){const l=e.length,a=[];n>l&&(n=l);for(let o=0;o<n;o++)a.push(Math.round(o*l/n-1));a.push(l-1);let i=c(a,e,t,n);return function(e,t,n,l,a,i){let o=0,r=0,s=0,u=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<i-1;f++)for(;n[f+1]+1!==n[f+2];){n[f+1]=n[f+1]+1;const i=d(f,n,l,a);s=i.sbMean,o=i.sbSdcm;const m=d(f+1,n,l,a);if(u=m.sbMean,r=m.sbSdcm,!(o+r<t[f]+t[f+1])){n[f+1]=n[f+1]-1;break}t[f]=o,t[f+1]=r,e[f]=s,e[f+1]=u,c=!0}for(let f=i-1;f>0;f--)for(;n[f]!==n[f-1]+1;){n[f]=n[f]-1;const i=d(f-1,n,l,a);s=i.sbMean,o=i.sbSdcm;const m=d(f,n,l,a);if(u=m.sbMean,r=m.sbSdcm,!(o+r<t[f-1]+t[f])){n[f]=n[f]+1;break}t[f-1]=o,t[f]=r,e[f-1]=s,e[f]=u,c=!0}}return c}(i.mean,i.sdcm,a,e,t,n)&&(i=c(a,e,t,n)),a}function c(e,t,n,l){let a=[],i=[],o=[],r=0;const s=[],u=[];for(let p=0;p<l;p++){const l=d(p,e,t,n);s.push(l.sbMean),u.push(l.sbSdcm),r+=u[p]}let c,f=r,m=!0;for(;m||r<f;){m=!1,a=[];for(let t=0;t<l;t++)a.push(e[t]);for(let n=0;n<l;n++)for(let a=e[n]+1;a<=e[n+1];a++)if(c=t[a],n>0&&a!==e[n+1]&&Math.abs(c-s[n])>Math.abs(c-s[n-1]))e[n]=a;else if(n<l-1&&e[n]!==a-1&&Math.abs(c-s[n])>Math.abs(c-s[n+1])){e[n+1]=a-1;break}f=r,r=0,i=[],o=[];for(let a=0;a<l;a++){i.push(s[a]),o.push(u[a]);const l=d(a,e,t,n);s[a]=l.sbMean,u[a]=l.sbSdcm,r+=u[a]}}if(r>f){for(let t=0;t<l;t++)e[t]=a[t],s[t]=i[t],u[t]=o[t];r=f}return{mean:s,sdcm:u}}function d(e,t,n,l){let a=0,i=0;for(let s=t[e]+1;s<=t[e+1];s++){const e=l[s];a+=n[s]*e,i+=e}i<=0&&console.log("Exception in Natural Breaks calculation");const o=a/i;let r=0;for(let s=t[e]+1;s<=t[e+1];s++)r+=l[s]*(n[s]-o)**2;return{sbMean:o,sbSdcm:r}}const f=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,m=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),p=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function h(e){const t=null!=e.normalizationField||null!=e.normalizationType,n=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!t&&!n&&!l}function b(e){const t=e.returnDistinct?[...new Set(e.values)]:e.values,n=t.filter((e=>null!=e)).length,l={count:n};return e.supportsNullCount&&(l.nullcount=t.length-n),e.percentileParams&&(l.median=V(t,e.percentileParams)),l}function v(e){const{values:t,useSampleStdDev:n,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,u=null,c=0;const d=null==e.minValue?-1/0:e.minValue,f=null==e.maxValue?1/0:e.maxValue;for(const p of t)Number.isFinite(p)?p>=d&&p<=f&&(o+=p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=o){r=o/c;let e=0;for(const n of t)Number.isFinite(n)&&n>=d&&n<=f&&(e+=(n-r)**2);u=n?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else a=null,i=null;const m={avg:r,count:c,max:i,min:a,stddev:s,sum:o,variance:u};return l&&(m.nullcount=t.length-c),e.percentileParams&&(m.median=V(t,e.percentileParams)),m}function V(e,t){const{fieldType:n,value:l,orderBy:a,isDiscrete:i}=t,o=y(n,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,t)=>o(e,t)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const r=(e.length-1)*l,s=Math.floor(r),u=s+1,c=r%1,d=e[s],f=e[u];return u>=e.length||i||"string"==typeof d||"string"==typeof f?d:d*(1-c)+f*c}function y(e,t){const n=t?1:-1,l=function(e){return e?(e,t)=>t-e:(e,t)=>e-t}(t),a=g(t);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...m].includes(e))return(e,t)=>"number"==typeof e&&"number"==typeof t?l(e,t):"string"==typeof e&&"string"==typeof t?a(e,t):n;if("esriFieldTypeDate"===e)return(e,t)=>{const a=new Date(e).getTime(),i=new Date(t).getTime();return isNaN(a)||isNaN(i)?n:l(a,i)};if(m.has(e))return(e,t)=>l(e,t);if("esriFieldTypeString"===e)return(e,t)=>a(e,t);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=g(t);return(t,n)=>e(x(t),x(n))}return t?(e,t)=>1:(e,t)=>-1}function g(e){return e?(e,t)=>{var n,l;return(e=null==(n=e)?void 0:n.toUpperCase())>(t=null==(l=t)?void 0:l.toUpperCase())?-1:e<t?1:0}:(e,t)=>{var n,l;return(e=null==(n=e)?void 0:n.toUpperCase())<(t=null==(l=t)?void 0:l.toUpperCase())?-1:e>t?1:0}}function x(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function T(e,t){let n;for(n in e)p.indexOf(n)>-1&&(Number.isFinite(e[n])||(e[n]=null));return t?(["avg","stddev","variance"].forEach((t=>{null!=e[t]&&(e[t]=Math.ceil(e[t]))})),e):e}function F(e){const t={};for(let n of e)(null==n||"string"==typeof n&&""===n.trim())&&(n=null),null==t[n]?t[n]={count:1,data:n}:t[n].count++;return{count:t}}function M(e,t,n){const l=e.count,a=[];n&&t&&"coded-value"===t.type&&t.codedValues.forEach((e=>{const t=e.code;l.hasOwnProperty(t)||(l[t]={data:t,count:0})}));for(const i in l){const e=l[i];a.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:a}}function C(e,t,n,l){let a=null;switch(t){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(n)&&0!==n&&(a=e/n);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function D(e,t){const n=z({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||5});return e=function(e,t,n){return t=null==t?-1/0:t,n=null==n?1/0:n,e.filter((e=>Number.isFinite(e)&&e>=t&&e<=n))}(e,t.minValue,t.maxValue),i({definition:n,values:e,normalizationTotal:t.normalizationTotal})}function z(e){const t=e.field,n=e.classificationMethod||"equal-interval",a=e.normalizationType,i=e.normalizationField,o=new l.Z;return o.classificationField=t,o.breakCount=e.breakCount,o.classificationMethod=n,o.standardDeviationInterval="standard-deviation"===n?e.standardDeviationInterval||1:void 0,o.normalizationType=a,o.normalizationField="field"===a?i:void 0,o}function I(e,t){let n=e.classBreaks;const l=n.length,a=n[0].minValue,i=n[l-1].maxValue,o="standard-deviation"===t,r=f;return n=n.map((e=>{const t=e.label,n={minValue:e.minValue,maxValue:e.maxValue,label:t};if(o&&t){const e=t.match(r).map((e=>+e.trim()));2===e.length?(n.minStdDev=e[0],n.maxStdDev=e[1],e[0]<0&&e[1]>0&&(n.hasAvg=!0)):1===e.length&&(t.includes("<")?(n.minStdDev=null,n.maxStdDev=e[0]):t.includes(">")&&(n.minStdDev=e[0],n.maxStdDev=null))}return n})),{minValue:a,maxValue:i,classBreakInfos:n,normalizationTotal:e.normalizationTotal}}function k(e,t){const{min:n,max:l,intervals:a}=function(e,t){const{field:n,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:u}=t,c=t.numBins||10;let d=null,f=null,m=null;if(l&&"equal-interval"!==l||i){const{classBreaks:t}=D(e,{field:n,normalizationType:i,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:u,numClasses:c});d=t[0].minValue,f=t[t.length-1].maxValue,m=t.map((e=>[e.minValue,e.maxValue]))}else{if(null!=s&&null!=u)d=s,f=u;else{const t=v({values:e,minValue:s,maxValue:u,useSampleStdDev:!i,supportsNullCount:h({normalizationType:i,normalizationField:o,minValue:s,maxValue:u})});d=t.min,f=t.max}m=function(e,t,n){const l=(t-e)/n,a=[];let i,o=e;for(let r=1;r<=n;r++)i=o+l,i=Number(i.toFixed(16)),a.push([o,r===n?t:i]),o=i;return a}(d,f,c)}return{min:d,max:f,intervals:m}}(e,t),i=a.map(((e,t)=>({minValue:a[t][0],maxValue:a[t][1],count:0})));for(const o of e)if(null!=o&&o>=n&&o<=l){const e=S(a,o);e>-1&&i[e].count++}return{bins:i,minValue:n,maxValue:l,normalizationTotal:t.normalizationTotal}}function S(e,t){let n=-1;for(let l=e.length-1;l>=0;l--)if(t>=e[l][0]){n=l;break}return n}}}]);
//# sourceMappingURL=5903.f6239d50.chunk.js.map