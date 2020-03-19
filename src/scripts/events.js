import { storeItem, getItem} from './storageController.js';
import { showProfile } from './interface.js';

const stamp = document.querySelector('#stamp');
const dislikeBtn = document.querySelector('#dislike');
const likeBtn = document.querySelector('#like');
const waitTime = 1500;

export function like(users) {
  console.log(users);
  // Like button
  likeBtn.addEventListener('click', async (ev) => {
    stamp.setAttribute('src', './images/like_stamp.png')
    stamp.style.transition = '0.2s';
    stamp.style.opacity = 1;
    await sleep(waitTime);
    resetStamp();
    nextUser(users);
  });
}

export function disLike(users) {
  console.log(users);
  // Dislike button
  dislikeBtn.addEventListener('click', async (ev) => {
    stamp.setAttribute('src', './images/dislike_stamp.png')
    stamp.style.transition = '0.2s';
    stamp.style.opacity = 1;
    await sleep(waitTime);
    resetStamp();
    nextUser(users);
  });
}

export function nextUser(users) {
  storeItem('index',parseInt(getItem('index'))+1);
  showProfile(users);
}

function resetStamp() {
    stamp.style.opacity = 0;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}