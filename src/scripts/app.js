import '../css/main.css'
import { randomUser10 } from './config.js';
import { fetchDATA } from './fetchUsers.js';
import { like, disLike, nextUser } from './events.js';
import { showProfile } from './interface.js';
import { storeItem, getItem} from './storageController.js';

function allEvents(users) {
  like(users);
  disLike(users);
}

const app = async () => {
  storeItem('index', 0);
  const users = await fetchDATA(randomUser10);
  allEvents(users);
  showProfile(users);
}

app();