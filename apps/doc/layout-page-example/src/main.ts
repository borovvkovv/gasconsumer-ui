import { createApp } from 'vue';
import IndexPage from './pages/IndexPage.vue';
import 'gasconsumer-ui-components/style.css';
import LibComponents from 'gasconsumer-ui-components/reg';

const app = createApp(IndexPage);
app.use(LibComponents);

app.mount('#app');
