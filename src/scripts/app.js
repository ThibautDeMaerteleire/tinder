import '../css/main.css'
import { randomUser10 } from './config.js';
import { fetchDATA } from './fetchUsers.js';
import { events } from './events.js';
import { showProfile } from './interface.js';
import { storeItem } from './storageController.js';

// When page is loaded in window
window.onload = () => {
  storeItem('liked', '[]');
  storeItem('disliked', '[]');
  storeItem('index', 0);
}


// Main application
export const app = async () => {
  const users = await fetchDATA(randomUser10);
  events(users);
  showProfile(users);
}

app();