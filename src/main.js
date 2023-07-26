import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import VCalendar from "v-calendar";
import axios from "axios";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/main.css";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

axios.interceptors.request.use(
	(config) => {
		const token = process.env.VUE_APP_ACCESS_TOKEN;
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

Vue.prototype.$axios = axios;

Vue.use(BootstrapVue);

Vue.use(VCalendar);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
