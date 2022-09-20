(function(){"use strict";var t={3858:function(t,e,r){r(6699);var a=r(6369),n=function(){var t=this,e=t._self._c;return e("div",{class:"fr"===t.lang?"fr":"en",attrs:{id:"app"}},[e("transition",{key:t.loading,attrs:{appear:"",name:"loading"}},[t.loading?e("div",{staticClass:"loading"},[e("img",{staticClass:"loadingimage",attrs:{alt:"Carllective loading animation",src:r(3826)}})]):t._e()]),e("div",{staticClass:"logobar"},[e("ul",{staticClass:"logobar-inner"},[e("ul",{staticClass:"desktop nav left"},[e("li",[e("router-link",{attrs:{to:"en"===t.lang?"/calendar":"/calendrier"}},[t._v(t._s("en"===t.lang?"Calendar":"Calendrier"))])],1),e("li",[e("router-link",{attrs:{to:"/map"}},[t._v("Map")])],1),e("li",{staticClass:"coming_soon"},[t._v(" "+t._s("en"===t.lang?"Shop":"Magasin")+" ")])]),e("li",[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{alt:"Carllective logo",src:r(4804)}})])],1),e("ul",{staticClass:"desktop nav right"},[e("li",{staticClass:"coming_soon"},[t._v(" "+t._s("en"===t.lang?"Settings":"Réglages")+" ")]),t._m(0)]),t._m(1)])]),e("router-view",{staticClass:"view",attrs:{scroll:t.scroll}}),e("FooterArea"),e("div",{staticClass:"mobile_logobar"},[e("ul",[e("li",[e("router-link",{staticClass:"mobile_a",attrs:{to:"/"}}),t._v(" Home ")],1),e("li",{staticClass:"coming_soon"},[t._v(" "+t._s("en"===t.lang?"Shop":"Magasin")+" ")]),e("li",[e("router-link",{staticClass:"mobile_a",attrs:{to:"en"===t.lang?"/calendar":"/calendrier"}}),t._v(" "+t._s("en"===t.lang?"Calendar":"Calendrier")+" ")],1),e("li",[e("router-link",{staticClass:"mobile_a",attrs:{to:"/map"}}),t._v(" "+t._s("en"===t.lang?"Map":"Carte")+" ")],1),e("li",{staticClass:"coming_soon"},[t._v(" "+t._s("en"===t.lang?"Settings":"Réglages")+" ")])])])],1)},o=[function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"langs"},[e("small",[e("a",{attrs:{href:"https://carllective.ca"}},[t._v("English")])]),e("small",[e("a",{attrs:{href:"https://fr.carllective.ca"}},[t._v("Français")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"langs mobile"},[e("small",[e("a",{attrs:{href:"https://carllective.ca"}},[t._v("English")])]),e("small",[e("a",{attrs:{href:"https://fr.carllective.ca"}},[t._v("Français")])])])}],i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-inner"},[e("a",{staticClass:"button signup",attrs:{href:"http://eepurl.com/h7ok6D"}},[t._v(t._s(t.$CTA))]),"en"===t.lang?e("p",[t._v("© Copyright "+t._s(t.year())+" Carllective. All Rights Reserved. ")]):e("p",[t._v("© Copyright "+t._s(t.year())+" Carllective. Tous droits reservés. ")]),e("p",[t._v(t._s("en"===t.lang?"Created by ":"Crée par ")+" Rebecca Jane "),e("a",{attrs:{href:"https://www.instagram.com/designbyrebj",target:"_blank"}},[t._v("(@designbyrebj)")])])])])},s=[],l=r(3822),c={name:"FooterArea",components:{},watch:{},computed:{...(0,l.rn)(["lang"])},methods:{year(){return(new Date).toString().split(" ")[3]}},data(){return{}},mounted(){}},u=c,d=r(1001),p=(0,d.Z)(u,i,s,!1,null,"d2f028aa",null),f=p.exports,g={name:"App",components:{FooterArea:f},watch:{},computed:{...(0,l.rn)(["loading","lang"])},methods:{},data(){return{scroll:null}},mounted(){window.addEventListener("scroll",(t=>{this.scroll=t}))}},m=g,h=(0,d.Z)(m,n,o,!1,null,null,null),v=h.exports,y=r(8984),_=r.n(y),b=r(2415);a.ZP.use(l.ZP);var C=new l.ZP.Store({state:{your_location:null,your_ip:null,loading:!0,lang:"en",activeFilter:"Date",activeProvince:{en:"Ontario",fr:"Ontario"},scrollY:0},mutations:{setYourLocation(t,e){a.ZP.set(t,"your_location",e)},setYourIp(t,e){a.ZP.set(t,"your_ip",e)},setLoading(t,e){a.ZP.set(t,"loading",e)},setLang(t,e){a.ZP.set(t,"lang",e)},setActiveFilter(t,e){a.ZP.set(t,"activeFilter",e)},setActiveProvince(t,e){a.ZP.set(t,"activeProvince",e)},setScrollY(t,e){a.ZP.set(t,"scrollY",e)}},actions:{setYourIp(t,e){t.commit("setYourIp",e)},setLoading(t,e){t.commit("setLoading",e)},setLang(t,e){t.commit("setLang",e)},setActiveProvince(t,e){t.commit("setActiveProvince",e)}},plugins:[(0,b.Z)()]}),P=r(6265);const w="appTstPp0g20fQA2b",A="tblkFpWzKkk9IbNIf",$="tbljvU0FGVULYx6rM",L="keyaJEowLnEfKAamU",T=`https://api.airtable.com/v0/${w}/${A}?api_key=${L}`,k=`https://api.airtable.com/v0/${w}/${$}?api_key=${L}`;var Z=new class{constructor(){}distance(t){return C.state.your_location?_().getDistance([C.state.your_location.lat,C.state.your_location.lon],[t.lat,t.lng]):null}process_latlng(t,e){return new Promise((a=>{var n=r(1059),o=new n({apiKey:L}).base("appTstPp0g20fQA2b"),i=e.split(" ").join("%20");P.get(`https://api.geoapify.com/v1/geocode/search?text=${i}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((t=>({lat:t.data.features[0].properties.lat,long:t.data.features[0].properties.lon}))).then((e=>{o("Table 1").update([{id:t,fields:{Lat:e.lat.toString(),Long:e.long.toString()}}]),a(e)}))}))}init_airtable2(){return new Promise((t=>{P.get(k).then((e=>{"fr"===C.state.lang?(a.ZP.prototype.$header=e.data.records[0].fields.Header_fr,a.ZP.prototype.$smalltext=e.data.records[0].fields.Small_Text_fr,a.ZP.prototype.$CTA=e.data.records[0].fields.CTA_fr,a.ZP.prototype.$sort_CTA=e.data.records[0].fields.Sort_CTA_fr):(a.ZP.prototype.$header=e.data.records[0].fields.Header,a.ZP.prototype.$smalltext=e.data.records[0].fields.Small_Text,a.ZP.prototype.$CTA=e.data.records[0].fields.CTA,a.ZP.prototype.$sort_CTA=e.data.records[0].fields.Sort_CTA),a.ZP.prototype.$og_image=e.data.records[0].fields.og_image,a.ZP.prototype.$bg_image=e.data.records[0].fields.BG_Pattern[0].url,t(e)}))}))}init_airtable(){return new Promise((t=>{P.get(T).then((e=>{var r=e.data.records.map((t=>({...t.fields,id:t.id}))).filter((t=>parseInt(t.Date.split("-").join(""))>=this.numericDate())).filter((t=>!0!==t.Hidden)).sort(((t,e)=>parseInt(t.Date.split(":")[0].split("T")[0].split("-").join(""))-parseInt(e.Date.split(":")[0].split("T")[0].split("-").join("")))),n=0;for(let t=0;t<r.length;t++){if(r[t]["Date"])var o=r[t]["Date"].split(":")[0].split("T")[0].split("-")[1],i=r[t]["Date"].split(":")[0].split("T")[0].split("-")[2],s=r[t]["Date"].split("-")[0];if(r[t]["Lat"]&&r[t]["Long"]?r[t]["DistanceFromMe"]=this.distance({lat:parseFloat(r[t]["Lat"]),lng:parseFloat(r[t]["Long"])}):this.process_latlng(r[t].id,r[t].Address).then((e=>{r[t]["Lat"]=e.lat,r[t]["Long"]=e.long})),i&&(r[t]["Day"]=i),o&&"fr"!==C.state.lang){r[t]["Month"]=this.getMonth(o);var l=(new Date).toString().split(" ").splice(0,4).join(" ");l.includes(`${r[t]["Month"].substr(0,3)} ${r[t]["Day"]} ${s}`)&&(r[t]["Today"]=!0)}else if(o&&"fr"===C.state.lang){r[t]["Month"]=this.getMonth_fr(o);var c=(new Date).toLocaleString("fr-FR",{month:"long",day:"2-digit",year:"numeric"});c.normalize("NFD").replace(/\p{Diacritic}/gu,"")===`${r[t]["Day"]} ${r[t]["Month"]} ${s}`.toLowerCase()&&(r[t]["Today"]=!0)}r[t].Name&&(r[t]["url"]=`${r[t].Name.toLowerCase().split(" ").join("-")}-${r[t].Month.toLowerCase()}-${r[t].Day.toLowerCase()}`),n++}n===r.length&&(a.ZP.prototype.$meets=r,t(r))}))}))}numericDate(){return parseInt(`${(new Date).getFullYear()}${("0"+((new Date).getMonth()+1)).slice(-2)}${("0"+(new Date).getDate()).slice(-2)}`)}getMonth_fr(t){switch(t){case"01":return"Janvier";case"02":return"Fevrier";case"03":return"Mars";case"04":return"Avril";case"05":return"Mai";case"06":return"Juin";case"07":return"Juillet";case"08":return"Aout";case"09":return"Septembre";case"10":return"Octobre";case"11":return"Novembre";case"12":return"Decembre"}}getMonth(t){switch(t){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"August";case"09":return"September";case"10":return"October";case"11":return"November";case"12":return"December"}}},D=r(6265),S=new class{constructor(){}async init(){return new Promise((t=>{D.get("https://api.bigdatacloud.net/data/client-ip").then((t=>t.data.ipString)).then((e=>{var r=[];C.state.your_location&&(r=["string"===typeof C.state.your_location.city,"string"===typeof C.state.your_location.state_code,"string"===typeof C.state.your_location.country]),!C.state.your_location||e!==C.state.your_ip||r.indexOf(!1)>-1?(C.commit("setYourIp",e),this.fetchLocation().then((e=>{t(e),window.location.reload()}))):t(C.state.your_location)}))}))}fetchLocation(){return console.log("setting Location..."),new Promise((t=>{navigator.geolocation.getCurrentPosition((e=>{D.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.coords.latitude}&lon=${e.coords.longitude}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((e=>{console.log("making API call"),C.commit("setYourLocation",e.data.features[0].properties),console.log(e.data.features[0].properties.state),C.commit("setActiveProvince",{en:e.data.features[0].properties.state,fr:e.data.features[0].properties.state}),t(e.data.features[0].properties)}),(t=>{console.log(t,"Try again in a minute.")}))}))}))}nearest(t){return new Promise((e=>{if(C.state.your_location){const r={method:"GET",url:`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${C.state.your_location.lat}${C.state.your_location.lon}/nearbyCities`,params:t,headers:{"X-RapidAPI-Key":"6d50373928msh8ea7650abbc2053p1c1465jsn8d11a1823388","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}};D.request(r).then((function(t){e(t.data)})).catch((function(t){console.log("Please set your location",t)}))}else e()}))}},j=r(2631);a.ZP.use(j.Z);const M=new j.Z({base:"/",mode:"history",routes:[{path:"",component:()=>r.e(282).then(r.bind(r,4282))},{path:"/map",component:()=>Promise.all([r.e(449),r.e(855)]).then(r.bind(r,3855))},{path:"/calendar",component:()=>r.e(958).then(r.bind(r,7958))},{path:"/calendrier",component:()=>r.e(958).then(r.bind(r,7958))},{path:"/:slug",component:()=>Promise.all([r.e(449),r.e(210)]).then(r.bind(r,1210))},{path:"/?:slug",component:()=>Promise.all([r.e(449),r.e(210)]).then(r.bind(r,1210))}]});var F=M,O=r(7956),x=r.n(O);function E(){return new Promise((t=>{new a.ZP({store:C,router:F,render:t=>t(v)}).$mount("#app"),t()}))}a.ZP.config.productionTip=!1,a.ZP.use(x()),window.location.href.includes("fr.")?C.commit("setLang","fr"):C.commit("setLang","en"),C.commit("setLoading",!0),setTimeout((()=>{C.commit("setLoading",!1)}),2e3),a.ZP.prototype.$geoAPI=S,a.ZP.prototype.$geoAPI.init({format:"json"}).then(Promise.all([Z.init_airtable(),Z.init_airtable2()]).then((()=>E())))},3826:function(t,e,r){t.exports=r.p+"img/C.c9ba85c9.gif"},4804:function(t,e,r){t.exports=r.p+"img/Carllective Wht.21c6f077.png"}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{210:"3a80344c",282:"430f2939",449:"163d4e74",855:"4a9d0acd",958:"bc5a4d06"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{210:"b2d5ce3e",282:"447ad7bd",855:"6e9d45de",958:"bf9335b9"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="carllective:";r.l=function(a,n,o,i){if(t[a])t[a].push(n);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[n];var p=function(e,r){s.onerror=s.onload=null,clearTimeout(f);var n=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="DIR/"}(),function(){var t=function(t,e,r,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),a(l)}};return n.onerror=n.onload=o,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=r[a],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){n=i[a],o=n.getAttribute("data-href");if(o===t||o===e)return n}},a=function(a){return new Promise((function(n,o){var i=r.miniCssF(a),s=r.p+i;if(e(i,s))return n();t(a,s,n,o)}))},n={143:0};r.f.miniCss=function(t,e){var r={210:1,282:1,855:1,958:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=a(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,a){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(r,a){n=t[e]=[r,a]}));a.push(n[2]=o);var i=r.p+r.u(e),s=new Error,l=function(a){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(e&&e(a);c<i.length;c++)o=i[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(3858)}));a=r.O(a)})();
//# sourceMappingURL=app.5fba9609.js.map