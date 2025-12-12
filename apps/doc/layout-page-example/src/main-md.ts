import { createApp } from 'vue';
import MdPage from './pages/MdPage.vue';
import 'gasconsumer-ui-components/style.css';
import LibComponents from 'gasconsumer-ui-components/reg';

const app = createApp(MdPage);
app.use(LibComponents);

app.mount('#md');
