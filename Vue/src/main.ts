import { createApp } from 'vue';
import App from './App.vue';
import 'devextreme/dist/css/dx.light.css';
import config from 'devextreme/core/config';
import './assets/main.css';
import { licenseKey } from './devextreme-license';

config({ licenseKey });

const app = createApp(App);

app.mount('#app');
