import { storeItem, getItem} from './storageController.js';
import { showProfile } from './interface.js';
import { fetchDATA } from './fetchUsers.js';
import { randomUser10, waitTime, stampTransSpeed, stamp, dislikeBtn, likeBtn, hamburgerBtn, storedUsers, storedLikes, storedDislike } from './config.js';

// Function with all event listeners, easy to export to other files
export function events(users) {

  // Adding event listener to Like button
  likeBtn.addEventListener('click', async (ev) => { 
    styleStamp('');
    const arr = JSON.parse(getItem('liked'));
    arr.push(users[getItem('index')]);
    storeItem('liked', JSON.stringify(arr));
    await sleep(waitTime);
    updateContentStoredUsers();
    resetStamp();
    nextUser(users);
  });

  // Adding event listener to Dislike button
  dislikeBtn.addEventListener('click', async (ev) => { 
    styleStamp('dis');
    const arr = JSON.parse(getItem('disliked'));
    arr.push(users[getItem('index')]);
    storeItem('disliked', JSON.stringify(arr));
    await sleep(waitTime);
    updateContentStoredUsers();
    resetStamp();
    nextUser(users);
  });

  // Adding event listener to Hamburgermenu button
  hamburgerBtn.addEventListener('click', async (e) => {
    updateContentStoredUsers();
    displayStoredUsers();
  });
}

// Updating and displaying the content of the stored users
function updateContentStoredUsers() {
  const liked = JSON.parse(getItem('liked'));
  const disliked = JSON.parse(getItem('disliked'));
  let tempStrLike = '', tempStrDislike = '';
  liked.forEach(e => {
    tempStrLike += `
    <li>
      <img src="${e.image}">
      <p>${e.firstname}</p>
    </li>`;
  });
  disliked.forEach(e => {
    tempStrDislike += `
    <li>
      <img src="${e.image}">
      <p>${e.firstname}</p>
    </li>`;
  });
  console.log(tempStrLike);
  storedLikes.innerHTML = tempStrLike;
  storedDislike.innerHTML = tempStrDislike;
}

// Displaying the stored users block
function displayStoredUsers() {
  const displayed = storedUsers.style.display;
  if(displayed == 'block') {
    storedUsers.style.display = 'none';
  } else {
    storedUsers.style.display = 'block';
  }
}

// Show the next user
export function nextUser(users) {
  storeItem('index',getItem('index')+1);
  if(getItem('index')+1 > 10) {
    storeItem('index', 0);
    users = fetchDATA(randomUser10);
  }
  showProfile(users);
}

// Setting the effects and styles on the stamp
async function styleStamp(prefix) {
  await stamp.setAttribute('src', `./images/${prefix}like_stamp.png`);
  stamp.style.transition = stampTransSpeed;
  stamp.style.opacity = 1;
}

// Resetting the opacity from the stamp
function resetStamp() {
    stamp.style.opacity = 0;
}

// Time to wait
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}