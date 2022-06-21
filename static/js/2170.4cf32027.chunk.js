"use strict";(globalThis.webpackChunkreact_gh_pages=globalThis.webpackChunkreact_gh_pages||[]).push([[2170,2463],{92463:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>u});var r=n(53866),a=n(77577),i=n(7882),o=n(80885),c=n(29909);const u={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),o=new i.Z({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),a&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.Z({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new c.Z({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.Z({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.Z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}},2170:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>V,clip:()=>c,contains:()=>d,convexHull:()=>v,crosses:()=>s,cut:()=>u,densify:()=>H,difference:()=>w,disjoint:()=>y,distance:()=>l,equals:()=>f,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>k,flipVertical:()=>C,generalize:()=>D,geodesicArea:()=>O,geodesicBuffer:()=>_,geodesicDensify:()=>J,geodesicLength:()=>T,intersect:()=>M,intersects:()=>h,isSimple:()=>x,nearestCoordinate:()=>P,nearestVertex:()=>I,nearestVertices:()=>S,offset:()=>Z,overlaps:()=>A,planarArea:()=>L,planarLength:()=>N,relate:()=>G,rotate:()=>b,simplify:()=>m,symmetricDifference:()=>E,touches:()=>p,union:()=>R,within:()=>g});var r=n(99058),a=n(92463);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return r.G.extendedSpatialReferenceInfo(e)}function c(e,t){return r.G.clip(a.hydratedAdapter,i(e),e,t)}function u(e,t){return r.G.cut(a.hydratedAdapter,i(e),e,t)}function d(e,t){return r.G.contains(a.hydratedAdapter,i(e),e,t)}function s(e,t){return r.G.crosses(a.hydratedAdapter,i(e),e,t)}function l(e,t,n){return r.G.distance(a.hydratedAdapter,i(e),e,t,n)}function f(e,t){return r.G.equals(a.hydratedAdapter,i(e),e,t)}function h(e,t){return r.G.intersects(a.hydratedAdapter,i(e),e,t)}function p(e,t){return r.G.touches(a.hydratedAdapter,i(e),e,t)}function g(e,t){return r.G.within(a.hydratedAdapter,i(e),e,t)}function y(e,t){return r.G.disjoint(a.hydratedAdapter,i(e),e,t)}function A(e,t){return r.G.overlaps(a.hydratedAdapter,i(e),e,t)}function G(e,t,n){return r.G.relate(a.hydratedAdapter,i(e),e,t,n)}function x(e){return r.G.isSimple(a.hydratedAdapter,i(e),e)}function m(e){return r.G.simplify(a.hydratedAdapter,i(e),e)}function v(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.G.convexHull(a.hydratedAdapter,i(e),e,t)}function w(e,t){return r.G.difference(a.hydratedAdapter,i(e),e,t)}function E(e,t){return r.G.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function M(e,t){return r.G.intersect(a.hydratedAdapter,i(e),e,t)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.G.union(a.hydratedAdapter,i(e),e,t)}function Z(e,t,n,o,c,u){return r.G.offset(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function V(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.G.buffer(a.hydratedAdapter,i(e),e,t,n,o)}function _(e,t,n,o,c,u){return r.G.geodesicBuffer(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function P(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.G.nearestCoordinate(a.hydratedAdapter,i(e),e,t,n)}function I(e,t){return r.G.nearestVertex(a.hydratedAdapter,i(e),e,t)}function S(e,t,n,o){return r.G.nearestVertices(a.hydratedAdapter,i(e),e,t,n,o)}function z(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function b(e,t,n){var a;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(n=null!=(a=n)?a:z(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(r.G.rotate(e,t,n));return o.spatialReference=i,o}function k(e,t){var n;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(t=null!=(n=t)?n:z(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.G.flipHorizontal(e,t));return i.spatialReference=a,i}function C(e,t){var n;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(t=null!=(n=t)?n:z(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.G.flipVertical(e,t));return i.spatialReference=a,i}function D(e,t,n,o){return r.G.generalize(a.hydratedAdapter,i(e),e,t,n,o)}function H(e,t,n){return r.G.densify(a.hydratedAdapter,i(e),e,t,n)}function J(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return r.G.geodesicDensify(a.hydratedAdapter,i(e),e,t,n,o)}function L(e,t){return r.G.planarArea(a.hydratedAdapter,i(e),e,t)}function N(e,t){return r.G.planarLength(a.hydratedAdapter,i(e),e,t)}function O(e,t,n){return r.G.geodesicArea(a.hydratedAdapter,i(e),e,t,n)}function T(e,t,n){return r.G.geodesicLength(a.hydratedAdapter,i(e),e,t,n)}}}]);
//# sourceMappingURL=2170.4cf32027.chunk.js.map