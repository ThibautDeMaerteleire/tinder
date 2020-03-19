import { storeItem, getItem} from './storageController.js';
import { showProfile } from './interface.js';

const stamp = document.querySelector('#stamp');
const dislikeBtn = document.querySelector('#dislike');
const likeBtn = document.querySelector('#like');
const hamburgerBtn = document.querySelector('.info');
const waitTime = 1500;


export function events(users) {

  // Like button
  likeBtn.addEventListener('click', async (ev) => {
    await stamp.setAttribute('src', './images/like_stamp.png')
    stamp.style.transition = '0.2s';
    stamp.style.opacity = 1;
    const arr = JSON.parse(getItem('liked'));
    arr.push(users[parseInt(getItem('index'))]);
    storeItem('liked', JSON.stringify(arr));
    await sleep(waitTime);
    resetStamp();
    nextUser(users);
  });

  // Dislike button
  dislikeBtn.addEventListener('click', async (ev) => {
    await stamp.setAttribute('src', './images/dislike_stamp.png')
    stamp.style.transition = '0.2s';
    stamp.style.opacity = 1;
    const arr = JSON.parse(getItem('disliked'));
    arr.push(users[parseInt(getItem('index'))]);
    storeItem('disliked', JSON.stringify(arr));
    await sleep(waitTime);
    resetStamp();
    nextUser(users);
  });

  // Hamburgermenu button
  hamburgerBtn.addEventListener('click', (e) => {
    const liked = JSON.parse(getItem('liked'));
    const disliked = JSON.parse(getItem('disliked'));
    
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