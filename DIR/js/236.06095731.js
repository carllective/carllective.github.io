"use strict";(self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[]).push([[236],{6236:function(t,o,e){e.r(o),e.d(o,{default:function(){return h}});var n=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"map_page"}},[o("div",{attrs:{id:"map"}})])}],r=e(3822),i=e(3153),c={name:"MeetsPage",components:{},watch:{your_location:{handler(t){console.log(t),t&&this.getMyLocation()},deep:!0}},computed:{...(0,r.rn)(["your_location","lang"])},methods:{renderMap(){return new Promise((t=>{this.your_location&&(this.centerLat=this.your_location.lat,this.centerLong=this.your_location.lon),this.map=i.map("map",{center:[this.centerLat,this.centerLong],zoom:this.your_location?10:4}),i.tileLayer("https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=UhqYthhZlPgjJOmBxOln",{attribution:'<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(this.map),t(this.map)}))},async getMeetsLocations(){var t=i.icon({iconUrl:e(3951),iconSize:[30,42],iconAnchor:[15,42]}),o=i.icon({iconUrl:e(3466),iconSize:[30,42],iconAnchor:[15,42]});this.$meets.forEach((e=>{if(e.Lat&&e.Long){var n=i.marker([e.Lat,e.Long],{icon:e.Today?o:t}).addTo(this.map).bindPopup(`${e.Today?'<h3 style="color: red; text-align: center;">TODAY!</h3>':""}<h3 style="color: black; margin: 0; text-align: center;">${e.Name}</h3>\n          <p style="color: black; margin: 0; text-align: center;">${e.Address}</p>\n          <p style="text-align: center;"><a href="${e.url}" >${"en"===this.lang?"Read More":"Lire Plus"}</a></p>`,{offset:i.point(0,-30)});n.on("mouseover",(()=>{n.openPopup()}))}}))},async getMyLocation(){if(this.your_location){this.map.setZoom(10),this.map.panTo(new i.LatLng(this.your_location.lat,this.your_location.lon));var t=i.icon({iconUrl:e(7909),iconSize:[38,53],iconAnchor:[19,53]}),o=i.marker([this.your_location.lat,this.your_location.lon],{icon:t}).addTo(this.map).bindPopup('<p style="color: black;">Your Location</p>',{offset:i.point(0,-40)});o.on("mouseover",(()=>{o.openPopup()})),o.on("mouseout",(()=>{o.closePopup()}))}}},data(){return{map:null,centerLat:56.1304,centerLong:-106.3468}},mounted(){this.renderMap().then((()=>Promise.all([this.getMeetsLocations(),this.getMyLocation()])))}},s=c,l=e(1001),p=(0,l.Z)(s,n,a,!1,null,"709a10f0",null),h=p.exports},7909:function(t,o,e){t.exports=e.p+"img/C_Map_Marker.bc715fbb.png"},3951:function(t,o,e){t.exports=e.p+"img/C_Map_Marker_Car_Meets.c04a2f91.png"}}]);
//# sourceMappingURL=236.06095731.js.map