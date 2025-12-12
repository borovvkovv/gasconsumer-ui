import { createApp } from 'vue';
import SmPage from './pages/SmPage.vue';
import 'gasconsumer-ui-components/style.css';
import LibComponents from 'gasconsumer-ui-components/reg';

const app = createApp(SmPage);
app.use(LibComponents);

app.mount('#sm');
