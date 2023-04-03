import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Maska from 'maska'
import VueTheMask from 'vue-the-mask';


const app = createApp(App);
app.use(VueTheMask)
app.use(Maska);
app.use(store);
app.use(router);
app.mount("#app");
