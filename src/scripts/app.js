import { randomUser10 } from './config.js';
import { fetchDATA } from './fetchUsers.js';
import { like, disLike, nextUser } from './events.js';

function allEvents() {
  like();
  disLike();
}

const app = () => {
  fetchDATA(randomUser10);
  allEvents();
}

app();