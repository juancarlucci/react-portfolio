"use strict";var precacheConfig=[["/react-portfolio/index.html","616f3d9bb07617a5902a7150af737412"],["/react-portfolio/static/css/main.b05b46ba.css","e59b524d6c641a7ede065c61c3b75b10"],["/react-portfolio/static/js/main.919ed951.js","c7c22e8039cbabd9f5c129fa2f2fabf4"],["/react-portfolio/static/media/bg-abstract.792c4817.png","792c4817c9feca8dbbf1977da9713c03"],["/react-portfolio/static/media/butter-map-branding.17c6a19a.png","17c6a19a5f36aaa49f70f3d4549d534a"],["/react-portfolio/static/media/custom.569f7428.png","569f74288a4e1c8c735796b9a67f2847"],["/react-portfolio/static/media/drawing02.8978f004.jpg","8978f0041c95065f11f1c67cc5951a66"],["/react-portfolio/static/media/igloo.ba12b690.jpg","ba12b6906b6eb5c32d918e520c600b98"],["/react-portfolio/static/media/inspect-branding.6e9697cb.png","6e9697cb53c23d0efe28632e28025c18"],["/react-portfolio/static/media/jc.f1899e59.jpg","f1899e5998d6a7be0ec0a8ef22a5de53"],["/react-portfolio/static/media/monument-branding.d35209f8.png","d35209f8d8f0cce6b53acfd66becaebf"],["/react-portfolio/static/media/skills.f3eb9da9.png","f3eb9da979479bea337025b78523deac"],["/react-portfolio/static/media/star-bg.c421175b.png","c421175bd4b158acda9f09a84622c72d"],["/react-portfolio/static/media/world-cup-branding.5fe36b82.png","5fe36b82b9146334a681ce7c74255099"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/react-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});