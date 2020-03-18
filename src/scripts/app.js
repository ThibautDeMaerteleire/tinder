import { randomUser10 } from './config.js';
import { fetchDATA } from './fetchUsers.js';



const app = () => {
  fetchDATA(randomUser10);

}

app();