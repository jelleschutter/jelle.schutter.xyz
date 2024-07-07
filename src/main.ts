import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArchive, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFile, faStar } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faArchive);
library.add(faCodeBranch);
library.add(faEnvelope);
library.add(faFile);
library.add(faGithub);
library.add(faLinkedin);
library.add(faStar);

const app = createApp(App).use(router);
app.mount('#app');
app.component('fa-icon', FontAwesomeIcon);
