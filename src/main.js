import Vue from 'vue'
import App from './App.vue'
import airtable from './airtable';
import geo from './geo';
import store from './store';
import router from './router';
import localize from './localize';
let v_localize = localize.localize;
Vue.config.productionTip = false;

// if (window.location.href.includes("fr.")) {
//   store.commit("setLang", "fr");
// } else {
//   store.commit("setLang", "en");
// }

store.commit("setLang", "fr");

store.commit("setLoading", true);
setTimeout(() => {
  store.commit("setLoading", false);
}, 1500);

function initVue() {
  return new Promise((res) => {
    Vue.prototype.$geoAPI = geo;
    Vue.prototype.$geoAPI.init({format: 'json'});

      new Vue({
        v_localize,
        store,
        router,
        render: h => h(App),
      }).$mount('#app');
      res();
    })
}
Promise.all([airtable.init_airtable(), airtable.init_airtable2()]).then(() => initVue());
  
  



