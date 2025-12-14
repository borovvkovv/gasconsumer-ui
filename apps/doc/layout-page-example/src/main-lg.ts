import { createApp } from 'vue';
import LgPage from './pages/LgPage.vue';
import 'gasconsumer-ui-components/style.css';
import LibComponents from 'gasconsumer-ui-components/reg';

const app = createApp(LgPage);
app.use(LibComponents);

app.mount('#lg');
