import { storeItem, getItem} from './storageController.js';

const photo = document.querySelector('#photo');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const distance = document.querySelector('#distance');

export function showProfile(arr) {
  const obj = arr[parseInt(getItem('index'))];
  photo.setAttribute('src', obj.image);
  name.innerHTML = obj.firstname;
  age.innerHTML = obj.age;
  distance.innerHTML = 0;
}
