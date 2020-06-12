(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(186)),i={id:"error_handling",title:"Error Handling"},c={id:"error_handling",title:"Error Handling",description:"API calls can fail when input data is malformed or the server detects issues with the request. As an example, the following request obviously fails:",source:"@site/docs/error_handling.md",permalink:"/SpotifyAPI-NET/docs/next/error_handling",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/error_handling.md",version:"next",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1592003723,sidebar:"docs",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/next/getting_started"},next:{title:"Configuration",permalink:"/SpotifyAPI-NET/docs/next/configuration"}},s=[{value:"APIException",id:"apiexception",children:[]},{value:"APIUnauthorizedException",id:"apiunauthorizedexception",children:[]},{value:"APITooManyRequestsException",id:"apitoomanyrequestsexception",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"API calls can fail when input data is malformed or the server detects issues with the request. As an example, the following request obviously fails:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var track = await spotify.Tracks.Get("NotExistingTrackId");\nConsole.WriteLine(track.Name);\n')),Object(o.b)("p",null,"When a request fails an ",Object(o.b)("inlineCode",{parentName:"p"},"APIException")," is thrown. Specific errors may throw a child exception of ",Object(o.b)("inlineCode",{parentName:"p"},"APIException"),"."),Object(o.b)("h2",{id:"apiexception"},"APIException"),Object(o.b)("p",null,"A very general API error. The message is parsed from the API response JSON body and the response is available as public property."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'try {\n  var track = await spotify.Tracks.Get("NotExistingTrackId");\n} catch(APIException e) {\n  // Prints: invalid id\n  Console.WriteLine(e.Message);\n  // Prints: BadRequest\n  Console.WriteLine(e.Response?.StatusCode);\n}\n')),Object(o.b)("h2",{id:"apiunauthorizedexception"},"APIUnauthorizedException"),Object(o.b)("p",null,"Provides the same properties as ",Object(o.b)("inlineCode",{parentName:"p"},"APIException")," and occurs, when the access token is expired or not provided. Notice that an access token has to be included in ",Object(o.b)("strong",{parentName:"p"},"every")," request. Spotify does not allow unauthorized API access."),Object(o.b)("h2",{id:"apitoomanyrequestsexception"},"APITooManyRequestsException"),Object(o.b)("p",null,"Provides the same properties as ",Object(o.b)("inlineCode",{parentName:"p"},"APIException")," and occurs, when too many requests has been sent by your application. It also provides the property ",Object(o.b)("inlineCode",{parentName:"p"},"TimeSpan RetryAfter"),", which maps to the received ",Object(o.b)("inlineCode",{parentName:"p"},"Retry-After")," Header."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'try {\n  // call it very often?\n  var track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH");\n} catch(APITooManyRequestsException e) {\n  // Prints: seconds to wait, often 1 or 2\n  Console.WriteLine(e.RetryAfter);\n}\n')))}l.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,c({ref:t},p,{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);