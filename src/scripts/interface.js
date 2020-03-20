import { getItem } from './storageController.js';
import { photo, name, age, distance} from './config.js';

// Add data to user interface/card
export function showProfile(arr) {
  const obj = arr[getItem('index')];
  photo.setAttribute('src', obj.image);
  name.innerHTML = obj.firstname;
  age.innerHTML = obj.age;
  distance.innerHTML = 0;
}
