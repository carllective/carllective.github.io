(function(){var t={1706:function(){},2218:function(t,e,n){"use strict";var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("transition",{key:t.loading,attrs:{appear:"",name:"loading"}},[t.loading?e("div",{staticClass:"loading"},[e("img",{staticClass:"loadingimage",attrs:{src:n(3826)}})]):t._e()]),e("div",{staticClass:"logobar"},[e("button",{on:{click:function(e){return t.$locale({l:"en-US"})}}},[t._v("English")]),e("button",{on:{click:function(e){return t.$locale({l:"fr-CA"})}}},[t._v("French")]),e("ul",{staticClass:"logobar-inner"},[t._m(0),e("li",[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:n(4804)}})])],1),e("ul",{staticClass:"desktop nav right"},[e("li",[e("router-link",{attrs:{to:"/map"}},[t._v("Map")])],1),e("li",{staticClass:"coming_soon"},[t._v(" Settings ")])])])]),e("router-view"),e("FooterArea"),e("div",{staticClass:"mobile_logobar"},[e("ul",[e("li",[e("router-link",{staticClass:"mobile_a",attrs:{to:"/"}}),t._v(" Home ")],1),e("li",{staticClass:"coming_soon"},[t._v(" Shop ")]),e("li",{staticClass:"coming_soon"},[t._v(" Calendar ")]),e("li",[e("router-link",{staticClass:"mobile_a",attrs:{to:"/map"}}),t._v(" Map ")],1),e("li",{staticClass:"coming_soon"},[t._v(" Settings ")])])])],1)},a=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"desktop nav left"},[e("li",{staticClass:"coming_soon"},[t._v(" Shop ")]),e("li",{staticClass:"coming_soon"},[t._v(" Calendar ")])])}],i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-inner"},[e("a",{staticClass:"button signup",attrs:{href:"http://eepurl.com/h7ok6D"}},[t._v("SIGN UP TO BE THE FIRST TO KNOW OF THE OFFICIAL APP LAUNCH")]),e("p",[t._v("Copyright "+t._s(t.year())+" Carllective. All Rights Reserved. ")]),t._m(0)])])},s=[function(){var t=this,e=t._self._c;return e("p",[t._v("Created by Rebecca Jane "),e("a",{attrs:{href:"https://www.instagram.com/designbyrebj",target:"_blank"}},[t._v("(@designbyrebj)")])])}],l={name:"FooterArea",components:{},watch:{},computed:{},methods:{year(){return(new Date).toString().split(" ")[3]}},data(){return{}},mounted(){}},c=l,u=n(1001),p=(0,u.Z)(c,i,s,!1,null,"3289ded2",null),d=p.exports,f=n(3822),g={name:"App",components:{FooterArea:d},watch:{},computed:{...(0,f.rn)(["loading"])},methods:{},data(){return{}},mounted(){}},m=g,h=(0,u.Z)(m,r,a,!1,null,null,null),v=h.exports,y=(n(6699),n(6265));const b="appTstPp0g20fQA2b",_="tblkFpWzKkk9IbNIf",w="tbljvU0FGVULYx6rM",C="keyaJEowLnEfKAamU",P=`https://api.airtable.com/v0/${b}/${_}?api_key=${C}`,k=`https://api.airtable.com/v0/${b}/${w}?api_key=${C}`;var A=new class{constructor(){}process_latlng(t,e){return new Promise((o=>{var r=n(1059),a=new r({apiKey:C}).base("appTstPp0g20fQA2b"),i=e.split(" ").join("%20");y.get(`https://api.geoapify.com/v1/geocode/search?text=${i}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((t=>({lat:t.data.features[0].properties.lat,long:t.data.features[0].properties.lon}))).then((e=>{a("Table 1").update([{id:t,fields:{Lat:e.lat.toString(),Long:e.long.toString()}}]),o(e)}))}))}init_airtable2(){return new Promise((t=>{y.get(k).then((e=>{console.log(window.location.href),window.location.href.includes("fr.")?(o.ZP.prototype.$header=e.data.records[0].fields.Header_fr,o.ZP.prototype.$smalltext=e.data.records[0].fields.Small_Text_fr):(o.ZP.prototype.$header=e.data.records[0].fields.Header,o.ZP.prototype.$smalltext=e.data.records[0].fields.Small_Text),t(e)}))}))}init_airtable(){return new Promise((t=>{y.get(P).then((e=>{var n=e.data.records.map((t=>({...t.fields,id:t.id}))).filter((t=>"True"!==t.Hidden)).sort(((t,e)=>parseInt(t.Date.split(":")[0].split("T")[0].split("-").join(""))-parseInt(e.Date.split(":")[0].split("T")[0].split("-").join("")))),r=0;for(let t=0;t<n.length;t++){if(n[t]["Date"])var a=n[t]["Date"].split(":")[0].split("T")[0].split("-")[1],i=n[t]["Date"].split(":")[0].split("T")[0].split("-")[2],s=n[t]["Date"].split("-")[0];n[t]["Lat"]&&n[t]["Long"]||this.process_latlng(n[t].id,n[t].Address).then((e=>{n[t]["Lat"]=e.lat,n[t]["Long"]=e.long})),a&&(n[t]["Month"]=this.getMonth(a)),i&&(n[t]["Day"]=i),n[t].Name&&(n[t]["url"]=`${n[t].Name.toLowerCase().split(" ").join("-")}-${n[t].Month.toLowerCase()}-${n[t].Day.toLowerCase()}`),(new Date).toString().includes(`${n[t]["Month"].split("").splice(0,3).join("")} ${n[t]["Day"]} ${s}`)&&(n[t]["Today"]=!0),r++}r===n.length&&(o.ZP.prototype.$meets=n,t(n))}))}))}getMonth(t){switch(t){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"August";case"09":return"September";case"10":return"October";case"11":return"November";case"12":return"December"}}},T=n(2415);o.ZP.use(f.ZP);var L=new f.ZP.Store({state:{your_location:null,your_ip:null,loading:!0},mutations:{setYourLocation(t,e){o.ZP.set(t,"your_location",e)},setYourIp(t,e){o.ZP.set(t,"your_ip",e)},setLoading(t,e){o.ZP.set(t,"loading",e)}},actions:{setYourIp(t,e){t.commit("setYourIp",e)},setLoading(t,e){t.commit("setLoading",e)}},plugins:[(0,T.Z)()]}),$=n(6265),S=new class{constructor(){}async init(){return new Promise((t=>{$.get("https://api.bigdatacloud.net/data/client-ip").then((t=>(console.log(navigator.language),t.data.ipString))).then((e=>{var n=[];L.state.your_location&&(n=["string"===typeof L.state.your_location.city,"string"===typeof L.state.your_location.state_code,"string"===typeof L.state.your_location.country]),!L.state.your_location||e!==L.state.your_ip||n.indexOf(!1)>-1?(L.commit("setYourIp",e),this.fetchLocation().then((e=>t(e)))):t(L.state.your_location)}))}))}fetchLocation(){return console.log("setting Location..."),new Promise((t=>{navigator.geolocation.getCurrentPosition((e=>{$.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.coords.latitude}&lon=${e.coords.longitude}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((e=>{console.log("making API call"),L.commit("setYourLocation",e.data.features[0].properties),t(e.data.features[0].properties)}),(t=>{console.log(t,"Try again in a minute.")}))}))}))}nearest(t){return new Promise((e=>{if(L.state.your_location){const n={method:"GET",url:`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${L.state.your_location.lat}${L.state.your_location.lon}/nearbyCities`,params:t,headers:{"X-RapidAPI-Key":"6d50373928msh8ea7650abbc2053p1c1465jsn8d11a1823388","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}};$.request(n).then((function(t){e(t.data)})).catch((function(t){console.log("Please set your location",t)}))}else e()}))}},j=n(2631);o.ZP.use(j.Z);const O=new j.Z({base:"/",mode:"history",routes:[{path:"",component:()=>n.e(227).then(n.bind(n,227))},{path:"/map",component:()=>n.e(546).then(n.bind(n,9546))},{path:"/:slug",component:()=>n.e(956).then(n.bind(n,4956))},{path:"/?:slug",component:()=>n.e(956).then(n.bind(n,4956))}]});var Z=O,I=n(1706),E=n.n(I);let x=E().localize;function D(){return new Promise((t=>{o.ZP.prototype.$geoAPI=S,o.ZP.prototype.$geoAPI.init({format:"json"}),new o.ZP({v_localize:x,store:L,router:Z,render:t=>t(v)}).$mount("#app"),t()}))}o.ZP.config.productionTip=!1,L.commit("setLoading",!0),setTimeout((()=>{L.commit("setLoading",!1)}),1500),Promise.all([A.init_airtable(),A.init_airtable2()]).then((()=>D()))},3826:function(t,e,n){"use strict";t.exports=n.p+"img/C.c9ba85c9.gif"},4804:function(t,e,n){"use strict";t.exports=n.p+"img/Carllective Wht.21c6f077.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],a=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{227:"ed42c3b3",546:"234c9553",956:"97346856"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{227:"fa7a82bb",546:"76ae447e",956:"95f653d0"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="carllective:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==e+a){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="DIR/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=a,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={227:1,546:1,956:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,l=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var u=l(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2218)}));o=n.O(o)})();
//# sourceMappingURL=app.bc253418.js.map